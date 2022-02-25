const db = require('../database');

const arviointi = {
  getById: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idArviointi, paivamaara, arvosana, id_opiskelija, id_opintojakso) values(?,?,?,?,?)'
      [arviointi.idArviointi, arviointi.paivamaara, arviointi.arvosana, arviointi.id_opiskelija, arviointi.id_opintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idArviointi=?,paivamaara=?,arvosana=?,id_opiskelija=?,id_opintojakso=?',
      [arviointi.idArviointi, arviointi.paivamaara, arviointi.arvosana, arviointi.id_opiskelija, arviointi.id_opintojakso],
      callback
    );
  }
};
module.exports = arviointi;