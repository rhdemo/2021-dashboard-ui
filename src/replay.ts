import { Drash } from "https://deno.land/x/drash@v1.4.4/mod.ts";

//let replayUrl = Deno.env.get("REPLAY_SERVER");
let replayUrl = 'ks-matches-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com';
let gameUrl = 'ks-players-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com';
export class ReplayResource extends Drash.Http.Resource {
    static paths = ["/replay","/replay/:id"];
    public async GET() {
        const playerId = this.request.getPathParam("id");
        const gameId = await fetch(`https://${gameUrl}/game`).then(res=>res.json()).then(data=>data['gameId']);
        const matches = await fetch(`https://${gameUrl}/game/${gameId}/player-matches/${playerId}`).then(res=>res.json()).then(data=>data['matches']);
        const replayData = await fetch(`https://${replayUrl}/games/${gameId}/matches/${matches[0]}`).then(res=>res.json());
        this.response.body = this.response.render(
            "/replay.html",
            {
                replayUrl: replayUrl,
                gameUrl: gameUrl,
                playerId: playerId,
                gameId: gameId,
                replayData: JSON.stringify(replayData)
            }
        )

        return this.response;
    }
}