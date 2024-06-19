const express = require('express');
const db = require('../db'); 

const router = express.Router();

router.post('/', (req, res) => {
  const { name, age } = req.body;
  
  const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
  db.run(sql, [name, age], function(err) {
    if (err) {
      console.error('Error inserting user:', err.message);
      return res.status(500).json({ error: 'Error inserting user' });
    }
    res.status(201).json({
      id: this.lastID,
      name,
      age
    });
  });
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching users:', err.message);
      return res.status(500).json({ error: 'Error fetching users' });
    }
    res.json(rows);
  });
});

module.exports = router;
