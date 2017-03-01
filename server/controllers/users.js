var mongoose=require('mongoose');
var User=mongoose.model('User');

module.exports=(function(){
	return{
		showUser:function(req,res){
			User.findOne({_id:req.params.id})
			.populate('topics')
			.exec(function(err,user){
				if(err) console.log(err)
				else{
					res.json(user);
				}
			})
		}
	}
})()