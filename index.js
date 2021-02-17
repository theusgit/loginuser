const express = require('express');
app = express();

app.set('view engine','ejs');
app.use(express.static('public'));






app.get("/", (req, res) => {
    res.render("login")
})

app.listen(2323,()=>{
    console.log("Rodando")
})