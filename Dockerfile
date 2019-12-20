FROM node:8.16-alpine

USER node
WORKDIR /home/node/

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json /home/node/app
RUN npm install --production
COPY --chown=node:node . /home/node/app
RUN find /home/node/app/config/ ! -name 'default.json' -type f -exec rm -f {} +

CMD npm run start-prod
EXPOSE 4000
