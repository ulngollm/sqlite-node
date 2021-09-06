import sqlite3 from 'sqlite3';

const db = new sqlite3.Database("./data", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

const addNote = (text, list, comment = null, tag = null) => {
  const sql =
    "INSERT INTO notes (text, list_id, comment, tag_id) values ((?), (?), (?), (?))";
  db.run(sql, [text, list, comment, tag], (err) => {
    if (err) {
      throw err;
    }
    console.log(undefined);
  });
};

addNote("снять носорога", 1, "очень надо");

const sql = "SELECT * FROM notes";
db.each(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows);
});
