var Sequelize= require("sequelize"); 

var sequelize= require("./connection.js"); // cambiar a direct. 

var Users = sequelize.define('users', {

       Uid:{
	    type: Sequelize.INTEGER,
	    autoIncrement:true, 
	    primaryKey:true

	}, 

	User_name:{
	   type: Sequelize.STRING, 

	}	

    }); 

Users.sync();

module.exports= Users; 