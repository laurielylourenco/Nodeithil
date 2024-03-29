FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock /usr/src/app/

RUN yarn install && \
    yarn add --dev @types/node && \
    apk add --no-cache openssl

COPY . /usr/src/app/

RUN openssl genpkey -algorithm RSA -out "private_api.pem"
RUN openssl rsa -pubout -in "private_api.pem" -out "public_api.pem"

EXPOSE 1337

CMD [ "yarn", "dev" ]
