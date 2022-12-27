let className = "inverted";
let className2 = "dark-bg";
let scrollTrigger = 60;
let scrollTrigger2 = parseInt(window.outerHeight);

window.onscroll = function() {
  
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementById("header").classList.add(className);
    } else {
      document.getElementById("header").classList.remove(className);
    }
    if (window.scrollY >= scrollTrigger2 || window.pageYOffset >= scrollTrigger2) {
      document.getElementById("header").classList.add(className2);
    } else {
      document.getElementById("header").classList.remove(className2);
    }
};  