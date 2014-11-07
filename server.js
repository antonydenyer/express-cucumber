var express = require('express');
var apiRouter = require('./lib/api/router');

var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', apiRouter);

app.listen(3000, function () {

  app.host = this.address().address
  app.port = this.address().port
  console.log('Example app listening at http://%s:%s', app.host, app.port)

});

module.exports = app;