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


// carousel


let nextBtns = document.querySelectorAll(".next")
  let previousBtns = document.querySelectorAll(".previous")
  let containers = document.querySelectorAll(".carousel-container")
  
  
  
  //* sliding function
  let currentIndex = 0
  const slideImage = (index, myBtn) => {
  
      let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")
  
      containers.forEach(container => {
          if (container.id == carouselBtnAttribute) {
  
              let slides = container.querySelectorAll(".slide")
              let camera = container.querySelector(".carousel")
              let slideWidth = slides[0].clientWidth
              let indicators = container.querySelectorAll('.indicator')
  
  
  
  
  
              //* clikit 3la previous  o ana  aslan f awel image  khasni nmchi  l image lakhra
              if (index < 0) {
                  index = slides.length - 1
              } else if (index >= slides.length) {
                  //* clikit 3la next o ana  aslan f akhir image khasni nrje3  l image lewla
                  index = 0
              }
  
              indicators.forEach(indicator => {
                  indicator.classList.remove('activeIndicator')
              });
              indicators[index].classList.add("activeIndicator")
  
  
              //* hna bach n7arek l camera dyal lcarousel
              camera.style.transform = `translateX(-${slideWidth * index}px)`
              currentIndex = index
          }
      });
  
  
  }
  
  //* btn dyal next
  nextBtns.forEach(next => {
      next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
  });
  
  //* btn dyal previous
  previousBtns.forEach(previous => {
      previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
  });
  
  
  //* auto slide 
  containers.forEach(container => {
      //* check wach  l element 3ando attribute auto slide   
      if (container.getAttribute("autoslide")) {
          let nextBtn = container.querySelector(".next")
  
          setInterval(() => {
              //* method  kanwarek  biha  3la  btn 
              nextBtn.click()
          }, 3000);
      }
  });
  
  //* indicators 
  
  containers.forEach(container => {
      //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna  
      let slides = container.querySelectorAll(".slide")
      let indicatorsGrp = document.createElement("div")
      indicatorsGrp.classList.add("indicators-grp")
      container.appendChild(indicatorsGrp)
  
      slides.forEach(slide => {
          let indicator = document.createElement("div")
          indicator.classList.add("indicator")
          indicatorsGrp.appendChild(indicator)
      });
      indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
  });



// end carousel