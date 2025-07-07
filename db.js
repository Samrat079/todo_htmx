const database = require('better-sqlite3');
const db = new database('db.sqlite');


db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL
    )
`).run();

module.exports = db;