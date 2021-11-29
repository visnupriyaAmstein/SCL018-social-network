import { userRegister } from '../lib/index.js';

export const registerPage = () => {
  const registerOne = document.createElement('section');
  registerOne.className = 'registerOne';
  registerOne.id = 'registerOne';
  registerOne.innerHTML = `
  <div class="container">
  <div class="container-register">
  <h1>REGISTRATE</h1>
  </div>
  <div class="input-container">
  <input type="text" id="nameRegister" placeholder="Nombre">
  <input type="email" id="mailRegister" placeholder="correo@example.com">
  <input type="password" id="passwordRegister" placeholder="contraseña">
  </div>
  <div>
  <button id="btnRegister" class="boton-register">Crear Cuenta</button>
  </div>
  </div>
   `;
  // evento para registrarte
  registerOne.querySelector('#btnRegister').addEventListener('click', () => {
    const name = document.getElementById('nameRegister').value;
    const email = document.getElementById('mailRegister').value;
    const password = document.getElementById('passwordRegister').value;
    userRegister(email, password, name);
  });
  return registerOne;
};
