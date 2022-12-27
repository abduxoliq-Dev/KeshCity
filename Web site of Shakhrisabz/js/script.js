//header uchun
let className = "inverted";
let className2 = "dark-bg";
let scrollTrigger = 60;
let scrollTrigger2 = parseInt(window.outerHeight);
let scrollTrigger3 = parseInt((window.outerHeight)/2);



window.onscroll = function(){
 if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementById("header2").classList.add(className);
  } else {
    document.getElementById("header2").classList.remove(className);
  }
  if (window.scrollY >= scrollTrigger3 || window.pageYOffset >= scrollTrigger3) {
    document.getElementById("header2").classList.add(className2);
  } else {
    document.getElementById("header2").classList.remove(className2);
  }
};
// parallax cardlar uchun



