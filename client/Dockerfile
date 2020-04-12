FROM node

WORKDIR ./app

ENV NODE_ENV=development

COPY . .

RUN npm install

EXPOSE 3001

CMD npm start