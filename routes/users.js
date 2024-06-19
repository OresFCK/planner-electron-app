const express = require('express');
const Users = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  const { imie, nazwisko, email, haslo, iloscWykonanychTaskow, czyGra, zloto, czyPremium } = req.body;
  
  try {
    const user = await Users.create({
      imie,
      nazwisko,
      email,
      haslo,
      iloscWykonanychTaskow,
      czyGra,
      zloto,
      czyPremium,
    });

    res.status(201).json(user);
  } catch (err) {
    console.error('Error inserting user:', err.message);
    res.status(500).json({ error: 'Error inserting user' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

module.exports = router;
