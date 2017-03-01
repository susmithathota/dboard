var mongoose=require('mongoose');
var Post=mongoose.model('Post');
var Topic=mongoose.model('Topic');
var User= mongoose.model('User');

module.exports=(function(){
	return {
		addPost:function(req,res){
			// console.log(req.body);
			var newPost=new Post(req.body);
			User.findOne({_id:req.body.user},function(err,user){
				if(err) console.log(err)
				else{
					newPost.user=user._id;
					newPost.save(function(err){
						if(err) console.log(err)
						else{
							user.posts.push(newPost._id);
							user.save(function(err){
								if(err){
									console.log(err);
								}
								else{
									console.log('saved');
								}
							})
						}
					})
				}
			})
			Topic.findOne({_id:req.body.topic},function(err,topic){
				if(err) console.log(err)
				else{
					newPost.topic=topic._id;
					newPost.save(function(err){
						if(err) console.log(err)
						else{
							topic.posts.push(newPost._id);
							topic.save(function(err){
								if(err){
									console.log(err);
								}
								else{
									console.log('saved');
									res.json({status:true});
								}
							})
						}
					})
				}
			})
		},
		getPosts:function(req,res){
			Post.find({})
				.populate('user')
				.populate('topic')
				.exec(function(err,result){
					if(err) console.log(err)
					else{
						res.json(result);
					}
				})
		},
		likePost:function(req,res){
			Post.findOne({_id:req.params.id},function(err,post){
				if(err) console.log(err)
				else{
					post.likes +=1;
					post.save(function(err){
						if(err) console.log(err)
						else{
							res.json(post);
						}
					})
				}
			})
		},
		dislikePost:function(req,res){
			Post.findOne({_id:req.params.id},function(err,post){
				if(err) console.log(err)
				else{
					post.dislikes +=1;
					post.save(function(err){
						if(err) console.log(err)
						else{
							res.json(post);
						}
					})
				}
			})
		}
	}
})()