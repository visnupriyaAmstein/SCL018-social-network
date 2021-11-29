import { routes } from './paths.js';
import { onAuth } from './lib/index.js';

window.addEventListener('load', () => {
  onAuth();
  routes(window.location.hash);
});
window.addEventListener('hashchange', () => {
  onAuth();
  routes(window.location.hash);
});
