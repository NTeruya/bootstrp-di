/*Students = new Mongo.Collection('student');



if (Meteor.isClient) {
  // This code only runs on the client
  Template.studentsListTemplate.helpers({
	'student': function () {
		return Students.find().fetch();
	}
});

  Template.studentsListTemplate.events({
  	"click .delete": function () {
  		Students.remove(this._id);
  	}
  });

  Template.studentsListTemplate.events({
  	/*"click .delete": function () {
  		Students.remove(this._id);
  	}
  	"submit .new-student": function (event) {
  		if(event.target.fname.value=="" || event.target.gLevel.value==""){
  			event.preventDefault();
  			alert("You did not enter a Student Name and/ or Grade Level");
  		}
  		else{
  		event.preventDefault();


  		var name_text = event.target.fname.value;
  		var gradeLevel = event.target.gLevel.value;

  		Students.insert({
  			f_name: name_text,
  			gradeLevel: gradeLevel
  		});

  		event.target.fname.value="";
  		event.target.gLevel.value="";
  		}
  	}
 /*
  	"submit .new-student": function (event) {
  		event.preventDefault();


  		var name_text = event.target.fname.value;
  		var gradeLevel = event.target.gLevel.value;

  		Students.insert({
  			f_name: name_text,
  			gradeLevel: gradeLevel
  		});

  		event.target.fname.value="";
  		event.target.gLevel.value="";
  	}

  });



}
if ( Meteor.isServer) {

}*/

