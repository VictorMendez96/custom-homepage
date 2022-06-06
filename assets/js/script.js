console.log("Hello")
const ACCESS_KEY="zUKzVL4c5dObj5yu1C3ByefuPOrEwxcejeM0DtyoccA"
const URL=`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
async function getImages(url){
 const response=await fetch(url)
 const data=await response.json()
 console.log(data)
}
getImages(URL)

const API_KEY = "496a2d09d1e75f9e1e3eb4d1082868f2"
const BASE_URL="https://api.openweathermap.org/data/2.5/weather"
//https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}


const searchButton = document.getElementById("weather-serch-button")
const searchInput = document.getElementById("search-input-value")
const weatherInfo = document.getElementById("weather-info")
searchButton.addEventListener('click', async function(){
    console.log("search ------", searchInput.value)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${searchInput.value},us&appid=${API_KEY}`)
    //fetch(`${BASE_URL}?94040,us&&appid=${API_KEY}`)
    const data = await res.json()
    //data.map(item=>console.log(item))
    console.log(data, data)
    const el = document.createElement("div");
    //weatherInfo.children.remove()
    
 
    el.classList.add("weather-info-warapper");
// 80211
    el.innerHTML = `
      <h2>${data.name}</h2>
      <p class="description"> ${data.weather[0].description}</p>
      <h1> ${data.main.temp}  &#xb0; </h1>
      <div>

      <span>  H:  ${data.main.temp_max}  &#xb0;  </span>
      <span>  L:  ${data.main.temp_min}   &#xb0; </span>
      </div>
      <div>
       <span>  Wind speed:  ${data.wind.speed} </span>
       <span>  Humidity:  ${data.main.humidity} </span>
      <span>  Feels like: ${data.main.feels_like}</span>
      </div>
      <div>
      
      
      </div>

 
     
    `;
weatherInfo.appendChild(el)
})