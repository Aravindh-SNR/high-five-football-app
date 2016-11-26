var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(require('./routes/index.js'));
app.use(require('./routes/league.js'));
app.use(require('./routes/squad.js'));

app.locals.siteTitle = 'High Five';

app.set('apiBaseUrl', 'http://api.football-data.org/v1');
app.set('options', {
    //To run the app locally, get an api key (free) from api.football-data.org/register
    //In the below line, replace 'process.env.SECRET_TOKEN' with the key inside quotes
    headers: { 'X-Auth-Token': process.env.SECRET_TOKEN },
    method: 'GET',
    json: true
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`High Five app is ready for kick-off on port ${port}!`);
});
