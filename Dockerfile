FROM node:12

ENV PORT 3000

#setting working directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

#installing dependencies
COPY package*.json /usr/src/app/
RUN npm install
RUN npm install react-bootstrap
RUN npm install react-redux
RUN npm install dotenv --save
RUN npm install react-bootstrap-table2-editor --save
RUN npm install react-bootstrap-table-next --save
RUN npm install react-bootstrap-table2-paginator --save


#copying source file
COPY . .

#Building app
RUN npm run build
EXPOSE 3000

#running the app
CMD ["npm", "start"]