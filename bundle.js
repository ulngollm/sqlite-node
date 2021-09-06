'use strict';

var sqlite3 = require('sqlite3');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sqlite3__default = /*#__PURE__*/_interopDefaultLegacy(sqlite3);

function addNote(text, list, comment = null, tag = null) {
  const sql =
    "INSERT INTO notes (text, list_id, comment, tag_id) values ((?), (?), (?), (?))";
  db.run(sql, [text, list, comment, tag], (err) => {
    if (err) {
      throw err;
    }
    console.log(this);
  });
}

let db$1 = new sqlite3__default['default'].Database("./data", sqlite3__default['default'].OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});



addNote("снять носорога", 1, 'очень надо');

const sql = "SELECT * FROM notes";
db$1.each(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows);
});
