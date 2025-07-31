const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.png"];

const alternativeText = {
    "pic1.jpg": "Abstract scenery",
    "pic2.jpg": "Trailers driving down street",
    "pic3.jpg": "Green Northern Lights",
    "pic4.jpg": "Beach sunset with plam trees",
    "pic5.jpg": "Abstract castle on hill scene"
};

for (const fileName of images) {

    const newImage = document.createElement("img");
    newImage.setAttribute("src", `images/${fileName}` );
    newImage.setAttribute("alt", alternativeText[fileName]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", () => {
        displayedImage.setAttribute("src", `images/${fileName}`);
        displayedImage.setAttribute("alt", alternativeText[fileName]);
    });
}
    

btn.addEventListener("click", () => {

  const currentMode = btn.getAttribute("class");

  if (currentMode === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";

  }
});
