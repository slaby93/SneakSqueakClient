FROM node:latest
EXPOSE 3000
WORKDIR /app
ADD . /app
CMD npm install yarn --global &&  yarn install && NODE_ENV=production JS_ENV=production yarn start
