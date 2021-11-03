FROM node:lts-alpine

WORKDIR /app

COPY . .
COPY package.*json .
COPY nginx.conf /etc/nginx/nginx.conf

RUN yarn 

EXPOSE 3000

CMD ["yarn", "start"]