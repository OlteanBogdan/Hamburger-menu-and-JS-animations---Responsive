const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger-menu");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, 1.7 , {height : "0%"},{height:"80%",ease:  Power2.easeInOut }) 
.fromTo(hero ,1.2 , {width :"100%" } , {width:"80%", ease:  Power2.easeInOut })
.fromTo(slider, 1.2, {x:"-100%"},{x:"0%", ease:  Power2.easeInOut} , "-=")
.fromTo(headline, 0.5 , {opacity:0,x:30},{opacity:1,x:0},"-=0.5")
.fromTo(hamburger, 0.8 , {opacity:0,x:30},{opacity:1,x:0},"-=")
.fromTo(hamburger, 0.8 , {opacity:0,x:30},{opacity:1,x:0},"-=")
.fromTo(hamburger, 0.8 , {opacity:0,x:30},{opacity:1,x:0},"-=")

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}







































const menuIcon = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
navBar.classList.toggle("change");
})