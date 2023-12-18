// Replace 'YOUR_API_KEY' with your actual NewsAPI key
const apiKey = 'd2dc79ac725f45159664860a49911596';
const apiUrl = 'https://newsapi.org/v2/top-headlines';
let country = 'us'; // Change the country code as needed

async function fetchNews(){
  try{
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
    let data = await response.json()
  let mainContainer = document.getElementById("news-card-container");

for (let i = 0; i < data.articles.length; i++) {

  let cardContainer = document.createElement("div");
  cardContainer.className = "card";

  let bgContainer = document.createElement("div");
  bgContainer.className = "bg";

  let newsImage = document.createElement("img");
  newsImage.src = data.articles[i].urlToImage;
  newsImage.alt = "News Image";
  
  let newsLink = data.articles[i].url;

  let newHeading = document.createElement("h4");
  let linkElement = document.createElement("a");
  let horizontalRule = document.createElement("hr")

  linkElement.href = newsLink;
  linkElement.textContent = data.articles[i].title;
  newHeading.appendChild(horizontalRule);
  newHeading.appendChild(linkElement);

  bgContainer.appendChild(newsImage);
  bgContainer.appendChild(newHeading);

  cardContainer.appendChild(bgContainer);

  let blobContainer = document.createElement("div");
  blobContainer.className = "blob";
  cardContainer.appendChild(blobContainer);

  mainContainer.appendChild(cardContainer);
}
  
  }catch(error){
    console.log("error fetching news ",error)
  }
}
fetchNews();

function handleButtonClick() {
  var userInput = document.getElementById("userInput").value;
  country = userInput;
  console.log(country)
}