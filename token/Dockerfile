FROM node:21.2.0-alpine
RUN npm install -g npm@10.2.0
RUN mkdir -p /var/www/token
WORKDIR /var/www/token
ADD . /var/www/token
RUN npm install
CMD npm run build && npm run start:prod
