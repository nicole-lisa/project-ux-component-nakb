<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> ed90ea075292a1e24709e31b2d204f736f9c7868
>>>>>>> e004d18fcb2d91cf82df9f1ed00767646764298b
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
  
});