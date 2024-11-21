// ---------------Navbar-------------
let menuIcon = document.getElementById("menu-icon");
let navItems = document.getElementById("navbar-items");
let cross = document.getElementById("cross");
let roadMap = document.getElementById("roadmap");
let iconParent = document.querySelectorAll("#icons-parent div");
let timeLine = gsap.timeline({
  paused: true, 
});

timeLine.to(navItems, {
  right: 0,
  duration: 0.1, 
  ease: "power2.out", 
});

timeLine.from("#navbar-items li", {
  x: 150, 
  stagger: 0.1,
  opacity: 0,
});

timeLine.from("#navbar-items img", {
  opacity: 0,
  duration: 0.1,
});

timeLine.from("#navbar-items #icons-parent div", {
  stagger: 0.1,
});

menuIcon.addEventListener("click", function () {
  timeLine.play();
});

cross.addEventListener("click", function () {
  timeLine.reverse();
});

// --------galxy-animation------------
gsap.fromTo(
  "#star",
  {
    rotate: 0,
 
  },
  {
    rotate: 360,

    duration: 50,
    repeat: -1,
    ease: "linear",
  }
);
// ---------anime-slider-----------

$(".anime-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "0px",
});

 // Add opacity effect for slides
 $(".anime-slider").on(
   "init afterChange",
   function (event, slick, currentSlide) {
     $(".anime-slider .slick-slide").css("opacity", "0.5"); 
     $(".anime-slider .slick-active").css("opacity", "1");
   }
 );

 $(".anime-slider").slick("slickGoTo", 0);

 $(".next-arrow").on("click", function () {
   $(".anime-slider").slick("slickNext");
 });

 $(".prev-arrow").on("click", function () {
   $(".anime-slider").slick("slickPrev"); 
 });


// ------sm-screen-slider---
$(".swiper-wrapper").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  centerMode: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ------------------youtube-video------
    document
      .getElementById("play-video")
      .addEventListener("click", function () {
        const videoDiv = document.querySelector(".video");
        const videoURL = "https://www.youtube.com/embed/pge4IvwQFA8?start=138";

        videoDiv.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/pge4IvwQFA8?si=LZ6AwY9R-mx_FaCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      });

// -------------faq----------------
 radioButtons.forEach((radio) => {
   radio.addEventListener("change", () => {
     radioButtons.forEach((rb) => {
       const icon = document.querySelector(`#icon${rb.id.replace("item", "")}`);
       const path = icon.querySelector("path"); 
       if (rb.checked) {
         icon.style.transform = "rotate(180deg)";
         path.setAttribute("fill", "blue");
       } else {
         icon.style.transform = "rotate(0deg)";
         path.setAttribute("fill", "white");
       }
     });
   });
 });

// 



// ==========back to top=============
document.addEventListener("DOMContentLoaded", () => {
  const backTop = document.querySelector(".back-to-top");
  backTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
});
