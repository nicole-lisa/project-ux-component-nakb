
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

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}


// Get the modal
var modal7 = document.getElementById("myModal7");

// Get the button that opens the modal
var btn7 = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close7")[0];

// When the user clicks the button, open the modal 
btn7.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}

