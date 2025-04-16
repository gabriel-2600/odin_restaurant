import "./home.css";
import taalImage from "./taal.png";

export default function generateHome() {
  const homePageDiv = document.createElement("div");
  homePageDiv.classList.add("home-page");

  const displayDiv = document.createElement("div");
  displayDiv.classList.add("display");

  const img = document.createElement("img");
  img.setAttribute("width", "550px");
  img.setAttribute("height", "650px");
  img.src = taalImage;

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-display");

  const headerOne = document.createElement("h1");
  headerOne.textContent = "Kusina";

  const description = document.createElement("p");
  description.textContent =
    "Kusina is a fine dining restaurant beside the serene Taal Lake, blending Filipino flavors with Asian elegance. Kusina offers a modern take on tradition—celebrating the warmth, depth, and soul of Filipino flavors in every dish.";

  textDiv.appendChild(headerOne);
  textDiv.appendChild(description);

  displayDiv.appendChild(img);
  displayDiv.appendChild(textDiv);

  homePageDiv.appendChild(displayDiv);

  return homePageDiv;
}
