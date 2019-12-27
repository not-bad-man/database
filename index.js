const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const initApi = require('./utils/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('page/dist'));
app.use(cors());

app.get("/", (req, res) => {
   res.write('hello')
   res.end();
})

initApi(app);

app.listen(12345);