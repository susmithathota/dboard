var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {templateUrl : 'partials/login.html'})
	.when('/dash', {templateUrl : 'partials/dash.html'})
	.when('/show/user/:id',{templateUrl:'partials/showUser.html'})
	.when('/show/topic/:id',{templateUrl:'partials/showTopic.html'})
	.otherwise({redirectTo:'/login'})
})