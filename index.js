const express = require('express');
const app = express();
const port = 3000;

// Loads the handlebars module
var handlebars = require('express-handlebars');
var scripts = [{ script: '/js/main.js' }];
// Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

// Sets handlebars configurations
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    //conf parameter
    extname: 'hbs',
    defaultLayout: 'default'
}));

app.use(express.static('public'))


app.get('/', (req,res) => {
    res.render('main', {layout: 'index', scripts: scripts});
});

app.listen(port, () => console.log(`App running on port ${port}`));