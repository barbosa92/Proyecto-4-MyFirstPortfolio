import "./Contact.css";
import "./Buttton/Button.css";

export const Contact = () => {
  const divApp = document.querySelector("#app");

  divApp.innerHTML = `

  <h1>Contact Me</h1>

  <form action="" method="get">
  <label for="name">Name and surname</label>
  <input type="text" required placeholder="Enter your Name"/>

  <label for="email">E-mail</label>
  <input type="email" required placeholder="Enter a valid email address" />

  <label for="message"> Message </label>
  <textarea placeholder="Enter your message"
    name="Message"
    id="message"
    cols="60"
    rows="7"
    required
  ></textarea>

  <button class="custom-btn">
  <span>Thanks!</span>
  <span>Send</span>
  </button>
    </form>

  <div class="social-media">
      <a target="_blank" href="https://github.com/VicRaii">
      <img src="/assets/githubLogo.png" alt="gitHub logo">
      </a>
      
      <a target="_blank" href="www.linkedin.com/in/victor-manuel-ruiz-ponferrada-1a5257285">
      <img src="/assets/linkedinLogo.png" alt="linkedin logo">
      </a>
      
      <a target="_blank" href="#">
      <img src="/assets/discordLogo.png" alt="discord logo">
      </a>
    </div>

    
  `;
  // document.body.style.backgroundImage = "url(/assets/MatrixBackground.jpg)";
};
