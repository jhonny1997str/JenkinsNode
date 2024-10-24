//C:\Users\Glory\Desktop\PROYECTOS\JenkinsNode\test\userRoutes.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/userRoutes');
const User = require('../models/user'); // Importa el modelo User

// Simula el modelo de usuario usando jest.mock
jest.mock('../models/user');

// Configurar una aplicación Express de prueba
const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);

describe('User Routes', () => {
  test('Debe crear un nuevo usuario', async () => {
    const mockUser = { name: 'Juan', email: 'juan@example.com' };

    // Simula el comportamiento de User.create
    User.create.mockResolvedValue(mockUser);

    const res = await request(app)
      .post('/api/users')
      .send(mockUser);

    expect(res.statusCode).toEqual(201); // Verifica el código de estado
    expect(res.body).toEqual(mockUser); // Verifica el cuerpo de la respuesta
    expect(User.create).toHaveBeenCalledWith(mockUser); // Verifica que se haya llamado con el objeto correcto
  });

  test('Debe obtener todos los usuarios', async () => {
    const mockUsers = [
      { name: 'Juan', email: 'juan@example.com' },
      { name: 'Maria', email: 'maria@example.com' }
    ];

    // Simula el comportamiento de User.findAll
    User.findAll.mockResolvedValue(mockUsers);

    const res = await request(app).get('/api/users');

    expect(res.statusCode).toEqual(200); // Verifica el código de estado
    expect(res.body).toEqual(mockUsers); // Verifica el cuerpo de la respuesta
  });
});
