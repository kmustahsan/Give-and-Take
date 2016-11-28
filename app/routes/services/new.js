import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').createRecord('service');
    },

    actions: {
        submit(newModel) {
            var router = this;
            newModel.save().then(function(params) {
                router.transitionTo('services.index');
            });
        }
    }
});
