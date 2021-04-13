import { Drash } from "https://deno.land/x/drash@v1.4.4/mod.ts";

let leaderboardUrl = Deno.env.get("LEADERBOARD_SERVER");
let statsUrl = Deno.env.get("STATS_SERVER");

let config = new Map();
config.set('LEADERBOARD_SERVER', leaderboardUrl);
config.set('STATS_SERVER', statsUrl);

export class DashboardResource extends Drash.Http.Resource {
    static paths = ["/dashboard"];
    public GET() {
        this.response.body = this.response.render(
            "/dashboard.html",
            {
                leaderboardUrl: leaderboardUrl,
                statsUrl: statsUrl
            }
        )

        return this.response;
    }
}