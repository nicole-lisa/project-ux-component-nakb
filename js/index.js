
// Listen for the window's scroll Event
window.addEventListener(`scroll`, event => { 

  // Selecting the progress bar that will be changed based on how much scrolled
  const progress = document.querySelector(`.progress`);
  const ball = document.querySelector(`.ball`);

  // Height of the entire document
  let documentH = document.documentElement.scrollHeight;
  // Height of the window
  let windowH = window.innerHeight;

  // Total of the scrollable height
  let scrollable = documentH - windowH;
  // OR can be written like..to shorten
  // let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  
  // How much the user has scrolled down
  // Pixels scrolled after the scroll event was triggered
  let scrolled = window.scrollY;



  // Calculate the percentage that the window has scrolled at that point, relative to the total possible amount that can possibly be scrolled
  
  // Percentage
  let percentageScrolled = 100;

  // If user can actually scroll down
  // If scrollable is greater than 0
  // Is there a scroll bar on the screen
  // if yes, then calculate how much ahs been scrolled down
  if (scrollable > 0){

    percentageScrolled = Math.ceil(scrolled / scrollable * 100);
  }

// Translate that computed value (a percentage) to the width of the .progress-bar
  progress.style.width = `${percentageScrolled}%`;

  console.log(percentageScrolled);

// Carousel slide

const carouselSide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSide.style.transform = 'translateX(' + ( -size * counter) + 'px)';

//button listeners

nextBtn.addEventListener('click',()=>{
 if(counter >= carouselImages.length - 1)return;
  carouselSide.style.transition = "transform 0.8s ease-in-out";
  counter++;
  carouselSide.style.transform = 'translateX(' + ( -size * counter) + 'px)';

});
prevBtn.addEventListener('click',()=>{
  if(counter <= 0)return;
  carouselSide.style.transition = "transform 0.8s ease-in-out";
  counter--;
  carouselSide.style.transform = 'translateX(' + ( -size * counter) + 'px)';

});

carouselSide.addEventListener('transitionend',() => {
  if (carouselImages[counter].id === 'lastClone'){
    carouselSide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone'){
    carouselSide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
  }
})



});