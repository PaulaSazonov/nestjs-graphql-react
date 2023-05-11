FROM node:20-alpine

WORKDIR /app

ENV YARN_VERSION berry
RUN yarn set version $YARN_VERSION
COPY .yarnrc.yml /app/.yarnrc.yml

RUN yarn install

COPY .yarn /app/.yarn

RUN cat /app/.yarnrc.yml
RUN printf "Project yarn version: " && yarn --version

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY src /app/src

RUN yarn install --frozen-lockfile

CMD ["yarn", "start"]