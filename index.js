const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/', express.static('page'));

// app.get('/', (req, res) => {
//    res.write('hello');
//    res.end();
// })


app.post('/student', require('./web/student_control'));
app.post('/administrator', require('./web/administrator_control'));
// app.post('/fix', require('./web/fix_control'));
// app.post('/visitor', require('./web/visitor_control'));

app.listen(12345);