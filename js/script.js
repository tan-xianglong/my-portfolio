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
const logo1A = document.querySelectorAll(".image-container .nav-logo1")[0];
const logo2A = document.querySelectorAll(".image-container .nav-logo2")[0];
const logo1B = document.querySelectorAll(".image-container .nav-logo1")[1];
const logo2B = document.querySelectorAll(".image-container .nav-logo2")[1];
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
  } else {
    logo1A.style.display = "block";
    logo2A.style.display = "none";
    logo1B.style.display = "block";
    logo2B.style.display = "none";
  }
}

// Smooth scrolling to targeted section
document.querySelectorAll('a[href^="#portfolio"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//change logo color according to scroll offset