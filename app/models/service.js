import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    location: DS.attr('string'),
    due: DS.attr('date'),
    user: DS.belongsTo('user')
});
