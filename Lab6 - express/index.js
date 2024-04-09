const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users.js');


app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.render('index', {
        Title: "Galeria",
        Body: "Zdjęcia"
    })
});



app.listen(port);