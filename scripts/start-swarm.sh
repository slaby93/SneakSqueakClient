#!/usr/bin/env bash

docker swarm init
docker stack deploy -c docker-compose.yml sneaksqueak