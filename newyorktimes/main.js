const API_KEY = "cb9aa834f5a247678835c28955720ae0";

let news = [];

const getLatestNews = async () => {
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log(news);
}

getLatestNews();


//search area
let searchIcon = document.getElementById("search-icon");
let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
searchIcon.addEventListener("click", changeSearchArea);

function changeSearchArea () {

  if(searchInput.style.display === "none"){ 
    searchInput.style.display = "inline";
    searchButton.style.display = "inline";
  } else {
    searchInput.style.display = "none";
    searchButton.style.display = "none";
  }
}