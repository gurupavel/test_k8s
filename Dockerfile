FROM node:alpine

WORKDIR /applications/client-equivvy-webapp-react

COPY . .

RUN npm install

CMD ["npm", "start"]
