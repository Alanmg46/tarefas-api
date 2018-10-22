import knex from "../config/knew";

const users = {
  method: "GET",
  path: "/users",
  handler: (request, reply) => {
    return knex
      .from("users")
      .where({ deleted: false, done: false })
      .select("id", "nome")
      .then(results => reply.response(results))
      .catch(err => console.log(err));
  }
};

export default users;
