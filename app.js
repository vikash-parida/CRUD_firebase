

let express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 9000

let app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

let student = require('./src/student/student.route')

app.use('/api', student);


app.listen(PORT,(err)=>{
    console.log(`server start on port ${PORT}`);
})
