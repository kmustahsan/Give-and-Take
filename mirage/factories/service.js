import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    title: faker.lorem.word,
    description: faker.lorem.sentences,
    location: faker.address.streetAddress,
    due: faker.date.future
});
