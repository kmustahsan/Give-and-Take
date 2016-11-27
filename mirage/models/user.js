import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    services: hasMany('service')
});
