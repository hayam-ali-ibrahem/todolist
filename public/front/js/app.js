//ends the loader of page
window.addEventListener("load", function () {
  document.querySelector("#preloader").style.display = "none";
});

//to submit form
const searchBtn = document.getElementById("search-btn");
const searchForm = document.querySelector("form");
const myInput = document.getElementById("search-input");





searchBtn.addEventListener("click", () => {
  searchForm.submit();
});

//to scroll page up
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function emailCurrentPage() {
  window.location.href =
    "mailto:?subject=" +
    document.title +
    "&body=" +
    escape(window.location.href);
}

//to share  href to whats app
function shareLink() {
  var url2 = window.location.href;
  var message2 = encodeURIComponent("Check out this page: " + url2);
  var whatsapp_url2 = "whatsapp://send?text=" + message2;
  window.location.href = whatsapp_url2;
}

//to copy href to clipboard
function copyToClipboard() {
  var url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(
      function () {
        console.log("URL copied to clipboard: " + url);
      },
      function () {
        console.error("Failed to copy URL to clipboard");
      }
    );
  } else {
    // Fallback for older mobile browsers
    var input = document.createElement("input");
    input.setAttribute("value", url);
    input.setAttribute("readonly", true);
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    console.log("URL copied to clipboard: " + url);
  }
}

//to hide arrows of swiper in small screens
var prev = document.getElementById("js-prev1");
var next = document.getElementById("js-next1");
var next_op = document.getElementById("next");
var prev_op = document.getElementById("prev");

addEventListener("load", () => {
  var width = window.innerWidth;
  if (width < 600) {
    prev.style.display = "none";
    next.style.display = "none";
    next_op.style.display = "none";
    prev_op.style.display = "none";
  }
});

let nums = document.querySelectorAll(".numbers .number");
let sectionNums = document.querySelector(".numbers");

let started = false; // Function Started ? No
if (sectionNums != null) {
  window.onscroll = function () {
    if (window.scrollY >= sectionNums.offsetTop - 600) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };
}

function startCount(el) {
  let goal = el.dataset.goal;
  if (goal == null || goal == 0) {
    el.textContent = 0;
    return;
  }
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

let swiperNav = new Swiper(".swiper-header", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

const swiper1 = new Swiper(".swiper-photocards", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }, 
});
const swiper5 = new Swiper(".swiper-photocard", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // init: false,

  breakpoints: {
    1024: {
      direction: "vertical",
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

const swiper2 = new Swiper(".swiper-brandCards", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 38,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 22,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

let swipertestimonial = new Swiper(".swiper-testimonial", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperEmployees = new Swiper(".swiper-employees", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1224: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1921: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  a11y: true,
  keyboardControl: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperNews = new Swiper(".swiper-news", {
  direction: "horizontal",
  centeredSlides: true,

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperProjects = new Swiper(".swiper-projects", {
  direction: "horizontal",

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swipercompare = new Swiper(".swiper-compare", {
  direction: "horizontal",

  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 1.25,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// handle valid email and password
const inputs = document.querySelectorAll(
  `input[type ="email"], input[type ="password"]`
);
const form = document.querySelector("form");
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.type === "email") {
      if (!input.value.match(regEmail)) {
        input.classList.add("not-valid");
      } else {
        input.classList.remove("not-valid");
      }
    } else if (input.type === "password") {
      if (input.value.length < 8) {
        input.classList.add("not-valid");
      } else {
        input.classList.remove("not-valid");
      }
    }
  });
});

// if (form) {
//   form.addEventListener("submit", (ev) => {
//     const allInput = Array.from(ev.target.querySelectorAll("input"));
//     allInput.forEach((e) => {
//       if (e.classList.contains("not-valid") || e.value == "") {
//         ev.preventDefault();
//       }
//     });
//   });
// }
// myInput.addEventListener("input", function () {
//   if (myInput.value.trim().length > 0) {
//     searchBtn.removeAttribute("disabled");
//   } else {
//     searchBtn.setAttribute("disabled", "");
//   }
// });








// document.addEventListener("DOMContentLoaded", () => {
//   // Get all the elements with class ".img-div"
//   const blurredImageDivs = document.querySelectorAll(".img-div");

//   // Loop over each element and apply the code
//   blurredImageDivs.forEach((blurredImageDiv) => {
//     const delimg = blurredImageDiv.querySelector("img");
//     if (delimg) {
//       // delimg.style.display = "none";
//       delimg.addEventListener("load", () => {
//         console.log("hai")
//         // delimg.style.display = "";
//         blurredImageDiv.classList.remove("blurred-img");
//       });
//     }
//   });
//   });
  // Get all the elements with class ".img-div"



  // blurredImageDivs.forEach((blurredImageDiv) => {
  //   const delimg = blurredImageDiv.querySelector("img");
  //   if (delimg) {
  //     hideImage();
  //     if (isImageLoaded(delimg)) {
  //       showImage();
  //     } else {
  //       delimg.addEventListener("load", showImage);
  //       delimg.addEventListener("error", showError);
  //     }
  //   }
  
  //   function isImageLoaded(image) {
  //     return image.complete || image.naturalWidth > 0;
  //   }
  
  //   function hideImage() {
  //     delimg.style.display = "none";
  //     blurredImageDiv.classList.add("blurred-img");
  //   }
  
  //   function showImage() {
  //     blurredImageDiv.classList.remove("blurred-img");
  //     delimg.style.display = "";
  //     delimg.removeEventListener("load", showImage);
  //     delimg.removeEventListener("error", showError);
  //   }
  
  //   function showError() {
  //     console.log("Error loading image");
  //     delimg.removeEventListener("load", showImage);
  //     delimg.removeEventListener("error", showError);
  //   }
  // });


  // const blurredImageDivs = document.querySelectorAll(".img-div");

  // blurredImageDivs.forEach((blurredImageDiv) => {
  //   const delimg = blurredImageDiv.querySelector("img");
  //   if (delimg) {
  //     blurredImageDiv.classList.add("loading-img");
  //     delimg.addEventListener("load", showImage);
  //     delimg.addEventListener("error", showError);
  //   }
  
  //   function showImage() {
  //     blurredImageDiv.classList.remove("loading-img");
  //     blurredImageDiv.classList.remove("blurred-img");
  //     delimg.removeEventListener("load", showImage);
  //     delimg.removeEventListener("error", showError);
  //   }
  
  //   function showError() {
  //     console.log("Error loading image");
  //     delimg.removeEventListener("load", showImage);
  //     delimg.removeEventListener("error", showError);
  //   }
  // });

  // const blurredImageDivs = document.querySelectorAll(".img-div");

  // blurredImageDivs.forEach((blurredImageDiv) => {
  //   const delimg = blurredImageDiv.querySelector("img");
  //   if (delimg) {
  //     hideImage();
  //     if (isImageLoaded(delimg)) {
  //       showImage();
  //     } else {
  //       delimg.addEventListener("load", showImage);
  //       delimg.addEventListener("error", showError);
  //     }
  //   }
  
  //   function isImageLoaded(image) {
  //     return image.complete || image.naturalWidth > 0;
  //   }
  
  //   // function hideImage() {
  //   //   delimg.style.display = "none";
  //   //   blurredImageDiv.classList.add("blurred-img");
  //   // }
  
  //   function showImage() {
  //     blurredImageDiv.classList.remove("blurred-img");
  //     // delimg.style.display = "";
  //     delimg.removeEventListener("load", showImage);
  //     delimg.removeEventListener("error", showError);
  //   }
  
  //   function showError() {
  //     console.log("Error loading image");
  //     delimg.removeEventListener("load", showImage);
  //     delimg.removeEventListener("error", showError);
  //   }
  // });
// const blurredImageDiv = document.querySelector(".img-div");
// if (blurredImageDiv) {
//   const imgLink = blurredImageDiv.querySelector("a");
//   if (imgLink) {
//     const img = new Image();
//     img.src = imgLink.href;
//     img.addEventListener("load", () => {
//       blurredImageDiv.classList.remove("blurred-img");
//       imgLink.appendChild(img);
//     });
//   }
// }













// document.addEventListener("DOMContentLoaded", function() {
//   var lazyLoadImages;

//   if ("IntersectionObserver" in window) {
//     lazyLoadImages = document.querySelectorAll("img");
//     var imageObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           var image = entry.target;
//           image.src = image.dataset.src;
//           imageObserver.unobserve(image);
//         }
//       });
//     });

//     lazyLoadImages.forEach(function(image) {
//       if (image.hasAttribute('data-src')) {
//         // Set a placeholder image while the main image is being loaded
//         image.src = '../img/Group40870.svg';
//         imageObserver.observe(image);
//       }
//     });
//   } else {  
//     var lazyLoadThrottleTimeout;
//     lazyLoadImages = document.querySelectorAll("img[data-src]");
    
//     function lazyload () {
//       if(lazyLoadThrottleTimeout) {
//         clearTimeout(lazyLoadThrottleTimeout);
//       }    

//       lazyLoadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyLoadImages.forEach(function(img) {
//             if(img.offsetTop < (window.innerHeight + scrollTop)) {
//               // Set a placeholder image while the main image is being loaded
//               img.src = '../img/Group40870.svg';
//               img.src = img.dataset.src;
//               img.removeAttribute('data-src');
//             }
//         });
//         if(lazyLoadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//       }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   }
// });







document.addEventListener("DOMContentLoaded", function() {
  var lazyLoadImages;

  if ("IntersectionObserver" in window) {
    lazyLoadImages = document.querySelectorAll("img[data-src]");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
          imageObserver.unobserve(image);
        }
      });
    });

    lazyLoadImages.forEach(function(image) {
      // Set a placeholder image while the main image is being loaded
      image.src = '../img/logodatasrc-small.png';
      imageObserver.observe(image);
    });
  } else {  
    var lazyLoadThrottleTimeout;
    lazyLoadImages = document.querySelectorAll("img[data-src]");
    
    function lazyload () {
      if(lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }    

      lazyLoadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyLoadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              // Set a placeholder image while the main image is being loaded
              img.src = '../img/logodatasrc-small.png';
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
        });
        // Unbind the event listeners when all images have been loaded
        if(lazyLoadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});