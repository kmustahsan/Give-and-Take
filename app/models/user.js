import DS from 'ember-data';

export default DS.Model.extend({
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    email: DS.attr('string'),
    description: DS.attr('string'),
    username: DS.attr('string'),
    password: DS.attr('string'),
    avatar: DS.attr('string'),
    job: DS.attr('string'),
    services: DS.hasMany('service')
});
