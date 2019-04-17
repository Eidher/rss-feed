FROM node:11

LABEL maintainer="Eidher Escalona <eidher.escalona@gmail.com>"

# Create app directory
WORKDIR /usr/src/app

# Copy folders
COPY ./server .
COPY ./client .

# Install app dependencies
COPY package.json .

# Running client commands
RUN npm run client:Instal \\ 
    &&  npm run client:build

RUN cp ./client/build /server/build

EXPOSE 2525

CMD [ "npm", "run" "server:start" ]
