const db = require('../database');

const opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (id_opintojakso, kurssinimi) values(?,?)',
      [opintojakso.id_opintojakso, opintojakso.kurssinimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set id_opintojakso=?,kurssinimi=?',
      [opintojakso.id_opintojakso, opintojakso.kurssinimi],
      callback
    );
  }
};
module.exports = opintojakso;