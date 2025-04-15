import "./styles.css";

import generateHome from "./home-module/home.js";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(generateHome());
