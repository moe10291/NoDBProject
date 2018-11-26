const express = require('express');
const bodyParser = require('body-parser');
const config = require('./../config.js');
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());



app.get('/api/viewquotes', controller.viewquotes);

app.post('/api/addquotes', controller.addquotes)

app.put('/api/editquotes/:id', controller.editquotes)

app.delete('/deletequotes/:id', controller.deletequotes)





app.listen(4000, function () {
    console.log(`Server listening to port ${config.port}`);
});