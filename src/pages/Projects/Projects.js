import { projects } from "../../data/projectsLinks";
import "./Projects.css";

export const Projects = () => {
  const divApp = document.querySelector("#app");
  const projectContainer = document.createElement("div");

  projectContainer.id = "project-container";

  divApp.innerHTML = "Projects";
  // document.body.style.backgroundImage = "url(/assets/BackgroundProjects.avif)";

  const projectDiv = () => {
    for (const project of projects) {
      const bigDiv = document.createElement("div");
      const imgDiv = document.createElement("div");
      const img = document.createElement("img");

      const textDiv = document.createElement("div");
      const h2 = document.createElement("h2");
      const link = document.createElement("a");

      bigDiv.id = "bigDiv";
      imgDiv.id = "firstDiv";
      img.src = project.img;

      textDiv.id = "secondDiv";
      h2.textContent = project.name;
      link.href = project.link;
      link.textContent = "Go to the project";
      link.target = "_blank";

      projectContainer.appendChild(bigDiv);
      bigDiv.appendChild(imgDiv);
      imgDiv.appendChild(img);

      bigDiv.appendChild(textDiv);
      textDiv.appendChild(h2);
      textDiv.appendChild(link);
    }
  };
  divApp.appendChild(projectContainer);

  projectDiv();
};
