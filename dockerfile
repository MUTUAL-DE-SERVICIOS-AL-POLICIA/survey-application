FROM node:18

WORKDIR /survey-application

COPY package.json .env ./

COPY public /public/

COPY src ./src

EXPOSE 3000

ENV REACT_APP_ENV=production

CMD ["sh", "-c", "if [ \"$REACT_APP_ENV\" = \"production\" ]; then \
    npm run build && npm install -g serve && serve -s build; \
    else \
    npm start; \
    fi"]
