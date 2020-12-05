// JS by Kristoffer Egholm Wendelboe
// UCN MMD 2020

// This is NOT something we are familiar with by now, but needed to make it abit more functional 

// setup variables for things that are used more than once
let elmBody = document.querySelector('body');
const strActive = 'nav-active';

// Add class "nav-active" to <body> when #menu-btn is clicked
document.querySelector('#menu-btn').addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff
	elmBody.classList.add(strActive); // add the content of strActive to the class attribute on <body>
});

// remove class "nav-active" from <body> when #menu-btn-close is clicked
document.querySelector('#menu-btn-close').addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff
	elmBody.classList.remove(strActive); // remove the content of strActive to the class attribute on <body>
});

document.querySelector('#menu').addEventListener('click', function(event){
	//event.preventDefault(); // stops the element from doing its usual stuff
	elmBody.classList.remove(strActive); // remove the content of strActive to the class attribute on <body>
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}