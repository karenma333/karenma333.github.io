var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();
var index = require('./index');

app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.get('/', index.view);

app.listen(3000);