var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(require('./routes/index.js'));
app.use(require('./routes/league.js'));
app.use(require('./routes/squad.js'));

app.locals.siteTitle = 'High Five';

app.set('apiBaseUrl', 'http://api.football-data.org/v1');
app.set('options', {
    headers: { 'X-Auth-Token': 'YOUR-API-KEY' },
    //Get your API key from http://api.football-data.org/register
    //Or, comment out headers
    method: 'GET',
    json: true
});

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});