app.controller('postsController',function(postsFactory){
	var self=this;
	self.addPost=function(tId,uId){
		self.newPost.topic=tId;
		self.newPost.user=uId;
		postsFactory.addPost(self.newPost,function(data){
			getPosts();
		});
	}
	function getPosts(){
		postsFactory.getPosts(function(data){
			self.postList=data;
		})
	}
	getPosts();

	self.likePost=function(pId){
		postsFactory.likePost(pId,function(data){
			getPosts();
		});
	}
	self.dislikePost=function(pId){
		postsFactory.dislikePost(pId,function(data){
			getPosts();
		});
	}
	
})