const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // Asegúrate de usar el dialecto correcto
});

// No ejecutes authenticate aquí en pruebas
// Puedes configurar una conexión en un entorno de prueba si es necesario

module.exports = sequelize;
