FROM node:14.0.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --silent

RUN npm install -g sequelize

RUN npm install -g mysql2

RUN npm run migration

ENV NODE_ENV=development

CMD [ "npm", "run", "dev" ]