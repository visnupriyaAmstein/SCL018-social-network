// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { routes } from './index.js';

window.addEventListener('load', () => {
    routes(window.location.hash);
});

window.addEventListener('hashchange', () => {
    routes(window.location.hash);
})
