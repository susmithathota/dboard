app.controller('sessionController', function(sessionFactory){
	var self=this;
	sessionFactory.checkUser(function(data){
			self.cur_user=data;
	})
	self.login=function(){
		self.errors=[];
		if(!self.logReg || !self.logReg.name){
			self.errors.push('please enter name');
		}
		else if(self.logReg.name.length <3){
			self.errors.push('name should be atleast 3 chars')
		}
		else{
			console.log(self.logReg);
			sessionFactory.login(self.logReg);
		}
	}
})