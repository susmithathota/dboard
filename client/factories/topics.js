app.factory('topicsFactory',function($http){
	var factory={};
	factory.addTopic=function(topic){
		$http.post('/addTopic',topic).then(function(output){
			console.log(output.data);
		})
	}
	factory.getAllTopics=function(cb){
		$http.get('/getAllTopics').then(function(output){
			cb(output.data)
		})
	}
	factory.getCategorys=function(cb){
		$http.get('/getCategorys').then(function(output){
			cb(output.data);
		})
	}
	factory.showTopic=function(id,cb){
		$http.get('/show/topic/'+id).then(function(output){
			cb(output.data);
		})
	}
	return factory;
})