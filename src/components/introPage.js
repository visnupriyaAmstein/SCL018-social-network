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

  const logo = document.createElement("img");
  logo.className = "introLogo";
  logo.src = "images/logo-petsbook.png";
  header.appendChild(logo);

  // sección
  const section = document.createElement("section");
  section.className = "introForm";
  const intro = `
  <div class="container">
  <div class="container-register">
    <h1>Inicia Sesión</h1>
  </div>
  <div class="input-container">
    <input type="email" id="mailLogin" placeholder="correo@example.com">
    <input type="password" id="passwordLogin" placeholder="contraseña">
  </div>
  <div class="btn-iniciarSesion">
    <button id="btnLogin" class="btn-iniciar">Iniciar Sesión</button>
  </div>
  <button id="btnGoogle" class="btn-google" ">google</button>
  //   <h3>¿No tienes cuenta ?</h3>
  //   <button id="register" class="register">Registrate</button>
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
