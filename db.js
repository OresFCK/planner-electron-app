const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database
const db = new sqlite3.Database('./mydatabase.db'); // Replace with your database file path

// Create users table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
  )`);
});

// Export database instance for use in other modules
module.exports = db;
