if (Meteor.isClient){
	Template.studentPage.rendered = function(){
    	var width = $('.button').width();
    	$(".button").css("height", width);
/*    	$("body").css("background-color", "#7DB7F9");*/
 	}
}