let playButton = document.querySelector(".btn-video");
let video = document.querySelector("video");
playButton.addEventListener("click", ()=> {
    video.play();
    playButton.style.display = "none";
    
    
});




// menu
document.querySelector(".btn1-menu").addEventListener("click", ()=> {
    document.querySelector(".chec-menu").innerHTML = "Starters";
});
document.querySelector(".btn2-menu").addEventListener("click", ()=> {
    document.querySelector(".chec-menu").innerHTML = "Breakfast";
});
document.querySelector(".btn3-menu").addEventListener("click", ()=> {
    document.querySelector(".chec-menu").innerHTML = "Lunch";
});
document.querySelector(".btn4-menu").addEventListener("click", ()=> {
    document.querySelector(".chec-menu").innerHTML = "Dinner";
});