import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        return this.store.findAll('user');
    }, 
    actions: {
	    update: function(firstName, lastName, email, description, 
	    	username, password, service) {

	      		this.get('store').findRecord('user', 0).then(function(user) {
	      		  
	      			
				  user.set('first_Name', first_name);
				  alert(first_name);
				  // user.set('last_Name', last_Name);
				  // user.set('email', 	email);
				  // user.set('description', description);
				  // user.set('username', username);
				  // user.set('password', password);
				  // user.set('service', service);
				  user.save();
				  alert(first_name);

				});
	    }
	}




});
