import "./menu.css";
import adoboImage from "./menu-assets/adobo.jpg";
import beefImage from "./menu-assets/beef.jpg";
import bicolImage from "./menu-assets/bicol.jpg";
import mangoImage from "./menu-assets/mango.jpg";

const menuObjects = [
  {
    image: adoboImage,
    name: "Spicy Chicken Adobo",
    description:
      "A bold twist on a Filipino classic—tender chicken braised in soy, vinegar, and spices, finished with a touch of heat for a rich, warming depth of flavor",
  },
  {
    image: beefImage,
    name: "Beef Brocolli",
    description:
      "Sliced tender beef sautéed with crisp broccoli in a savory garlic-soy glaze—an elegant harmony of texture and flavor with a Filipino touch",
  },
  {
    image: bicolImage,
    name: "Bicol Express",
    description:
      "Pork simmered in creamy coconut milk with chilies and shrimp paste—a flavorful dish rooted in Bicolano tradition, with just the right balance of spice and richness",
  },
  {
    image: mangoImage,
    name: "Mango Float",
    description:
      "Layers of ripe mangoes, whipped cream, and graham crackers chilled to perfection—a light, creamy dessert that’s both refreshing and indulgent",
  },
];

export default function generateMenu() {
  const menuPageDiv = document.createElement("div");
  menuPageDiv.classList.add("menu-page");

  const menuContainerDiv = document.createElement("div");
  menuContainerDiv.classList.add("menu-container");

  for (let i = 0; i < menuObjects.length; i++) {
    const menuCardDiv = document.createElement("div");
    menuCardDiv.classList.add("menu-card");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    const img = document.createElement("img");
    img.setAttribute("width", "250");
    img.setAttribute("height", "300px");
    img.src = menuObjects[i].image;

    const headerThree = document.createElement("h3");
    headerThree.textContent = menuObjects[i].name;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = menuObjects[i].description;

    textContainer.appendChild(headerThree);
    textContainer.appendChild(descriptionParagraph);

    menuCardDiv.appendChild(img);
    menuCardDiv.appendChild(textContainer);

    menuContainerDiv.appendChild(menuCardDiv);
  }

  menuPageDiv.appendChild(menuContainerDiv);

  return menuPageDiv;
}
