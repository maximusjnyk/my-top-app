FROM node:14-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN yarn
ADD . .
RUN yarn build
RUN yarn prune --prodaction
CMD ["node", "./dist/main.js"]