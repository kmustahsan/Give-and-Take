import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({  
    first_name: faker.name.firstName,
    last_name: faker.name.lastName,
    email: faker.internet.email,
    description:faker.hacker.phrase,
    username: faker.internet.userName,
    password: faker.internet.password,
    service: faker.name.jobDescriptor
});