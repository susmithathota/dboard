var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema=new Schema({
	name:{type:String}
}, {collection:'Category'});

var Category=mongoose.model('Category',CategorySchema);