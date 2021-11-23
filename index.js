const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRouter = require('./router/index');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.all('*', (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  next();
})

app.use('/xx', mainRouter);

app.listen(8108, () => {
  console.log('my server listening on port 8108')
});