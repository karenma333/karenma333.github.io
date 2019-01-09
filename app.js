var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();
var index = require('./routes/index');
var project = require('./routes/project');

//set path for finding files
const path = require('path');
const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));


app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.get('/', index.view);
app.get('/project/:id',project.view);

app.listen(3000);