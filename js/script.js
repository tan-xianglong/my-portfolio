// function to toggle mobile navbar
const x = document.querySelector("#link-container-mobile");
x.style.right = "-100%";
const navToggle = () => {
  if (x.style.right == "-100%") {
    x.style.right = "0";
  } else {
    x.style.right = "-100%";
  }
};

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-desktop").style.top = "0";
  } else {
    document.querySelector(".navbar-desktop").style.top = "-54px";
  }
  prevScrollpos = currentScrollPos;
}
