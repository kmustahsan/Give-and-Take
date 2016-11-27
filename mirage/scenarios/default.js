export default function(server ) {
    server.createList('user', 5);
    let user = server.create('user');
    server.createList('service', 5, {'userId': user.id});
    server.loadFixtures();
}
