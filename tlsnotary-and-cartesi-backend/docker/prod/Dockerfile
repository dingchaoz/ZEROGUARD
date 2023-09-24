ARG NODEJS_VERSION
# ts編譯需要的環境
FROM node:${NODEJS_VERSION}-alpine AS BUILD
ARG NPMRC_STRING
LABEL maintainer="Ethan Yeh <ethan.yeh@tokenbricks.com> (https://github.com/EthanYa)"
LABEL stage=builder

RUN apk add --no-cache --upgrade bash curl && rm -rf /var/cache/apk/*
# install node-prune (https://github.com/tj/node-prune)
RUN curl -sfL https://gobinaries.com/tj/node-prune | bash -s -- -b /usr/local/bin

WORKDIR /app
COPY package.json ./
COPY .npmrc ./
RUN npm set ${NPMRC_STRING}
RUN npm install
COPY . .
RUN npm run build

RUN npm prune --production
RUN /usr/local/bin/node-prune

FROM node:${NODEJS_VERSION}-alpine
LABEL maintainer="Ethan Yeh <ethan.yeh@tokenbricks.com> (https://github.com/EthanYa)"
LABEL stage=builder
WORKDIR /app

COPY --from=BUILD /app/.env.example ./
COPY --from=BUILD /app/package.json ./
COPY --from=BUILD /app/dist ./dist
COPY --from=BUILD /app/node_modules ./node_modules
#
CMD npm run start:prod