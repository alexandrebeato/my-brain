const _repository = require('./repository');

var databaseName = './data/tasks.json';

function Insert(model) {
  _repository.Insert(databaseName, model);
}

function Update(model) {
  _repository.Update(databaseName, model);
}

function Delete(id) {
  _repository.Delete(databaseName, id);
}

function GetById(id) {
  return _repository.GetById(databaseName, id);
}

function GetAll() {
  return _repository.GetAll(databaseName);
}

module.exports = {
  Insert,
  Update,
  Delete,
  GetById,
  GetAll,
};
