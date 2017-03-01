var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var TopicSchema=new Schema({
	title:{type:String},
	description:{type:String},
	category:{type:String},
	user:{type:Schema.Types.ObjectId,ref:'User'},
	posts:[{type:Schema.Types.ObjectId,ref:'Post'}]
})

var Topic=mongoose.model('Topic',TopicSchema);