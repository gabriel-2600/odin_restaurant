import "./home.css";
import taalImage from "./taal.png";

export default function generateHome() {
  const homePageDiv = document.createElement("div");
  homePageDiv.classList.add("home-page");

  const displayDiv = document.createElement("div");
  displayDiv.classList.add("display");

  const img = document.createElement("img");
  img.setAttribute("width", "500px");
  img.setAttribute("height", "500px");
  img.src = taalImage;

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-display");

  const headerOne = document.createElement("h1");
  headerOne.textContent = "Kusina";

  const description = document.createElement("p");
  description.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem quo commodi nihil explicabo totam nulla facere eos quos iste minima ducimus officia iure ex molestias blanditiis dolor omnis dignissimos!";

  textDiv.appendChild(headerOne);
  textDiv.appendChild(description);

  displayDiv.appendChild(img);
  displayDiv.appendChild(textDiv);

  homePageDiv.appendChild(displayDiv);

  return homePageDiv;
}

/* <div class="home-page">
  <div class="display">
    <img src="assets/taal.png" alt="Dining Area" />
    <div class="text">
      <h1>Kusina</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem
        quo commodi nihil explicabo totam nulla facere eos quos iste minima
        ducimus officia iure ex molestias blanditiis dolor omnis dignissimos!
      </p>
    </div>
  </div>
</div>; */
