import { headerLinks } from "../../data/headerLinks";
import { darkModeButton } from "./DarkMode/DarkMode";
import "./Header.css";

export const header = () => {
  const body = document.querySelector("body");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const burgerMenu = document.createElement("img");

  ul.id = "pages";

  headerLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = link.name;
    a.href = link.url;

    li.appendChild(a);
    ul.appendChild(li);
    li.addEventListener("click", link.page);
  });

  body.appendChild(nav);
  nav.append(ul);

  darkModeButton();
};
