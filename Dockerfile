FROM node:14.15.4-alpine3.12

USER node

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]