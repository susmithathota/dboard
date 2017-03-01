var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PostSchema=new Schema({
	postText:{type:String},
	user:{type:Schema.Types.ObjectId,ref:'User'},
	topic:{type:Schema.Types.ObjectId,ref:'Topic'},
	likes:{type:Number,default:0},
	dislikes:{type:Number,default:0}
})

var Post=mongoose.model('Post',PostSchema);