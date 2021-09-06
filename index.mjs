import { addList, addNote, db } from "./queries.mjs";
addNote({ text: "приготовить обед", comment: "без соли", list: 3 });

const sql = "SELECT * FROM notes";
db.each(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  console.log(rows);
});
