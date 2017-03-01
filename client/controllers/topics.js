app.controller('topicsController', function(topicsFactory,$routeParams){
	var self=this;
	
	function getAllTopics(){
		topicsFactory.getAllTopics(function(data){
			self.topicList=data;
		})
	}
	getAllTopics();

	self.addTopic=function(userId){
		self.newTopic.user=userId;
		topicsFactory.addTopic(self.newTopic,function(data){
			if(data){
				getAllTopics();
			}
		});
	}
	
	topicsFactory.getCategorys(function(data){
		self.categoryList=data;
	})

	if($routeParams.id)
	topicsFactory.showTopic($routeParams.id,function(data){
		self.show_topic=data;
	})
})