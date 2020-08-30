const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Methods", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "Content-Type");
     next();
});
// fetch传统方式
app.get('/fetchdata', (req, res) => {
    res.send('传统方法获取参数' + req.query.id);
    console.log('/fetchdata');
})
// fetch第二种方式
app.get('/fetchdata/:id', (req, res) => {
    res.send('2方法获取参数' + req.params.id)
})
app.delete('/fetchdata/:id', (req, res) => {
    res.send('delete方法获取参数' + req.params.id)
})
app.post('/fetchdata', (req, res) => {
    res.send('dpost方法获取参数' + req.body.username + '----------' + req.body.password)
})
app.get('/a1', (req, res) => {
    setTimeout(function () {
        res.send('a1')
    }, 1000);
})
app.listen('3000', () => {
    console.log("running")
})