import { projects } from "../../data/projectsLinks";
import "./Projects.css";

export const Projects = () => {
  const divApp = document.querySelector("#app");
  const projectContainer = document.createElement("div");

  projectContainer.id = "project-container";

  divApp.innerHTML = `<h1>Projects</h1`;

  const projectDiv = () => {
    for (const project of projects) {
      const bigDiv = document.createElement("section");
      const imgDiv = document.createElement("div");
      const img = document.createElement("img");

      const textDiv = document.createElement("div");
      const h2 = document.createElement("h2");
      const link = document.createElement("a");

      const skillsDiv = document.createElement("div");
      const description = document.createElement("p");
      const skillsBars = document.createElement("h4");

      bigDiv.id = "bigDiv";
      imgDiv.id = "firstDiv";
      img.src = project.img;

      textDiv.id = "secondDiv";
      h2.textContent = project.name;
      link.href = project.link;
      link.textContent = "Ir al proyecto" + " " + project.linkName;
      link.target = "_blank";

      description.textContent = project.description;

      const skills = Object.values(project.skills);
      skillsBars.textContent = skills.join(" ");

      projectContainer.appendChild(bigDiv);
      bigDiv.append(imgDiv, textDiv);
      imgDiv.appendChild(img);
      textDiv.append(h2, link, skillsDiv);
      skillsDiv.append(description, skillsBars);
    }
  };

  divApp.appendChild(projectContainer);

  projectDiv();
};
