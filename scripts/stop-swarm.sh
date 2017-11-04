#!/usr/bin/env bash

docker service rm web-client-service
docker swarm leave -f