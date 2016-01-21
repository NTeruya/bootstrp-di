Students = new Mongo.Collection('student');
Requests = new Mongo.Collection('request');
Activity = new Mongo.Collection('activities');
Record = new Mongo.Collection('records');


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
  	}*/
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
  			gradeLevel: gradeLevel,
        profimg: event.target.imglink.value
  		});

  		event.target.fname.value="";
  		event.target.gLevel.value="";
      event.target.imglink.value="";
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
*/



  });
  Template.requestTemplate.helpers({
    'request': function() {
      return Requests.find().fetch();
    }
  });

  Template.requestTemplate.events({
    "click .delete": function () {
      Requests.remove(this._id);
    }
  });

  Template.requestTemplate.events({
    "submit .new-request": function (event) {
      if(event.target.reqtext.value==""){
        event.preventDefault();
      }
      else{
        event.preventDefault();

        var text = event.target.reqtext.value;

        Requests.insert({
          reqtext: text,
        });

        event.target.reqtext.value="";
      }
    }
  });


  Template.activitiesPage.helpers({
    'activities': function () {
      return Activity.find().fetch();
    }
  }); 
  Template.activitiesPage.helpers({
    'student': function () {
      return Students.find().fetch();
    }
  });
  Template.activitiesPage.events({
    "submit .add-activities": function (event) {
      if(event.target.actName.value==""){
        event.preventDefault();
      }
        else {
          event.preventDefault();



          Activity.insert({
            actName: event.target.actName.value,
            url1: event.target.imgUrl1.value,
            url2: event.target.imgUrl2.value
          });

          event.target.actName.value ="";
          event.target.imgUrl1.value ="";
          event.target.imgUrl2.value ="";

        }
    }
  });
  Template.activitiesPage.events({
    "click .delete": function () {
      Activity.remove(this._id);
    }
  });
  Template.activitiesPage.events({
    "click .row": function () {
      var width = $('.button').width();
      $("#imageLeft").attr('src', this.url1);
      $("#imageLeft").css("width", width);
      $("#imageRight").attr('src', this.url2);
      $("#imageRight").css("width", width);
    }
  });
  Template.activitiesPage.rendered = function(){
    var width = $('.button').width();

    $(".button").css("height", width);

  }

  Template.studentPage.helpers({
    'url1': function () {
      return Activity.findOne().url1;
    },
    'url2': function () {
      return Activity.findOne().url2;
    }
  });
  Template.studentPage.events({
      'click #buttonLeft': function (event) {
        event.preventDefault();
        Record.insert({
          button: "Left",
          createdAt: new Date()
        });
      },
      'click #buttonRight': function (event) {
        event.preventDefault();
        Record.insert({
          button: "Right",
          createdAt: new Date()
        });
      }
  });

  Template.reportPage.helpers({
    'records': function () {
      return Record.find().fetch();
    }
  });
  Template.reportPage.events({
    'click .delete': function () {
      return Meteor.call('removeAllPosts');
    }
  });

}


if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllPosts: function() {

        return Record.remove({});

      }

    });

  });

}