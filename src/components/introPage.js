import { userLogin } from "../lib/index.js";
import { loginWithGoogle } from "../lib/index.js";

const root = document.getElementById("root");
export const introPage = () => {
  // Contenedor principal.
  const introContainer = document.createElement("main");
  introContainer.className = "introContainer";
  introContainer.id = "introContainer";
  root.appendChild(introContainer);
  // Encabezado
  const header = document.createElement("header");
  header.className = "introHeader";
  introContainer.appendChild(header);

  // sección
  const section = document.createElement("section");
  section.className = "introForm";
  const intro = `
  <div class="container">
  <div class="container-iniciar"
    <h1>Inicia Sesión</h1>
    </div>
  <div class="input-container">
    <input type="email" id="mailLogin" placeholder="correo@example.com">
    <input type="password" id="passwordLogin" placeholder="contraseña">
  </div>
  <div class="btn-iniciarSesion">
    <button id="btnLogin" class="btn-iniciar">Iniciar Sesión</button>
  </div>
  
    <div class="container-google">
      <p>O ingresa con:</p>
      <img src='Images/btnGoogle.png' id='btnGoogle' class='btn-google'>    
      </div>
  <div class="containerRegister"
   <h3>¿No tienes cuenta ?</h3>
   <a href="#/registerPage" id="register" class="register">Registrate</a>
   </div>
  </div>`;
  section.innerHTML = intro;
  introContainer.appendChild(section);

  document.querySelector("#btnLogin").addEventListener("click", () => {
    userLogin();
  });
  document.querySelector("#register").addEventListener("click", () => {
    window.location.hash = "#/registerPage";
  });
  document.querySelector("#btnGoogle").addEventListener("click", () => {
    loginWithGoogle();
  });
  return introContainer;
};
