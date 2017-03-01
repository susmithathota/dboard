var session= require('./../controllers/session.js');
var topics= require('./../controllers/topics.js');
var users= require('./../controllers/users.js');
var posts= require('./../controllers/posts.js');

module.exports=function(app){
	app.post('/login',function(req,res){
		session.login(req,res);
	})
	app.get('/checkUser',function(req,res){
		session.checkUser(req,res);
	})
	app.get('/logout',function(req,res){
		session.logout(req,res);
	})

	// -------------topic------------------

	app.post('/addTopic',function(req,res){
		topics.addTopic(req,res);
	})
	app.get('/getAllTopics',function(req,res){
		topics.getAllTopics(req,res);
	})
	// ---categorys--
	app.get('/getCategorys',function(req,res){
		topics.getCategorys(req,res);
	})
	app.get('/show/topic/:id',function(req,res){
		topics.showTopic(req,res);
	})
	// -------------users-------------------

	app.get('/show/user/:id',function(req,res){
		users.showUser(req,res);
	})

	// ------------posts--------------------
	app.post('/addPost',function(req,res){
		posts.addPost(req,res);
	})
	app.get('/getPosts',function(req,res){
		posts.getPosts(req,res);
	})
	app.get('/like/:id',function(req,res){
		posts.likePost(req,res);
	})
	app.get('/dislike/:id',function(req,res){
		posts.dislikePost(req,res);
	})

}