const Sequelize = require("sequelize");
const connection = require("./database");

const Login = connection.define('login',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

Login.sync({force:false}).then(()=>{});

module.exports=Login;