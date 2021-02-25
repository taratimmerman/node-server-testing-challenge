const db = require("../data/connection");

module.exports = {
    add,
    find,
    remove,
  };
  
  function find() {
    return db("users");
  }
  
  function add(newUser) {
    return db('users').insert(newUser);
  }
  
  
  function remove(id) {
    return db("users").where({ id }).delete();
  }
  