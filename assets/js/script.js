console.log("Hello")
const ACCESS_KEY="zUKzVL4c5dObj5yu1C3ByefuPOrEwxcejeM0DtyoccA"
const URL=`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
async function getImages(url){
 const response=await fetch(url)
 const data=await response.json()
 console.log(data)
}
getImages(URL)
const WETHER_API_KEY="28d5ff15f412925443d50a7b9ee6b8ce"
const WEATHER_URL=``
async function getWeatherData(url){
    const response=await fetch(url)
    const data=await response.json()
    console.log(data)

   }
   getWeatherData(WEATHER_URL)