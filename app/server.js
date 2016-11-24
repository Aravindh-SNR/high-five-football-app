var express = require('express');
var morgan = require('morgan');
var path = require('path');
require('dotenv').config();

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
    headers: { 'X-Auth-Token': process.env.API_KEY },
    method: 'GET',
    json: true
});

var port = 8080;
app.listen(port, function () {
  console.log(`High Five football app is ready for kick-off on port ${port}!`);
});
