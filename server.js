const express = require('express'); // traemos la librería de express
const app = express(); // función que nos permite utilizar express

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// middelwere es una instrucción o callback que se ejecutará siempre independiente la url que se pida
app.use(express.static(__dirname + '/public'));

// Express HBS Engine

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'diego muñoz',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

/* app.get('/data', (req, res) => {
    res.send('Hola Data');
}); */

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});