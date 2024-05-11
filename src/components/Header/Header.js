import { headerLinks } from "../../data/headerLinks";
import { darkModeButton } from "./DarkMode/DarkMode";
import "./Header.css";

export const header = () => {
  const body = document.querySelector("body");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const burgerMenu = document.createElement("img");

  ul.id = "pages";

  burgerMenu.src = "/assets/openBurgerMenu.png";
  burgerMenu.alt = "burgerMenuLogo";
  burgerMenu.id = "burgerMenu";
  burgerMenu.classList.add("burger-menu");

  burgerMenu.addEventListener("click", () => {
    if (pages.style.display === "none") {
      pages.style.display = "flex";
    } else {
      pages.style.display = "none";
    }
  });

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
  nav.append(ul, burgerMenu);

  darkModeButton();
};
