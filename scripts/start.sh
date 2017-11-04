#1. create VM's
docker-machine create --driver virtualbox vm1
docker-machine create --driver virtualbox vm2
#2.

# docker-machine ssh myvm1 "docker swarm init --advertise-addr <vm1>"
# docker-machine ssh myvm1 "docker swarm init --advertise-addr <vm2>"

# docker stack deploy -c docker-compose.yml sneaksqueak

