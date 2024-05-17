import "./AboutMe.css";

export const AboutMe = () => {
  const divApp = document.querySelector("#app");

  divApp.innerHTML = `<h1>About Me</h1`;

  const personalInfo = () => {
    const personalInfoDiv = document.createElement("div");
    const personalPictureImg = document.createElement("img");
    const personalBiography = document.createElement("p");

    personalInfoDiv.id = "piDiv";
    personalPictureImg.src = "/assets/personal-picture.jpg";
    personalBiography.innerHTML =
      `Mi nombre Víctor Manuel, actualmente soy estudiante de programación y desarrollo web Full Stack en ThePowerMBA.  
      <br> Disfruto aprendiendo cada día más sobre este maravilloso mundo rodeado de código.`;

    divApp.appendChild(personalInfoDiv);
    personalInfoDiv.append(personalPictureImg, personalBiography);
  };

  personalInfo();
};
