app.factory('postsFactory',function($http,$route){
	var factory={};
	factory.addPost=function(post,cb){
		$http.post('/addPost',post).then(function(output){
			cb(output.data)
		})
	}
	factory.getPosts=function(cb){
		$http.get('/getPosts').then(function(output){
			cb(output.data);
		})
	}
	factory.likePost=function(id,cb){
		$http.get('/like/'+id).then(function(output){
			cb(output.data);
		})
	}
	factory.dislikePost=function(id,cb){
		$http.get('/dislike/'+id).then(function(output){
			cb(output.data);
		})
	}
	return factory;
})