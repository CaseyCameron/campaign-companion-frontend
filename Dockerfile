FROM node:16.13-bullseye

RUN mkdir /data
WORKDIR /data

COPY . /data
RUN npm install

CMD npm run start
