const sqlite3 = require("sqlite3").verbose();

exports.db = new sqlite3.Database("./data", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

exports.addList = (name) => {
  const sql = "INSERT INTO list (name) values (?)";
  db.run(sql, [name], (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.addNote = (text, list, comment = null, tag = null) => {
  const sql =
    "INSERT INTO notes (text, list_id, comment, tag_id) values ((?), (?), (?), (?))";
  db.run(sql, [text, list, comment, tag], (err) => {
    if (err) {
      throw err;
    }
    console.log(this);
  });
};
