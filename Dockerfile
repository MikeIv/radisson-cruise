FROM node:18-alpine

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

RUN apk update && apk add tzdata bash g++ make py3-pip

WORKDIR /app

ADD . /app
RUN env
RUN npm config set disturl https://nodejs.org/dist
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

