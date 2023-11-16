FROM node:21.2.0-alpine
RUN npm install -g npm@10.2.0
RUN mkdir -p /var/www/user
WORKDIR /var/www/user
ADD . /var/www/user
RUN npm install
CMD npm run build && npm run start:prod
