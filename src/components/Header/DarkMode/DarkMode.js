import "./DarkMode.css";

export const darkModeButton = () => {
  const body = document.querySelector("body");
  const nav = document.querySelector("nav");

  const button = document.createElement("button");
  button.textContent = "🌙";

  // Iconos para el botón en modo claro y oscuro
  const lightModeIcon = "😎"; // Puedes reemplazar con el icono que desees
  const darkModeIcon = "🌛"; // Puedes reemplazar con el icono que desees

  // Función para alternar entre el modo claro y oscuro
  const toggleDarkMode = () => {
    body.classList.toggle("dark-mode"); // Agrega o quita la clase "dark-mode" del body

    // Cambiar el icono del botón
    const currentIcon = button.textContent.trim(); // Obtener el texto actual del botón
    button.textContent =
      currentIcon === lightModeIcon ? darkModeIcon : lightModeIcon; // Alternar entre los iconos
  };

  // Agregar evento de clic al botón para cambiar entre modos
  button.addEventListener("click", toggleDarkMode);

  // Agregar el botón al DOM
  nav.appendChild(button);
};
