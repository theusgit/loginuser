const express = require('express');
app = express();
const connection = require('./database/database');
const Login = require('./database/Login');


//Database
connection
.authenticate()
.then(()=>{
    console.log("Conexão com sucesso!")
}).catch((msgErro)=>{
    console.log(msgErro);
})


app.set('view engine','ejs');
app.use(express.static('public'));






app.get("/", (req, res) => {
    res.render("login")
})

app.listen(2323,()=>{
    console.log("Rodando")
})