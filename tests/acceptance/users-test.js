test("I can view the users", function() {
  let users = server.createList('author', 3);

  visit('/users');

  andThen(() => {
    equal(find('li').length, 3);
    equal(find('li:first').text(), users[0].name);
  });
});