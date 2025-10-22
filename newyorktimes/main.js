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