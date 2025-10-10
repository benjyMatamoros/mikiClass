FROM node:22-alpine

WORKDIR /usr/src/app

COPY . ./

EXPOSE 80

RUN rm -rf node_modules && npm i

CMD ["npm", "start"]