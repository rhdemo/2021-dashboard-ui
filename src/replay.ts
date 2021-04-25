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
    turns: TurnRes[];
    winner: string;
    startTs: number;
    endTs: number;
}

const replayUrl = 'streams-replay-tracker-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com';
//const rankingUrl = 'scoring-service-battleships-scoring.apps.summit-gcp.eior.p2.openshiftapps.com';

// const replayUrl = Deno.env.get("REPLAY_SERVER");
// const rankingUrl = Deno.env.get("RANK_SERVER");

export class ReplayResource extends Drash.Http.Resource {
    static paths = ["/replay/:gameId"];
    public async GET() {
        const gameId = this.request.getPathParam("gameId");
        //let rankData: Player[] = [];
        let replayData: Turn[][] = [];
        if (!gameId) { throw new Drash.Exceptions.HttpException(400, "replay requires a gameID")}
        else {
            // rankData = await fetch(`http://${rankingUrl}/scoring/${gameId}/ranking?max=10`).then(res=>res.json()).catch(e=>[]);
            console.log(`https://${replayUrl}/game/${gameId}/replays`);
            replayData = await fetch(`https://${replayUrl}/game/${gameId}/replays`).then(res=>res.json()).then((matches:Match[]) => {
                return matches.map((match:Match) : Turn[] => {
                    console.log('Turns:',match.turns.length);
                    return match.turns.map((turn:TurnRes) : Turn => {
                        let origin = new Coord(turn.origin);
                        return { hit: turn.hit, origin: [origin.x,origin.y]};
                    })
                })
            });

            this.response.headers.set("Content-Type","application/json");
            this.response.body = replayData;
            return this.response;
            
        }
    }
}