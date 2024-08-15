// button video
let playButton = document.querySelector(".btn-video");
let video = document.querySelector("video");
playButton.addEventListener("click", ()=> {
    video.play();
    playButton.style.display = "none";
});
// end button video





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
// end menu



// modal
var modal = document.querySelector('#simpleModal');

var open = document.querySelector('#openModalBtn');

var close = document.querySelector('.closeBtn');

open.addEventListener('click', function openModal() {
    modal.style.display = 'block';
});

close.addEventListener('click', function closeModal() {
    modal.style.display = 'none';

});

window.addEventListener('click', outsideClick);



function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
// end modal