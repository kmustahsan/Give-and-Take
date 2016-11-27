import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({  
    first_name: faker.name.firstName,
    last_name: faker.name.lastName,
    email: faker.internet.email,
    description:faker.name.title,
    username: faker.internet.userName,
    password: faker.internet.password,
    service: faker.name.jobArea,
    avatar: faker.internet.avatar
});