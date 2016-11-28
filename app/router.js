import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('profile');
  this.route('users', {path: '/users/:user_id'}, function () {
    this.route('edit');
  });
  this.route('services');
  this.route('service', {path: '/service/:service_id'});
});

export default Router;
