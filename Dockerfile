# syntax=docker/dockerfile:1
FROM node
WORKDIR /app
COPY package.json ./
RUN yarn set version berry
COPY yarn.lock .yarn .yarnrc.yml ./
RUN yarn install
COPY . ./
CMD yarn start
