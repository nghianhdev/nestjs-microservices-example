FROM node:18.18.1-alpine
RUN npm install -g npm@10.2.0
RUN mkdir -p /var/www/mailer
WORKDIR /var/www/mailer
ADD . /var/www/mailer
RUN npm install
CMD npm run build && npm run start:prod
