//백앤드 시작점
const express = require('express') //모듈
const app = express()  //새로운 app생성
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://liamlee:abcd1234@cluster0.oa7i1u4.mongodb.net/Cluster0?retryWrites=true&w=majority',{
}).then(() => console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {res.send('Hello World!~~안녕하세요 ~ ')})

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)})