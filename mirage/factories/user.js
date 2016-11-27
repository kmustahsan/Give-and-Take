import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    first_name: faker.name.firstName,
    last_name: faker.name.lastName,
    email: faker.internet.email,
    description:faker.name.title,
    username: faker.internet.userName,
    password: faker.internet.password,
    avatar: faker.internet.avatar,
    job: faker.name.jobDescriptor
});
