
let userSettings = {};
let hasCustom = false;
let content = document.getElementById("content")
let musicVar = 0;


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

// Begin 1st opening function
function checkCustom() {
    if (localStorage.getItem("hasCustom") != false) {
        userSettings = localStorage.getItem("userSettings");
    } else {
        userSettings = {
            subreddit: "popular",
            userLocation: "New York City",
            soundcloud: "Top 20",
            remember: false
        };

        if (userSettings.remember === true) {
            localStorage.setItem("hasCustom", true);
        } else {
            localStorage.setItem("hasCustom", false);
        }
        localStorage.setItem("userSettings", userSettings)  

    }    
}

// Get user preferences
function setCustom() {
    
}


let clicked = () => {
    console.log("Modal Clicked")
    content.setAttribute("class","")
    
    var musicVar = document.querySelector('#musicVariable').value;
    var redditVar = document.querySelector('#redditVariable').value;
    console.log("MusicVar: "+musicVar);
    console.log("RedditVar: "+redditVar);

}

document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    
    var singleModalElem = document.querySelector('#userModal');
    var instance = M.Modal.getInstance(singleModalElem);

    let openModal = () => {
        console.log("Modal Clicked")
        instance.open();
    }

  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    
    console.log(elems)
  });

  //document.getElementsByClassName("btn modal-close").addEventListener("click",function() {
  var iheartplayer = document.getElementById('iheart');
  var station = document.createElement('iframe');
  station.width = "100%";
  station.height = "200";
  station.frameborder = "0";
  station.src = "https://www.iheart.com/live/american-top-40-4802/?embed=true";

  //if (MusicVar == 0) {
  //  station.src = "https://www.iheart.com/live/american-top-40-4802/?embed=true";
  //} else {
  //  station.src = "https://www.iheart.com/live/american-top-40-4802/?embed=true";
  //}

  
  iheartplayer.appendChild(station);
//})
