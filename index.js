//백앤드 시작점
const express = require('express') //모듈
const app = express()  //새로운 app생성
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
}).then(() => console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {res.send('Hello World! ~ sadf')})

app.post('/register', (req, res) =>{
    
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
   
    const user = new User(req.body)

    user.save((err, userInfo) =>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            succes: true
        })
    })
})


app.listen(port, () => {console.log(`Example app listening on port ${port}!`)})

