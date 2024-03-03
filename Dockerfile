# FROM ubuntu

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs

FROM node:14

RUN npm install -g pm2

WORKDIR /node-app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY app.js app.js

RUN npm install


ENTRYPOINT ["npm", "run", "pm2Start"]
# ENTRYPOINT ["sh", "-c", "pm2 start -i 2 app.js && pm2 logs"]
# ENTRYPOINT ["pm2", "start", "-i", "2", "app.js", "&&", "pm2", "logs"]
#, "&&", "ls", "&&", ] 
# ENTRYPOINT ["pm2-runtime", "start", "-i", "2", "app.js"]





