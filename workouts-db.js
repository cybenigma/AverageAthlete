
var Sequelize= require("sequelize"); 

var sequelize= require("./connection.js"); // cambiar a direct. 

var workOuts = sequelize.define('workouts', {

	uid:{
	    type: Sequelize.INTEGER, 

	},

	activity:{
	    type: Sequelize.STRING, 

	}, 

	duration:{
	    type: Sequelize.INTEGER, 

	},  

	date:{
	    type: Sequelize.DATE, 

	}, 

	complete:{

	    type: Sequelize.BOOLEAN
	}

    }, 

    {
	timestamps: false
    }); 

workOuts.sync();

module.exports= workOuts; 