
// find all with class url-link, then add an event listener to each element which has url-link, then the event listener listens for click
// and responds with the change page
document.querySelectorAll('.url-link').forEach( ele=> {
    ele.addEventListener("click", changePage);
});

//change page function
function changePage(evt){
    //lets the clickedEle be the target of evt which was passed in when clicked
    let clickedEle  = evt.currentTarget;
    //change the page with the data stored in the data-url
    window.location.href=clickedEle.getAttribute("data-url");
}

//Extend Container for video
document.querySelectorAll('.Vid-Popup').forEach( ele=> {
    ele.addEventListener("click", PopupVid);
});

function PopupVid(evt){
    //lets the clickedEle be the target of evt which was passed in when clicked
    document.getElementById('ExtendContainer').classList.replace('container', 'newcontainer');
    let clickedEle  = evt.currentTarget;
    let Video = document.getElementById('PopUpVid').src = clickedEle.getAttribute("data-url");
}

//Menu Bar
document.querySelectorAll('#MenuBar').forEach(ele =>{
    ele.addEventListener("click", OpenMenu);
});

function OpenMenu(){
    let menubar = document.getElementById('SetMenu')
    if(menubar.classList.contains('MenuBox')){
        menubar.style.display = "none";
        menubar.classList.remove('MenuBox');
        document.getElementById('wrapper-box').style.filter = "brightness(100%)"
        document.getElementById('TopText').style.filter = "brightness(100%)"
        document.getElementById("ChangeMenuIcon").src = "../Images/MenuBar.png"
    }
    else{
        menubar.classList.add('MenuBox');
        menubar.style.display = "block";
        document.getElementById('wrapper-box').style.filter = "brightness(50%)"
        document.getElementById('TopText').style.filter = "brightness(50%)"
        document.getElementById("ChangeMenuIcon").src = "../Images/MenuBarArrowIcon.png"
    }

}

//Scrolling
window.onscroll = function(){scrollingFunction()};

function scrollingFunction(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("MenuBarBG").style.height = "8%";
    document.getElementById("MenuBar").style.top = "2%";
  } else {
    document.getElementById("MenuBarBG").style.height = "10%";
    document.getElementById("MenuBar").style.top = "4%";
  }
}


//Popup FunFact
document.querySelectorAll('#Fun-Fact').forEach( ele=> {
    ele.addEventListener("click", FunFactPopUp);
});

//change page function
function FunFactPopUp(evt){
    //lets the clickedEle be the target of evt which was passed in when clicked
    let popuptext = document.getElementById('Fact1')
    if(popuptext.style.display === "block"){
        popuptext.style.display = "none";
    }
    else{
        popuptext.style.display = "block";
    }
}