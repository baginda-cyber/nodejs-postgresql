FROM node:16-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY . .
RUN npm install pg
RUN npm install dotenv
RUN npm install express
EXPOSE 3004
CMD [ "node", "index.js" ]
