FROM node:14.21.2-alpine

ARG BASE_URL
ARG API_BASE_URL
ARG IMAGE_URL
ARG LANG_RU
ARG LANG_EN
ARG LANG_ZH
ARG ENVIRONMENT

ENV TZ=Europe/Moscow
ENV DEBUG=nuxt:*
ENV BASE_URL=$BASE_URL
ENV API_BASE_URL=$API_BASE_URL
ENV IMAGE_URL=$IMAGE_URL
ENV LANG_RU=$LANG_RU
ENV LANG_EN=$LANG_EN
ENV LANG_ZH=$LANG_ZH
ENV ENVIRONMENT=$ENVIRONMENT

RUN apk update && apk add tzdata bash

WORKDIR /app

ADD . /app
RUN env
RUN npm install
RUN npm run build

#CMD pm2-runtime start
#CMD pm2-runtime start ./node_modules/nuxt/bin/nuxt.js --name "nuxtKorabli" -i max
#CMD pm2-runtime start ./node_modules/nuxt/bin/nuxt.js --name "nuxtKorabli" -- start --time -i max
CMD ["npm", "run", "start"]

