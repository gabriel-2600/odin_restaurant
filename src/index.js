import "./styles.css";

import generateHome from "./home-module/home.js";
import generateMenu from "./menu-module/menu.js";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(generateHome());
