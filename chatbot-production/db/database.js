const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '..', 'leads.db');

// Ensure database file directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Connect to SQLite Database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to the SQLite database leads.db.');
    initializeSchema();
  }
});

/**
 * Initializes the database schema using prepared SQL scripts.
 * Employs parameterized structure to store lead information securely.
 */
function initializeSchema() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        project_type TEXT NOT NULL,
        project_idea TEXT NOT NULL,
        answers TEXT NOT NULL, -- JSON string representation
        features TEXT NOT NULL, -- JSON string representation
        technologies TEXT NOT NULL, -- JSON string representation
        estimated_cost_min REAL NOT NULL,
        estimated_cost_max REAL NOT NULL,
        estimated_timeline TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Failed to create database table:', err.message);
      } else {
        console.log('Leads database table initialized successfully.');
      }
    });
  });
}

module.exports = db;
