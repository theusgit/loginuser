const Sequelize = require('sequelize');

const connection = new Sequelize('loginuser','root','M4theus$$',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports=connection;