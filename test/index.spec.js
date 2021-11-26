// importamos la funcion que vamos a testear
import {userRegister} from '../src/lib/index.js';

describe('userRegister', () => {
  it('debería ser una función', () => {
    expect(typeof userRegister).toBe('function');
  });
});
