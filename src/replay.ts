import { Drash } from "https://deno.land/x/drash@v1.4.4/mod.ts";

class Coord {
    x: number
    y: number
    constructor(coords:string) {
       [this.x,this.y] = coords.split(',').map(i=>parseInt(i)); 
    }
}

type Turn = {
    hit?: boolean;
    origin: number[];
}

type TurnRes = {
    hit?: boolean;
    origin: string;
}

type Player = {
    userId: string;
    username: string;
    gameId: string;
    human: boolean;
    score: number;
    bonus: number;
    matchId: string;
}

type Match = {
    gameId: string;
    matchId: string;
    playerA: Player;
    playerB: Player;
    turns: Turn[];
    winner: string;
    startTs: number;
    endTs: number;
}

const replayUrl = 'matches-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com';
const rankingUrl = 'scoring-service-battleships-scoring.apps.summit-gcp.eior.p2.openshiftapps.com';

// const replayUrl = Deno.env.get("REPLAY_SERVER");
// const rankingUrl = Deno.env.get("RANK_SERVER");

export class ReplayResource extends Drash.Http.Resource {
    static paths = ["/replay/:gameId"];
    public async GET() {
        const gameId = this.request.getPathParam("gameId");
        let rankData: Player[] = [];
        let replayData: Promise<Turn[]>[] = [];
        if (!gameId) { throw new Drash.Exceptions.HttpException(400, "replay requires a gameID")}
        else {
            rankData = await fetch(`http://${rankingUrl}/scoring/${gameId}/ranking?max=10`).then(res=>res.json()).catch(e=>[]);
            replayData = await rankData.map(async (player:Player) : Promise<Turn[]> => {
                let matchUrl = `https://${replayUrl}/games/${player.gameId}/matches/${player.matchId}`;
                let matchData:Turn[] = [];
                let data = await fetch(matchUrl).then(res=>res.json()).catch(e=>{turns:[]});
                if (data) {
                    matchData = data.turns.reduce((a:Turn[],c:TurnRes) : Turn[]=> {
                        let origin = new Coord(c.origin);
                        a.push({
                            hit: c.hit,
                            origin: [origin.x,origin.y]
                        });
                        return a;
                    },[] as Turn[]);
                }
                return matchData;
            });
            this.response.headers.set("Content-Type","application/json");
            //this.response.body = replayData;
            this.response.body = await rankData.map(async (player:Player) : Promise<Match> => {
                return await fetch(`https://${replayUrl}/games/${player.gameId}/matches/${player.matchId}`)
                    .then(resp=>resp.json()).then((data:Match)=>data);
            });

            return this.response;
        }
    }
}