# Base image
FROM node:alpine 
# set the working directory
WORKDIR "/app"
# just rebuild the image when we change package.json
COPY package.json .
#install modules
RUN npm install
# copy all of the source code
COPY . .
#start the server
CMD [ "npm", "start"]