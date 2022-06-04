// console.log("Hello")
const ACCESS_KEY="zUKzVL4c5dObj5yu1C3ByefuPOrEwxcejeM0DtyoccA"
const URL=`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
async function getImages(url){
 const response=await fetch(url)
 const data=await response.json()
//  console.log(data)
}
getImages(URL)


function fetchPosts() {
var popular = "https://www.reddit.com/r/popular/hot.json"


fetch(popular)
    .then( function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
        
        for (let i=0; i < 25; i++) {
            var urlSrc = object.data.children[i].data.url
            var title = object.data.children[i].data.title
            
            // Creates card contianer and sets card attribute
            // ================================================
            var contentCard = document.createElement("div")
            contentCard.classList.add("card")            
                        
            // creates image div and attributes
            // ================================
            var cardImgEl = document.createElement("div")
            cardImgEl.classList.add("card-image")
            var thumbnail = document.createElement("img")
            thumbnail.classList.add("card-image")
            thumbnail.setAttribute("src", object.data.children[i].data.thumbnail)
            thumbnail.setAttribute("alt", "Post Thumbnail")
            
            // sets different thumbnails for different types of posts
            // ================================
            if(object.data.children[i].data.thumbnail === "self" || object.data.children[i].data.thumbnail === "default") {
                thumbnail.setAttribute("src", "/custom-homepage/assets/img/reddit_logo_horizontal_on_orangered.png")
            } else if(object.data.children[i].data.thumbnail === "nsfw") {
                thumbnail.setAttribute("src", "/custom-homepage/assets/img/interstitial-image-over18.png")
                thumbnail.style.height = ("160px")
            } else {
                thumbnail.style.height = ("200px")
            }

            // sets post title to the card content
            // ================================
            var cardContent = document.createElement("div")
            cardContent.classList.add("card-content")
            cardContent.style.fontSize = "20px"
            // cardContent.style.fontWeight = "bold"
           
            // Appends items to the Card
            // ================================================
            cardImgEl.append(thumbnail)
            cardContent.append(title)
            contentCard.append(cardContent)
            contentCard.append(thumbnail)
            
            document.getElementById("reddit").append(contentCard)
            
           
        } })
            
        
            
            
                
                
                
                
           
    
          
    }
    
    fetchPosts()
    // image.src = data.childeren[i].data.url_overridden_by_dest
    // h4.textContent = body.data.children[i].data.title
    // div.appendChild(h4)
    // div.appendChild(image)
    // parentdiv.appendChild(div)