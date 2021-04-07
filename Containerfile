FROM quay.io/ldary/deno
RUN mkdir -p /var/www/assets
WORKDIR /var/www
COPY assets /var/www/assets/
COPY *.ts /var/www/
EXPOSE 8000/tcp
ENV LEADERBOARD_SERVER="$LEADERBOARD_SERVER" STATS_SERVER="$STATS_SERVER" REPLAY_SERVER="$REPLAY_SERVER"
ENTRYPOINT [ "deno", "run", "--unstable", "--allow-env", "--allow-read", "--allow-net=0.0.0.0:8000", "app.ts" ]