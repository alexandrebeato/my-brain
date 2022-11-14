const { JsonDB, Config } = require('node-json-db');

function getDatabase(database) {
  return new JsonDB(new Config(database, true, true, '/'));
}

async function Insert(database, model) {
  var database = getDatabase(database);
  database.push(`/${model.id}`, model);
}

async function Update(database, model) {
  var database = getDatabase(database);
  database.push(`/${model.id}`, model);
}

async function Delete(database, id) {
  var database = getDatabase(database);
  database.delete(`/${id}`);
}

async function GetById(database, id) {
  var database = getDatabase(database);
  return database.getData(`/${id}`);
}

async function GetAll(database) {
  var database = getDatabase(database);
  return database.getData('/');
}

module.exports = {
  getDatabase,
  Insert,
  Update,
  Delete,
  GetById,
  GetAll,
};
