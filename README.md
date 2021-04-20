# 2021 Summit Demo Dashboard

## Build/Publish Container

* `buildah bud -f Containerfile -t 2021-dashboard-ui`
* `buildah push localhost/2021-dashboard-ui docker://quay.io/redhatdemo/2021-dashboard-ui`

## Environment Variables

* `LEADERBOARD_SERVER` - URL (no `http`) for the `/leaderboard` websocket server
* `STATS_SERVER` - URL (no `http`) for the `/stats` websocket server
* `REPLAY_SERVER` - URL (no `http`) for the 
*