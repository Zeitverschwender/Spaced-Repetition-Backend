FROM node:14.15.4-alpine3.12


WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8000

USER node
CMD ["node", "server.js"]