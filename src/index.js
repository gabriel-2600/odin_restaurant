import "./styles.css";

import generateHome from "./home-module/home.js";
import generateMenu from "./menu-module/menu.js";
import generateContact from "./contact-module/contact.js";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(generateHome());

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let choice = e.target.innerText;

    switch (choice) {
      case "Home":
        contentDiv.innerHTML = "";
        contentDiv.appendChild(generateHome());
        break;
      case "Menu":
        contentDiv.innerHTML = "";
        contentDiv.appendChild(generateMenu());
        break;
      case "Contact":
        contentDiv.innerHTML = "";
        contentDiv.appendChild(generateContact());
        break;
    }
  }
});
