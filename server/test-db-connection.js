const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'boardgames'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + db.threadId);

  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Results:', results);
  });

  db.end();
});