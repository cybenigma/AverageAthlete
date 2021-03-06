var express = require('express');

var Workouts= require('./workouts-db.js'); 

var Races= require('./races-db.js');

var Users= require('./users-db.js');  

var app = express();

var port = process.env.PORT;


app.get("/", function(req, res){

	res.send("Home"); 

    }); 

app.get("/newuser", function(req, res){
        
	var a= "Denyse Zamora"; 

	Users.create({

		User_name: a		

		}); 
	
	Users.findAll({

                where:{
                  
                        User_name:a
			
		   }
	    }).then(function(results){		   
		    
                  console.log("Number" +results[0].Uid); 
		  
                  var userId= results[0].Uid; 
		
                  Workouts.create({

		  uid: userId
	         
			    });

		  Races.create({

		  uid: userId 
		      
			    });
		}); 

        res.end(); 	    
 }); 


app.get("/:user", function(req, res){

	var user = req.params.user;  

	Users.findAll({
		where:{		    
		    User_name:user					    
		}

	 }).then(function(results){
	    
	    var userId = results[0].Uid; 		 		 

	    console.log(userId); 

	    Races.findAll({
		where:{		    
		    uid:userId					    
		}
	             }).then(function(results){		 
		
			     res.send(results); 
	
			 });		   

	    Workouts.findAll({
		    where:{
			uid:userId
		       }
	            }).then(function(results){


			}); 

	     }); 

    });


app.get("/races/:user", function(req, res){

	var user = req.params.user; 
	
	Users.findAll({
                where:{
                    User_name:user
			}

	    }).then(function(results){

		    var userId = results[0].Uid;		   

		    Races.findAll({
			    where:{
				uid:userId
				    }
			}).then(function(results){

				res.send(results);

			 });
		}); 
}); 


app.get("/workouts/:user", function(req, res){

	var user = req.params.user; 

	Users.findAll({
                where:{
                    User_name:user
                      }
            }).then(function(results){

                    var userId = results[0].Uid;

                    Workouts.findAll({
                            where:{
                                uid:userId
                                    }
		      }).then(function(results){

                            res.send(results);

			 });
                
		});
    
    });

app.listen(port, function(){
	console.log('WorkOut app listening on port ' + port);
 
   });




