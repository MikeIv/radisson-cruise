FROM node:14.21.2-alpine

ARG API_BASE_URL
ENV API_BASE_URL=$API_BASE_URL

WORKDIR ${APP_ROOT}

ADD . /app
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
