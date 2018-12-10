var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000);