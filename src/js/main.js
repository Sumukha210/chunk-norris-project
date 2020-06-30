import { fetchres } from "./util";
import "../sass/style.scss";

fetchres();

document.querySelector("button").addEventListener("click", () => {
  window.location.reload();
});
