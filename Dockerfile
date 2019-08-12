FROM node:8.11
RUN npm install --save express-graphql \
    npm install --save express \
    npm install --save graphql
RUN mkdir /app
WORKDIR /app
EXPOSE 4000