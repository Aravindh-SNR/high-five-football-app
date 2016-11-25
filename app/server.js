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
    headers: { 'X-Auth-Token': '9f20857b262f461680629b9aa867166f' },
    method: 'GET',
    json: true
});

var port = 8080;
app.listen(port, function () {
  console.log(`High Five app is ready for kick-off on port ${port}!`);
});
