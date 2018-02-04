FROM node:alpine

MAINTAINER chosenbreed@gmail.com

COPY . /src

RUN cd /src; npm install

EXPOSE 3000

CMD cd /src && npm run start