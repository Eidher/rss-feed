FROM node:11

LABEL maintainer="Eidher Escalona <eidher.escalona@gmail.com>"

# Create app directory
WORKDIR /usr/src/app

# Copy folders
COPY ./client client/
COPY ./server server/

# Install app dependencies
COPY package.json .

# Running client commands
RUN npm run client:install \\
    && npm run client:build

RUN cp -r client/build server/build

# Installing server dependencies
RUN npm run server:install

EXPOSE 2525