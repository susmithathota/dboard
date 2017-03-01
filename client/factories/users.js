app.factory('usersFactory',function($http){
	var factory={};
	factory.showUser=function(id,cb){
		$http.get('/show/user/'+id).then(function(output){
				cb(output.data);
		})
	}
	return factory;
})