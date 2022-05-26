# It's better to have a multi-stage build to keep prod images small
# But I think this is out of the task's scope :)

FROM node:18-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

CMD [ "yarn", "start" ]