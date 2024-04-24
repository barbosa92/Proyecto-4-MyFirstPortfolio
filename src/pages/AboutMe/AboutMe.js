import "./AboutMe.css";

export const AboutMe = () => {
  const divApp = document.querySelector("#app");

  divApp.innerHTML = "";
document.body.style.backgroundImage = "url(/assets/backgroundImage.jpg)";

  const personalInfo = () => {
    const personalInfoDiv = document.createElement("div");
    const personalPictureImg = document.createElement("img");
    const personalTitle = document.createElement("h2");
    const personalBiography = document.createElement("p");

    personalInfoDiv.id = "piDiv";
    personalPictureImg.src = "/assets/hombre.png";
    personalTitle.textContent = "About Me";
    personalBiography.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum asperiores at deserunt animi, culpa iure ea vitae saepe assumenda doloribus ducimus iste sit architecto officia voluptatum labore alias inventore!";

    divApp.appendChild(personalInfoDiv);
    personalInfoDiv.appendChild(personalPictureImg);
    personalInfoDiv.appendChild(personalTitle);
    personalInfoDiv.appendChild(personalBiography);

  }

  personalInfo();
};


