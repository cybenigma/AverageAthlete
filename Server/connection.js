var Sequelize= require("sequelize"); 

var sequelize = new Sequelize("project_two","root", "",{

	host:"localhost", 

	dialect:"mysql", 
	
    }); 

module.exports = sequelize; 

