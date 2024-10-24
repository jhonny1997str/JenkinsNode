const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Importar rutas

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas de la API
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Usar rutas de usuarios
app.use('/api', userRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
