export const introPage = () => {
  // Contenedor principal.
  const introContainer = document.createElement('main');
  introContainer.className = 'introContainer';
  introContainer.id = 'introContainer';
  // Encabezado
  const header = document.createElement('header');
  header.className = 'introHeader';
  introContainer.appendChild(header);
  const logo = document.createElement('img');
  logo.className = 'introLogo';
  logo.src = 'images/logo-petsbook.png';
  header.appendChild(logo);
  // sección
  const section = document.createElement('section');
  section.className = 'introForm';
  const intro = `
    <div class="container">
    <div class="container-register">
      <h1>Inicia Sesión</h1>
    </div>
    <div class="input-container">
      <input type="email" id="mail-register" placeholder="correo@example.com">
      <input type="password" id="password-register" placeholder="contraseña">
    </div>
    <div class="btn-iniciarSesion">
      <button id="btn-iniciar" class="btn-iniciar">Iniciar Sesión</button>
    </div>
    <h2>o ingresa con </h2>
    <button id="btn-google" class="btn-google"></button>
    <h3>¿No tienes cuenta ? Registrate </h3>
    </div>`;
  section.innerHTML = intro;
  introContainer.appendChild(section);
  return introContainer;
};
