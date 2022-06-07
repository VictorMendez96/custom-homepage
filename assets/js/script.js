
var userSettings = 
    {
    subreddit: "",
    userLocation: "",
    music: "",
    remember: false,
    theme: ""
    };
var newUserSetting = 
    {
    subreddit: "",
    userLocation: "",
    music: "",
    remember: false,
    theme: ""
    };
let bodyThemes = [
    // first element is background color, second element is reddit card color, third is font color, fourth is the button color 
    ["DFD6A7", "F7B05B", "1F1300", "AF9B46"], //sand
    ["48ACF0", "CCDDE2", "3a2b24", "93A3BC"], //blue
    ["8BB174", "426B69", "FFFFFF", "2A4849"], //green
    ["DD6031", "8B728E", "FFFFFF", "570000"], //red
    ["2E2E2E", "5A5A5A", "FFFFFF", "383838"], //dark
    ["FFFFFF", "FFFFFF", "000000", "FFFFFF"] //light
]

let musicVar = "";let redditVar = "";let locVar = "";let remVar =""; let theme = [];
let redditHolder = document.getElementById("reddit");
let picArray =[]; let picHolder = document.getElementById("pictures");
let setPage = () => {
    getImages(URL)
    fetchPosts()
    setTheme()
    setMusic()
    setLocal()
}

const ACCESS_KEY="zUKzVL4c5dObj5yu1C3ByefuPOrEwxcejeM0DtyoccA"
const URL=`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
async function getImages(url){
 const response=await fetch(url)
 const data=await response.json()
 console.log(data)
 //build pic array
 let buildPicArray = (data) => {
     for (let i = 0; i < data.length; i++) {
        //get image url
        let picObj = data[i]
        let picURL = picObj.urls.small
        //get artist info
        let picArtist = picObj.user.name;
        console.log(picArtist)
        let authorLink = picObj.links.html;
        let temp = [picURL, picArtist, authorLink]
        picArray[i] = temp;
     }

 }

 let buildPicCard = () => {
    //random image
    let randNum = Math.floor(Math.random()*picArray.length);
    //get pic info
    let newPic = picArray[randNum]
    //clear holder
    picHolder.innerHTML = "";
    //  make whole div clickable element
    let picLink = document.createElement("span")
    picLink.innerHTML= `<a href="${newPic[2]}" target="_blank"> </a>`
    //make image element
    let picImg = document.createElement("img")
    picImg.setAttribute("src", newPic[0])
    let picFacts = document.createElement("p")
    picFacts.textContent = `Image Courtesy of ${newPic[1]} on Unsplash.`
    picFacts.setAttribute("class", "center")
    picHolder.append(picFacts)
    picHolder.append(picLink)
    picHolder.append(picImg)
    
}

function countdown () {
    let timerInterval = setTimeout(function (){
        buildPicCard()
        countdown()
    }, 10000);
    }


function buildPics() {
    buildPicArray(data);
    buildPicCard();
    countdown();
}

buildPics()
}






// Begin reddit API
// =================================================================
// TODO: 

// - exempt NSFW posts?
// - header

function fetchPosts() {
    var popular = `https://www.reddit.com/r/${redditVar}/hot.json`
    
    //empty container on new request
    document.getElementById("reddit").innerHTML = ""
    
    
    
    
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
            contentCard.classList.add("hoverable")
            let cardCol = `#${theme[1]}`
            contentCard.setAttribute("style", `background-color: ${cardCol}`)
            contentCard.addEventListener("click", function (e) {
                        const eventTarget = e.currentTarget.firstChild.textContent
                        window.open(eventTarget)
                        
                    })           
                    if (object.data.children[i].data.thumbnail === "nsfw") {
                        contentCard.setAttribute("style", "hide" )
                    }
                    
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
                thumbnail.setAttribute("src", "assets/img/reddit_logo_horizontal_on_orangered.png")
            } else if(object.data.children[i].data.thumbnail === "nsfw") {
                thumbnail.setAttribute("src", "assets/img/interstitial-image-over18.png")
                thumbnail.style.height = ("160px")
            } else {

                thumbnail.style.height = ("200px")
            }
            
            // sets post title to the card content
            // ================================
            var cardContent = document.createElement("div")
            cardContent.classList.add("card-content")
            cardContent.style.fontSize = "20px"
            
            // sets the subreddit name to the title of the card
            // ================================
            var subreddit = object.data.children[i].data.subreddit_name_prefixed
            var cardTitle = document.createElement("div")
            cardTitle.classList.add("card-title")
            cardTitle.style.fontSize = "20px"
            cardTitle.textContent = subreddit
            
            // creates anchor tag for link
            // ================================
            var a = document.createElement("a")
            var link = document.createTextNode(urlSrc)
            a.setAttribute("class", "hide")
            a.setAttribute("target", "_blank")
            a.href = urlSrc
            a.appendChild(link)
            contentCard.append(a)
            
            // Appends items to the Card
            // ================================================
            cardImgEl.append(thumbnail)
            cardContent.append(cardTitle)
            cardContent.append(title)
            contentCard.append(cardContent)
            contentCard.append(thumbnail)
            document.getElementById("reddit").append(contentCard)
        } })
    }
    
    
    
    // Begin 1st opening function
    function checkCustom() {
        userSettings = JSON.parse(localStorage.getItem("userSettings"));
        if (userSettings == null) {
            document.getElementById("userButton").textContent = "Click me to begin!"
            return
        }
        if (userSettings.remember != false) {
            console.log("made from past")
            console.log(userSettings)
            redditVar = userSettings.subreddit;
            locVar = userSettings.userLocation;
            musicVar = userSettings.music;
            remVar = userSettings.remember;
            themeVar = userSettings.theme;
        setCustom()
    } else {
        document.getElementById("userButton").textContent = "Click me to begin!"
        console.log("Nothing Stored")
    }    
}

// Get user preferences
function setCustom() {
    document.getElementById("content").setAttribute("class","")
    document.getElementById("userButton").textContent = "Change User Settings"
    theme = bodyThemes[themeVar];
    setPage()
}

let clicked = () => {
    musicVar = document.querySelector('#musicVariable').value;
    redditVar = document.querySelector('#redditVariable').value;
    locVar = document.querySelector('#locationVariable').value;
    remVar = document.querySelector('#remember').checked;
    themeVar = document.querySelector('#themeVariable').value;
    
    if (locVar == "" || musicVar == "" || redditVar == "") {
        console.log("blank input")
        document.getElementById("errorDiv").setAttribute("class","center")
        document.getElementById("content").setAttribute("class","hide")
    } else {
        document.getElementById("errorDiv").setAttribute("class","hide")
        document.getElementById("content").setAttribute("class","")
        setCustom()
    }
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

//Create setMusic function to call when setPage is called
function setMusic() {
  var iheartplayer = document.getElementById('iheart');
  var station = document.createElement('iframe');
  station.width = "100%";
  station.height = "200";
  station.frameborder = "0";
  station.src = musicVar;
  
  //If else statement for Media player, create iframe, replace if one already exists
  if (iheartplayer.hasChildNodes()) {
      iheartplayer.removeChild(iheartplayer.lastChild)
      iheartplayer.appendChild(station)
  } else {
    iheartplayer.appendChild(station)
  }
};

checkCustom()


function setTheme() {
    let bodyVar = document.getElementById("body");
    let button = document.getElementById("userButton")
    // set variables
    bodyVar.setAttribute("style", `background-color: #${theme[0]}; color:#${theme[2]}`)
    button.setAttribute("style", `background-color: #${theme[3]}; color:#${theme[2]}`)
}

function setLocal() {
    newUserSetting.subreddit = redditVar;
    newUserSetting.userLocation = locVar;
    newUserSetting.music = musicVar;
    newUserSetting.remember = remVar;
    newUserSetting.theme = themeVar;
    userSettings = newUserSetting;
    localStorage.setItem("userSettings", JSON.stringify(userSettings))
}
console.log(userSettings.theme)