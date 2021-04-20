import { Drash } from "https://deno.land/x/drash@v1.4.4/mod.ts";

class Coord {
    x: number
    y: number
    constructor(coords:string) {
       [this.x,this.y] = coords.split(',').map(i=>parseInt(i)); 
    }
}

type Turn = {
    destroyed: boolean;
    hit: boolean;
    origin: Coord;
    attacker: string;
}

type Player = {
    username: string;
    uuid: string;
    human: boolean;
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

// const replayUrl = Deno.env.get("REPLAY_SERVER");
// const gameUrl = Deno.env.get("GAME_SERVER");
const replayUrl = 'ks-matches-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com';
const gameUrl = 'ks-players-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com';

export class ReplayResource extends Drash.Http.Resource {
    static paths = ["http://localhost:8000/replay","/replay/:id"];
    public async POST() {
        let replayData: Promise<Match>[] = [];
        let playerMatches: string[] = [];
        const playerIds = this.request.getBodyParam("players");
        console.log("Players:", this.request.getAllBodyParams());
        if (!playerIds) { throw new Drash.Exceptions.HttpException(400, "replay requires a players body parameter")}
        else {
            const gameId = await fetch(`https://${gameUrl}/game`).then(res=>res.json()).then(data=>data['gameId']);
            String(playerIds).split(',').map(async playerId=>playerMatches.push(await fetch(`https://${gameUrl}/game/${gameId}/player-matches/${playerId}`).then(res=>res.json()).then(data=>data['matches'][0])));
            replayData = playerMatches.map(async (match: string):Promise<Match> => {
                let matchRecord = await fetch(`https://${replayUrl}/games/${gameId}/matches/${match}`).then(res=>res.json());
                return matchRecord;
            });
            //const matches = await fetch(`https://${gameUrl}/game/${gameId}/player-matches/${playerId}`).then(res=>res.json()).then(data=>data['matches'][0]);
            this.response.headers.set("Content-Type","application/json");
            this.response.body = JSON.stringify(
                {
                    replayData: JSON.stringify(replayData)
                }
            )

            return this.response;
        }
    }
}

