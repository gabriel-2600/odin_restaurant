import "./contact.css";
import sunsetImage from "./sunset.png";

export default function generateContact() {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const img = document.createElement("img");
  img.setAttribute("width", "550px");
  img.setAttribute("height", "650px");
  img.src = sunsetImage;

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contact-details");

  const address = document.createElement("p");
  address.textContent = "123 Address Street, Address City, Address";

  const email = document.createElement("p");
  email.textContent = "email@email.com";

  const number = document.createElement("p");
  number.textContent = "123-456-789";

  contactDetails.appendChild(address);
  contactDetails.appendChild(email);
  contactDetails.appendChild(number);

  contactContainer.appendChild(img);
  contactContainer.appendChild(contactDetails);

  contactPage.appendChild(contactContainer);

  return contactPage;
}
