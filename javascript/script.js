
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

document.querySelectorAll('.Vid-Popup').forEach( ele=> {
    ele.addEventListener("click", PopupVid);
});

//change page function
function PopupVid(evt){
    //lets the clickedEle be the target of evt which was passed in when clicked
    let clickedEle  = evt.currentTarget;
    //change the page with the data stored in the data-url
    window.location.href=clickedEle.getAttribute("data-url");
}