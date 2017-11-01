#!/usr/bin/env bash

docker rm -f web-client-service

docker rmi web-client-service

docker volume prune

docker build -t web-client-service .
