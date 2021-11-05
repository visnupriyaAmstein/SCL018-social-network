import { userRegister } from "../lib/index.js"
const root = document.getElementById("root");
export const registerPage = () => {
  const register = document.createElement('section');
  register.className = 'modal';
  register.innerHTML = `
    <div class="container">
    <div class="container-register">
      <h1>REGISTRATE</h1>
    </div>
    <div class="input-container">
      <input type="text" id="nameRegister" placeholder="Nombre">
     <input type="email" id="mailRegister" placeholder="correo@example.com">
      <input type="password" id="passwordRegister" placeholder="contraseña">
    </div>
    <div class="boton-register">
      <button id="btnRegister" class="boton-register">Crear Cuenta</button>
    </div>
   </div>
   `;
   root.appendChild(register);
   document.querySelector("#btnRegister").addEventListener('click', () =>{
    userRegister();
   })
   return registerPage;
}
