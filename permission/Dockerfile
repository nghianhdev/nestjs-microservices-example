FROM node:21.2.0-alpine
RUN npm install -g npm@10.2.0
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN npm install
CMD npm run build && npm run start:prod
