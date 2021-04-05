import { renderFile } from "https://deno.land/x/dejs/mod.ts";

const config = {
    LEADERBOARD_SERVER: Deno.env.get('LEADERBOARD_SERVER') || 'localhost:8080',
    STATS_SERVER: Deno.env.get('STATS_SERVER') || 'localhost:8080',
    REPLAY_SERVER: Deno.env.get('REPLAY_SERVER')
}

export const dashboardHTML = await renderFile(`${Deno.cwd()}/assets/html/dashboard.html`,{config:config});
export const replayerHTML = await renderFile(`${Deno.cwd()}/assets/html/replayer.html`, {config:config});