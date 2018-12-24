var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();
var index = require('./index');
var project = require('./project');

//set path for finding files
const path = require('path');
const publicPath = path.join(__dirname, '../tutorial/public');
app.use(express.static(publicPath));


app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.get('/', index.view);
app.get('/project',project.view);

app.listen(3000);