var express = require('express');
var app = express();

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

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`High Five app is ready for kick-off on port ${port}!`);
});
