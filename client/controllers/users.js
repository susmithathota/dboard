app.controller('usersController',function(usersFactory,$routeParams){
	var self=this;
	if($routeParams.id){
		usersFactory.showUser($routeParams.id,function(data){
			self.show_user=data;
		})
	}
})