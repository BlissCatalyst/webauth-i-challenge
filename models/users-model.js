const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(newUser) {
  return findById(db('users').insert(newUser));
}

function findById(id) {
  return db('users').where({ id }).first();
}