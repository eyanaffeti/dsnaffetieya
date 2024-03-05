FROM node:14.x
MAINTAINER Naffeti Eya

WORKDIR /app


COPY package.json .


RUN npm install


COPY index.js .
COPY test/test.js ./test/


CMD ["npm", "test"]
EXPOSE 3000
