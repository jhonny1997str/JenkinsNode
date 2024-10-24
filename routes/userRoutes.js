const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Crear usuario
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Actualizar usuario
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.update(req.body, { where: { id: req.params.id } });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar usuario
router.delete('/users/:id', async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
