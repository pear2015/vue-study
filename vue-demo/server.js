const fs = require('fs');
const path = require('path');
const express = require('express');
const open = require('open');
const app = express();
var routes = express.Router();
app.use('/api', routes);
app.use(express.static(path.resolve(__dirname, './dist')))
app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname,'./dist/index.html'),'utf-8')
    res.send(html);
})

app.listen(8082);
open('http://localhost:8082');