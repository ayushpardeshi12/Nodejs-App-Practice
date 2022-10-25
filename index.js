const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/dinoname", async (req, res) => {
  const url = "https://dinoipsum.com/api/?format=json&words=1&paragraphs=1";

  const fetchDinoNameApi = await fetch(url, {
    method: "GET",
  });
  const dinoNameResponse = await fetchDinoNameApi.json();
  console.log(dinoNameResponse);
  res.json(dinoNameResponse);
});

app.get("/dinoImage", async (req, res) => {
  const url =
    "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=100";

  const fetchDinoImageApi = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07b55aad98msh23dc67fcf1b1209p147b85jsn9ea3741abd78",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  });
  const dinoImage = await fetchDinoImageApi.json();
  console.log(dinoImage);
  res.json(dinoImage);
});
app.listen(port, () => {
  console.log(`listening at port http://localhost:${port}`);
});
