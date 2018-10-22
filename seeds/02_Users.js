exports.seed = function(knex, Promise) {
  const tableName = "users";
  const data = [
    {
      nome: "Alan",
      email: "alan@ifrn.com",
      senha: "12345"
    },
    {
      nome: "Anne",
      email: "anne@ifrn.com",
      senha: "1234"
    },
    {
      nome: "Minora",
      email: "minora@ifrn.com",
      senha: "12345"
    }
  ];

  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function() {
      return knex(tableName).insert(data);
    });
};
