FROM node:lts-alpine

LABEL Benjamin Iduwe

WORKDIR /app

COPY . .
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN yarn 

EXPOSE 3000

CMD ["yarn", "start"]