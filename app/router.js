import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('serviceRequest');
  this.route('profile');
  this.route('editProfile');
  this.route('users', {path: '/users/:user_id'}, function () {
    this.route('edit');
  });
});

export default Router;
