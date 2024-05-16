import "./AboutMe.css";

export const AboutMe = () => {
  const divApp = document.querySelector("#app");

  divApp.innerHTML = `<h1>Sobre Mi</h1`;
  // document.body.style.backgroundImage = "url(/assets/backgroundImage.jpg)";

  const personalInfo = () => {
    const personalInfoDiv = document.createElement("div");
    const personalPictureImg = document.createElement("img");
    const personalTitle = document.createElement("h2");
    const personalBiography = document.createElement("p");

    personalInfoDiv.id = "piDiv";
    personalPictureImg.src = "/assets/hombre.png";
    personalTitle.textContent = "Sobre Mi";
    personalBiography.textContent =
      "Me llamo Víctor Manuel Ruiz Ponferrada, estudiante de desarrollo y programación web Full Stack en ThePowerMBA.";

    divApp.appendChild(personalInfoDiv);
    personalInfoDiv.append(
      personalPictureImg,
      personalTitle,
      personalBiography
    );
  };

  personalInfo();
};
