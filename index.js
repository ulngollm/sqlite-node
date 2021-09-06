const {addList, addNote, db} = require('./queries.js');




addNote("снять носорога", 1, 'очень надо');

const sql = "SELECT * FROM notes";
db.each(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows);
});
