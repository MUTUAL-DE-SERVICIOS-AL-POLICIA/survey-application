FROM node:18

WORKDIR /survey-application

COPY package.json .env /public ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]