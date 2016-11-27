export default function(server ) {
    server.createList('user', 5);
    server.createList('service', 5);
    server.loadFixtures();
}
