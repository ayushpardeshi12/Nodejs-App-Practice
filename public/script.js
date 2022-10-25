console.log("Api Loaded Successfully");

const dinoName = document.getElementById("dinoname");
const dinoImage = document.getElementById("dinoimage");
const btnload = document.getElementById("btnload");

async function getDinoName() {
  const response = await fetch("/dinoname");
  const data = await response.json();
  console.log(data);
  dinoName.innerText = data.toString();
}

async function getDinoImage() {
  const response = await fetch("/dinoImage");
  const data = await response.json();
  console.log(data);
  let randomImage = Math.floor(Math.random() * 100);
  let dinoImageUrl = data.value[randomImage].thumbnailUrl;
  dinoImage.setAttribute("src", dinoImageUrl);
  console.log(dinoImageUrl);
}

btnload.addEventListener("click", () => {
  getDinoImage();
  getDinoName();
});
