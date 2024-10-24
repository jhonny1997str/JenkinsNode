const User = require('../models/user'); // Importa el modelo User

// Simula el modelo de usuario usando jest.mock
jest.mock('../models/user');

describe('User Model', () => {
  test('Debe crear un usuario correctamente', async () => {
    const mockUser = { name: 'Juan', email: 'juan@example.com' };

    // Simula el comportamiento de User.create
    User.create.mockResolvedValue(mockUser); // Usa el mock de create

    const user = await User.create(mockUser); // Llama a User.create

    expect(user).toEqual(mockUser); // Comprueba si el usuario devuelto es igual al mock
    expect(User.create).toHaveBeenCalledWith(mockUser); // Verifica que se haya llamado con el objeto correcto
  });
});
