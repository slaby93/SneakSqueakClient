FROM node:6.9.2
EXPOSE 3000
WORKDIR /app
ADD . /app
CMD npm install yarn --global && yarn install && yarn start
