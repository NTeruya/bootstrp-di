Router.configure({
	layoutTemplate: 'main-nav'
});

Router.route('/', function () {
	this.render('landing');
	this.layoutTemplate("main-nav");
});

Router.route('/studentsPage', function () {
  this.render('studentsListTemplate');
  this.layoutTemplate("main-nav");
});

Router.route('/requestsPage', function () {
	this.render('requestTemplate');
	this.layoutTemplate("main-nav");
});

Router.route('/activitiesPage', function () {
	this.render('activitiesPage');
	this.layoutTemplate("main-nav");
});
Router.route('/pageforstudents', function () {
	this.render('startActivity');
});
Router.route('/startactivity', function () {
	this.render('studentPage');
});
Router.route('/reportsPage', function () {
	this.render('reportPage');
});