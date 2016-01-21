/*Requests = new Mongo.Collection('request');

if(Meteor.isClient) {

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
}
*/