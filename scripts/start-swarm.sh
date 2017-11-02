#!/usr/bin/env bash

# docker swarm init
# # http://0.0.0.0:3000/
# docker service create \
#     --name web-client-service \
#     --replicas 3 \
#     --publish 3000:3000 \
#     gsdsolutions/web-client-service
# docker stack deploy -c docker-compose.yml sneaksqueak

# sleep .3
# docker service list


docker stack deploy -c docker-compose.yml sneaksqueak