const config = new Map([
    ['LEADERBOARD_SERVER',Deno.env.get('LEADERBOARD_SERVER') || 'localhost:8080'],
    ['STATS_SERVER', Deno.env.get('STATS_SERVER') || 'localhost:8080'],
    ['REPLAY_SERVER', Deno.env.get('REPLAY_SERVER') || 'localhost:8080']
]);

const dashboardFile = await Deno.readTextFile(`${Deno.cwd()}/assets/html/dashboard.html`);
const replayerFile = await Deno.readTextFile(`${Deno.cwd()}/assets/html/replayer.html`);

let replaceValues = (str:string, vals:Map<string,string>) => {
    vals.forEach((v,k) => {
        str = str.replaceAll('${'+k+'}',v)
    }); 
    return str; 
}
export const dashboardHTML = replaceValues(dashboardFile, config);
export const replayerHTML = replaceValues(replayerFile, config);