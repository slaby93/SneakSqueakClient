# get parameters
while [ "$#" -gt 0 ]; do
  case "$1" in
    --start|-s)
      docker stack deploy -c docker-compose.yml sneaksqueak
    ;;
    --stop|-s)
    docker stack rm sneaksqueak
    ;;
  esac
done
