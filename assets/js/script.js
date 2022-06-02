let userSettings = {};
let hasCustom = false;
let content = document.getElementById("content")
let musicVar = 0;



console.log("Hello")
const ACCESS_KEY="zUKzVL4c5dObj5yu1C3ByefuPOrEwxcejeM0DtyoccA"
const URL=`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
async function getImages(url){
 const response=await fetch(url)
 const data=await response.json()
 console.log(data)
}
getImages(URL)

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