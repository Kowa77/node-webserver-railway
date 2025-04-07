const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Middleware para servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Esteban Garriga',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Esteban Garriga',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Esteban Garriga',
    titulo: 'Curso de Node'
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile( __dirname +'/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//   res.sendFile( __dirname +'/public/elements.html');
// });

app.get('*', (req, res) => {
  res.sendFile( __dirname +'/public/template/404.html');
});


app.listen(port, () => {
 console.log(`App escucha en http://localhost:${port}`)
});