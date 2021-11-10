import { routes } from "./paths.js";
import { onAuth } from "../lib/index.js"

onAuth();
window.addEventListener("load", () => {
  routes(window.location.hash);  
})
window.addEventListener("hashchange", () => {
  routes(window.location.hash);
});