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
app.get('/compounds/:page', controller.getAllCompounds)
app.get('/compound/:id', controller.getCompound)
app.post('/create', controller.createCompound)
app.delete('/delete/:id', controller.removeCompound)
app.patch('/update/:id', controller.updateCompound)

app.listen(3000, () => {
    console.log('Server up and Running!')
})