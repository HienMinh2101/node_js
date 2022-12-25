const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.use(express.static('./src/public'));

app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/video', (req, res) => {
  res.render('video');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})