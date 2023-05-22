FROM node:18

WORKDIR /survey-application

COPY package.json .env /public ./

EXPOSE 3000

ENV REACT_APP_ENV=development

CMD ["sh", "-c", "if [ \"$REACT_APP_ENV\" = \"production\"]; then \
    npm run build && npm install -g serve && serve -s build; \
    else \
    npm start; \
    fi"]
