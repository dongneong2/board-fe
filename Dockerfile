FROM node:20-alpine
WORKDIR /src
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]