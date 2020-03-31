
// Component 1 : Horizontal Scroll Landmark
window.addEventListener(`scroll`, event => { 

  const progress = document.querySelector(`.progress`);
  const ball = document.querySelector(`.ball`);
  let documentH = document.documentElement.scrollHeight;
  let windowH = window.innerHeight;
  let scrollable = documentH - windowH;
  let scrolled = window.scrollY;
  let percentageScrolled = 100;

  if (scrollable > 0){
    percentageScrolled = Math.ceil(scrolled / scrollable * 100);
  }

  progress.style.width = `${percentageScrolled}%`;

  console.log(percentageScrolled);

// Component 2 : Carousel slide

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