FROM node:alpine

WORKDIR /reservation

COPY package.json .

RUN npm install

COPY . . 

CMD ["npm","start"]