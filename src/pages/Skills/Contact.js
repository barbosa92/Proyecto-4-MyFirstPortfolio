import "./Contact.css";

export const Contact = () => {
  const divApp = document.querySelector("#app");

  divApp.innerHTML = `
  <div class="social-media">
      <a target="_blank" href="https://github.com/VicRaii">
      <img src="./public/assets/githubLogo.png" alt="gitHub logo">
      </a>
      
      <a target="_blank" href="www.linkedin.com/in/victor-manuel-ruiz-ponferrada-1a5257285">
      <img src="./public/assets/linkedinLogo.png" alt="linkedin logo">
      </a>
      
      <a target="_blank" href="#">
      <img src="./public/assets/discordLogo.png" alt="discord logo">
      </a>
    </div>
  `;
  // document.body.style.backgroundImage = "url(/assets/MatrixBackground.jpg)";
};
