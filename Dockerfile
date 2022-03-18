FROM node:17-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "dev"]
