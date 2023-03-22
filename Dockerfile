FROM node:14.21.2-alpine

ENV APP_ROOT=/app
ENV API_BASE_URL=https://korabliki.nuu.ru/api/v1/

WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
