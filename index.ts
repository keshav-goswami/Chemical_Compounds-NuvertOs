const express = require('express');
const bodyParser = require("body-parser");
const table = require('./models/dataModel');
const cors = require("cors");
const controller = require('./src/app/service/controller')

const app = express();

const port = 3000;

table.sync()
app.use(bodyParser.json())
app.use(cors());

app.get('/', function (req, res) {
    res.send('Server Working');
})
app.get('/compounds/:page', controller.getAll)
app.get('/compound/:id', controller.getChemical)
app.post('/create', controller.create)
app.delete('/delete/:id', controller.deleteChemical)
app.patch('/update/:id', controller.updateChemical)

app.listen(3000, () => {
    console.log('Server up and Running!')
})