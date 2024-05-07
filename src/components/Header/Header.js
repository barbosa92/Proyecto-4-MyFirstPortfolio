import { headerLinks } from "../../data/headerLinks";
import "./Header.css";

export const header = () => {
  const body = document.querySelector("body");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  nav.innerHTML = `
  <button class="switch">
  <i class="bx bxs-sun">
  <i class="bx bxs-moon">
  </i>
  </button>

  `;

  //! EMPEQUEÑECER EL HEADER Y PROBAR DE NUEVO HACER OTRO COMPONENTE PARA DARKMODE

  headerLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = link.name;
    a.href = link.url;

    li.appendChild(a);
    ul.appendChild(li);
    li.addEventListener("click", link.page);
  });

  nav.appendChild(ul);
  body.appendChild(nav);
};
