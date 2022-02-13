// function to toggle mobile navbar
const x = document.querySelector("#link-container-mobile");
x.style.right = "-100%";
const navToggle = () => {
  if (x.style.right == "-100%") {
    x.style.right = "0";
    return true;
  } else {
    x.style.right = "-100%";
    return true;
  }
};

//helper function to detect if element is in portview
const isInViewport = (elem) => {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

//change navbar logo and text color according to scroll offset

let prevScrollpos = window.pageYOffset;
const logo1A = document.querySelectorAll(".image-container .nav-logo1")[0];
const logo2A = document.querySelectorAll(".image-container .nav-logo2")[0];
const logo1B = document.querySelectorAll(".image-container .nav-logo1")[1];
const logo2B = document.querySelectorAll(".image-container .nav-logo2")[1];
const hamburger = document.querySelector(".fa-bars");
const desktopNav = document.querySelectorAll(".link-desktop");
const fadein = document.querySelectorAll(".fadein");
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-desktop").style.top = "0";
  } else {
    document.querySelector(".navbar-desktop").style.top = "-54px";
  }
  prevScrollpos = currentScrollPos;
  let viewPortHeight = window.innerHeight;
  if (document.scrollingElement.scrollTop >= viewPortHeight) {
    logo1A.style.display = "none";
    logo2A.style.display = "block";
    logo1B.style.display = "none";
    logo2B.style.display = "block";
    hamburger.style.color = "#111";
    desktopNav.forEach((elem) => (elem.style.color = "#111"));
  } else {
    logo1A.style.display = "block";
    logo2A.style.display = "none";
    logo1B.style.display = "block";
    logo2B.style.display = "none";
    hamburger.style.color = "#fff";
    desktopNav.forEach((elem) => (elem.style.color = "#fff"));
  }
  fadein.forEach(elem => {
    if(isInViewport(elem)){
      elem.style.visibility = "visible";
      elem.style.opacity = "1";
    }
  })
}