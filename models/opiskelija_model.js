
const db = require('../database');

const opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (id_opiskelija, name, lname, classID) values(?,?,?,?)',
      [opiskelija.id_opiskelija, opiskelija.name, opiskelija.lname, opiskelija.classID],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set id_opiskelija=?,name=?, lname=?, classID=? where id_opiskelija=?',
      [opiskelija.id_opiskelija, opiskelija.name, opiskelija.lname, opiskelija.classID],
      callback
    );
  }
};
module.exports = opiskelija;