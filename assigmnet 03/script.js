const apikey = "pub_1430919b702d481197b6cb152a19e065";
const  url = "https://newsdata.io/api/1/latest?apikey=pub_1430919b702d481197b6cb152a19e065&q=crickets";


async function getNews() {
  try{
const responseApi = await fetch(url)
const data = await responseApi.json();
const newsContainer = document.getElementById("news-container")
    newsContainer.innerHTML ="";
    data.results.slice(0,8).forEach(article => {
      let newsCard = document.createElement("div")
      newsCard.classList.add("news-card")

      newsCard.innerHTML = `
            <img src="${article.image_url || 'https://via.placeholder.com/300'}" alt="news image">
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.link}" target="_blank">Read more</a>
          `;
         newsContainer.appendChild(newsCard);
    });
  }catch (error){
    console.error("Error fetching news:", error);
        document.getElementById("news-container").innerHTML = "Failed to load news.";  

}
}
  getNews();