'use strict';

const debug = require('debug')('http:storage');
const storage = {};

module.exports = exports = {};

exports.createItem = function(schema, item) {
  debug('#createItem');

  if(!schema) return Promise.reject(new Error('schema require'));
  if(!item) return Promise.reject(new Error('item required'));
  if(!storage[schema]) storage[schema] = {};

  storage[schema][item.id] = item;

  return Promise.resolve(item);
};

exports.fetchItem = function(schema, id) {
  debug('#fetchItem');

  return new Promise ((resolve, reject) => {
    if(!schema) return reject (new Error('schema required'));
    if(!id) return reject (new Error('id required'));

    let schemaName = storage[schema];
    if(!schemaName) return reject(new Error('item not found'));

    resolve(item);
  });
};

exports.updateItem = function(schema, id){
  debug('#updateItem');
  return new Promise((resolve, reject) => {
    if(!schema) return reject (new Error('schema required'));
    if(!id) return reject (new Error('id required'));

    let schemaName = storage[schema];
    if(!schemaName) return reject(new Error('item not found'));
  });
};


exports.deleteItem = function(schema, id){
  debug('#deleteItem');
  return new Promise((resolve, reject) => {
    if(!schema) return reject (new Error('schema required'));
    if(!id) return reject (new Error('id required'));

    let schemaName = storage[schema];
    if(!schemaName) return reject(new Error('item not found'));

    delete storage[schema];

    resolve();
  });
};
