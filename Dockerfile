FROM node:14.21.2-alpine

ARG BASE_URL
ARG API_BASE_URL

ENV BASE_URL=$BASE_URL
ENV API_BASE_URL=$API_BASE_URL

WORKDIR /app

ADD . /app
RUN env
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
