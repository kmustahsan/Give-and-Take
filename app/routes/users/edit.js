import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        return this.store.findAll('user');
    },
     actions: {
	    update: function(firstName, lastName, email, description, 
	    	username, password, service) {	  		

	      		this.get('store').findRecord('user', 1).then(function(user) { 
	      			if (firstName != undefined) {
	      				user.set('first_name', firstName);
	      			} 
	      			if (lastName != undefined) {
	      				user.set('last_name', lastName);
	      			} 
	      			if (email != undefined) {

	      				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    					if (re.test(email)) {
	      					user.set('email', 	email);
	      				}
	      				else {
	      					alert("Invalid email. Email not updated");
	      				}
	      			} 
	      			if (description != undefined) {
	      				 user.set('description', description);
	      			} 
	      			if (username != undefined) {
	      				 user.set('username', username);
	      			} 
	      			if (password != undefined) {
	      				user.set('password', password);
	      			}
	      			if (service != undefined) {
	      				 user.set('service', service);
	      			}  
				  	user.save();
				});
	    }
	}
});
