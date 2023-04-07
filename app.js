const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fireBaseKey = require('./key.json')
const config = require('./config')

let app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());


app.listen(config.port,(err)=>{
    console.log(`server start on port ${config.port}`);
})
