FROM node:6.11.4

# Sane defaults for setting up users
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies
RUN npm install -g yo
RUN npm install -g generator-aframe
USER node
WORKDIR /home/node

WORKDIR /home/node/html
CMD [ "polymer", "serve", "-H", "0.0.0.0", "-p", "8081" ]
EXPOSE 8081