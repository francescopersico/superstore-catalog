FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY dist ./dist

EXPOSE 8080

CMD [ "node", "dist/app.js" ]