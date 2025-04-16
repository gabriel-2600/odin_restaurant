import "./menu.css";
import adoboImage from "./menu-assets/adobo.jpg";
import beefImage from "./menu-assets/beef.jpg";
import bicolImage from "./menu-assets/bicol.jpg";
import mangoImage from "./menu-assets/mango.jpg";

export default function generateMenu() {
  const menuPageDiv = document.createElement("div");
  menuPageDiv.classList.add("menu-page");

  const menuContainerDiv = document.createElement("div");
  menuContainerDiv.classList.add("menu-container");

  const menuObjects = [
    { image: adoboImage, name: "adobo", description: "adobo good" },
    { image: beefImage, name: "beef brocolli", description: "beef good" },
    { image: bicolImage, name: "bicol express", description: "spicy good" },
    { image: mangoImage, name: "mango float", description: "mango good" },
  ];

  for (let i = 0; i < menuObjects.length; i++) {
    const menuCardDiv = document.createElement("div");
    menuCardDiv.classList.add("menu-card");

    const img = document.createElement("img");
    img.setAttribute("width", "200px");
    img.setAttribute("height", "250px");
    img.src = menuObjects[i].image;

    const headerThree = document.createElement("h3");
    headerThree.textContent = menuObjects[i].name;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = menuObjects[i].description;

    menuCardDiv.appendChild(img);
    menuCardDiv.appendChild(headerThree);
    menuCardDiv.appendChild(descriptionParagraph);

    menuContainerDiv.appendChild(menuCardDiv);
  }

  menuPageDiv.appendChild(menuContainerDiv);

  return menuPageDiv;
}

/* <div class="menu-page">
  <div class="menu-container">
    <div class="menu-card">
      <img
        src="menu-module/menu-assets/beef.jpg"
        alt="Beef"
        width="300px"
        height="300px"
      />
      <h3>Beef Brocolli</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat
        doloremque, commodi repudiandae fugit sapiente nostrum iusto laboriosam
        maxime? Deserunt inventore animi asperiores ipsum, odit sint quia labore
        accusantium exercitationem.
      </p>
    </div>
    <div class="menu-card"></div>
    <div class="menu-card"></div>
    <div class="menu-card"></div>
  </div>
</div>; */
