var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
	name:{type:String},
	topics:[{type:Schema.Types.ObjectId ,ref:'Topic'}],
	posts:[{type:Schema.Types.ObjectId ,ref:'Post'}],
	comments:[{type:Schema.Types.ObjectId ,ref:'Comment'}]
})

var User=mongoose.model('User',UserSchema);