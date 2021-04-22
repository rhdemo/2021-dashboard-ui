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

const replayUrl = 'https://ks-matches-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com/';
const gameUrl = 'https://ks-players-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com/';
const rankingUrl = 'http://scoring-service-battleships-scoring.apps.summit-gcp.eior.p2.openshiftapps.com/scoring/';

// const replayUrl = Deno.env.get("REPLAY_SERVER");
// const gameUrl = Deno.env.get("GAME_SERVER");
// const rankingUrl = Deno.env.get("RANK_SERVER");

export class ReplayResource extends Drash.Http.Resource {
    static paths = ["/replay","/replay/:id"];
    public GET() {
        this.response.headers.set("Content-Type","application/json");
        this.response.body = JSON.stringify(['test','test1']);
        return this.response;
    }
    public POST() {
        let rankData: string[] = []
        let replayData: Promise<Match>[] = [];
        let playerMatches: string[] = [];
        const playerIds = this.request.getBodyParam("players");
        if (!playerIds) { throw new Drash.Exceptions.HttpException(400, "replay requires a players body parameter")}
        else {
            const gameId = 'c1a88af1716e2173'; //await fetch(`https://${gameUrl}/game`).then(res=>res.json()).then(data=>data['gameId']);
            console.log('GameID:',gameId);
            const rankData = [{"userId":"c1l7ldEjTThwn3o1Nf5gb","matchId":"cH1aWFl9PnZI9gqO3966o","gameId":"c1a88af1716e2173","username":"Pyrite Moose","human":true,"score":839,"timestamp":1619112810141,"gameStatus":"WIN","bonus":69},{"userId":"G_mBfkpWP-o1_UOQ2_Vxl","matchId":"VPidbgYpRwFaXYJRI5oWo","gameId":"c1a88af1716e2173","username":"Sand Ninja","human":true,"score":490,"timestamp":1619113327130,"gameStatus":"PLAYING","bonus":60},{"userId":"Xn8uadCMCBgTagESqm7hE","matchId":"YPiaxFpyuSd0blJAOE4g9","gameId":"c1a88af1716e2173","username":"Holly Arrow","human":true,"score":245,"timestamp":1619110464644,"gameStatus":"PLAYING","bonus":20},{"userId":"oON3AOVaise0MtnLsXcE9","matchId":"-RZ4IcnU2_w0Rv1gFevQ9","gameId":"c1a88af1716e2173","username":"Fantasy Wyrm","human":true,"score":237,"timestamp":1619110497269,"gameStatus":"PLAYING","bonus":7},{"userId":"c1l7ldEjTThwn3o1Nf5gb","matchId":"XRIhcuLM_2IXv95a40eX4","gameId":"c1a88af1716e2173","username":"Pyrite Moose","human":true,"score":193,"timestamp":1619113068188,"gameStatus":"PLAYING","bonus":28},{"userId":"WVrj-Vfrf-93OnD2v5zD1","matchId":"7xFYjtLXtgcPc4rhx9Dc-","gameId":"c1a88af1716e2173","username":"Frill Flasher","human":true,"score":145,"timestamp":1619110460237,"gameStatus":"PLAYING","bonus":20}]; //await fetch(`http://${rankingUrl}/scoring/${gameId}/ranking?max=100`).then(res=>res.json());
            String(playerIds).split(',').map(async playerId=> {
                let match = await fetch(`https://${gameUrl}/game/${gameId}/player-matches/${playerId}`)
                .then(res=> {
                    console.log('MatchResult:',res);
                    return res.json()
                })
                .then(data=> {
                    console.log('MatchData:',data);
                    return data['matches'][0];
                });
                playerMatches.push(match);
            });
            replayData = playerMatches.map(async (match: string):Promise<Match> => {
                let matchUrl = `https://${replayUrl}/games/${gameId}/matches/${match}`;
                console.log('MatchURl:',matchUrl);
                let matchRecord = await fetch(matchUrl).then(res=>res.json());
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

