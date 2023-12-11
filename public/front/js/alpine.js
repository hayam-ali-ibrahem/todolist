  // Define a global $isActivePage function that can be accessed by all components
  function $isActivePage(href) {
    return window.location.pathname.includes(href);
  }
  window.Alpine = {
  // Expose the $isActivePage function to all components
        $isActivePage: $isActivePage
};
document.addEventListener('DOMContentLoaded', function() {
  const direction = window.getComputedStyle(document.documentElement).direction;
  if (direction === 'rtl') {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.dataset.aos = el.dataset.aos.replace('left', 'right');
    });
  }
});

function updateOtherDiv1(swiper, index, otherDiv) {



  const activeSlide = swiper.slides[index];
  if (activeSlide) {
      
      const activeImg = activeSlide.querySelector("img");
      const activeSpan = activeSlide.querySelector("span");
      const activeVideo = activeSlide.querySelector(".vidios");
      if (activeImg && activeSpan&& activeVideo) {
          const activeImgSrc = activeImg.getAttribute("src");
          const activeVideoSrc = activeVideo.getAttribute("src");
          const activeSpanText = activeSpan.innerHTML;
          const otherImg = otherDiv.querySelector('[x-ref="otherImg"]');
          const otherVideo = otherDiv.querySelector('[x-ref="otherVideo"]');
          const otherText = otherDiv.querySelector('[x-ref="otherText"]');
          if (otherImg) {
              otherImg.setAttribute("src", activeImgSrc);
          }
          if (otherVideo) {
              otherVideo.setAttribute("src", activeVideoSrc);
          }
          if (otherText) {
              otherText.innerHTML = activeSpanText;
          }
      } else {
          console.error("Active slide is missing img or span element");
      }
  } else {
      console.error("Active slide is undefined");
  }
  }
function initSwipeVideo(selector) {
  return {
     activeIndex: 0,
     swiper: null,
      otherDiv: null,
      overlay:true,
      img:true,

    init() {
      this.swiper = new Swiper(selector, {
        direction: 'horizontal',
        slidesPerView: 2.5,
        spaceBetween: 10,
        mousewheel: true,
        draggable: true,
       
  
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1024: {
            
            direction: 'vertical',
            slidesPerView: 2,
            spaceBetween: 10,
            grabCursor: true
          },
        },
        on: {
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex;
            updateOtherDiv(this.swiper, this.activeIndex, this.otherDiv);
          },
        },
          
      });
      this.otherDiv = this.$refs.otherDiv;
    },
  }
}




//for photo gallery

function updateOtherDiv(swiper, index, otherDiv) {
  const activeSlide = swiper.slides[index];
  if (activeSlide) {
      const activeImg = activeSlide.querySelector("img");
      const activeSpan = activeSlide.querySelector("span");
      if (activeImg || activeSpan) {
          const activeImgSrc = activeImg.getAttribute("src");
          const activeSpanText = activeSpan.innerHTML;
          const otherImg = otherDiv.querySelector('[x-ref="otherImg"]');
          const otherText = otherDiv.querySelector('[x-ref="otherText"]');
          if (otherImg) {
              otherImg.setAttribute("src", activeImgSrc);
          }
          if (otherText) {
              otherText.innerHTML = activeSpanText;
          }
      } else {
          console.error("Active slide is missing img or span element");
      }
  } else {
      console.error("Active slide is undefined");
  }
}

function initSwiperImages(selector) {
  return {
    activeIndex: 0,
    swiper: null,
    otherDiv: null,
    init() {
      this.swiper = new Swiper(selector, {
        direction: 'horizontal',
        slidesPerView: 2.5,
        spaceBetween: 10,
        mousewheel: true,
        draggable: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1024: {
            direction: 'vertical',
            slidesPerView: 2,
            spaceBetween: 10,
            grabCursor: true
          },
        },
        on: {
          slideChange: () => {

            this.activeIndex = this.swiper.activeIndex;
            updateOtherDiv(this.swiper, this.activeIndex, this.otherDiv);
          },
        },
      });
      this.otherDiv = this.$refs.otherDiv;
    },
  }
}




//for video gallery






// Define a function called "selectDropdown" that returns an object representing the Alpine.js component
function selectDropdown() {
    return {
      // Define data properties for the component
      message: '',
      filter: "",
      show: false,
      selected: null,
      focusedOptionIndex: null,
      options: null,
  
      // Define methods for the component
      close() {
        this.show = false;
        this.filter = this.selectedName();
        this.focusedOptionIndex = this.selected ? this.focusedOptionIndex : null;
      },
      open() {
        this.show = true;
        this.filter = "";
      },
      toggle() {
        if (this.show) {
          this.close();
        } else {
          this.open();
        }
      },
      isOpen() {
        return this.show === true;
      },
      selectedName() {
        return this.selected ? this.selected.dialCode + " " + this.selected.isoCode : this.filter;
      },
  
      // Define methods for fetching and filtering options
      fetchOptions() {
        fetch("../js/code.json")
          .then((response) => response.json())
          .then((data) => {
            this.options = data;
            const selectedCountryValue = document.getElementById('selected_country_value').value;
            const selectedOption = this.options.find(option => option.name === selectedCountryValue);
            if (selectedOption) {
              this.selected = selectedOption;
              this.filter = this.selectedName();
            }
          });
      },
      filteredOptions() {
        return this.options ? this.options.filter((option) => {
          return (option.name.toLowerCase().indexOf(this.filter) > -1 || option.dialCode.toLowerCase().indexOf(this.filter) > -1);
        }) : {};
      },
  
      // Define methods for handling option selection
      onOptionClick(index) {
        this.focusedOptionIndex = index;
        this.selectOption();
      },
      selectOption() {
        if (!this.isOpen()) {
          return;
        }
        this.focusedOptionIndex = this.focusedOptionIndex ?? 0;
        const selected = this.filteredOptions()[this.focusedOptionIndex];
  
        this.selected = selected;
        this.filter = this.selectedName();
  
        this.close();
      },
    };
  }






  function range() {
    return {
      
        minprice: 500000,
        maxprice: 8000000,
        min: 1000,
        max: 10000000,
        minthumb: 0,
        maxthumb: 0,

        mintrigger() {
            this.minprice = Math.min(this.minprice, this.maxprice - 500);
            this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
        },

        maxtrigger() {
            this.maxprice = Math.max(this.maxprice, this.minprice + 500);
            this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);
        },
    }
}



function range2() {
    return {
      minprice: 100,
      maxprice: 5000,
      min: 0,
      max: 10000,
      minthumb: 0,
      maxthumb: 0,
      mintrigger() {
       
        this.minprice = Math.min(this.minprice, this.maxprice - 50);
        this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
      },
      maxtrigger() {
       
        this.maxprice = Math.max(this.maxprice, this.minprice + 20);
        this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);
      },
    
    }
  }



  function selectConfigs() {
    return {
      filter: "",
      show: false,
      selected: null,
      focusedOptionIndex: null,
      options: null,
      close() {
        this.show = false;
        this.filter = this.selectedName();
        this.focusedOptionIndex = this.selected
          ? this.focusedOptionIndex
          : null;
      },
      open() {
        this.show = true;
        this.filter = "";
      },
      toggle() {
        if (this.show) {
          this.close();
        } else {
          this.open();
        }
      },
      isOpen() {
        return this.show === true;
      },
      selectedName() {
        return this.selected
          ? this.selected.name.first + " " + this.selected.name.last
          : this.filter;
      },
      classOption(id, index) {
        const isSelected = this.selected
          ? id == this.selected.login.uuid
          : false;
        const isFocused = index == this.focusedOptionIndex;
        return {
          "cursor-pointer w-full border-gray-100 border-b hover:bg-blue-50": true,
          "bg-blue-100": isSelected,
          "bg-blue-50": isFocused,
        };
      },
      fetchOptions() {
        fetch("https://randomuser.me/api/?results=5")
          .then((response) => response.json())
          .then((data) => (this.options = data));
      },
      filteredOptions() {
        return this.options
          ? this.options.results.filter((option) => {
            return (
              option.name.first.toLowerCase().indexOf(this.filter) >
              -1 ||
              option.name.last.toLowerCase().indexOf(this.filter) >
              -1 ||
              option.email.toLowerCase().indexOf(this.filter) > -1
            );
          })
          : {};
      },
      onOptionClick(index) {
        this.focusedOptionIndex = index;
        this.selectOption();
      },
      selectOption() {
        if (!this.isOpen()) {
          return;
        }
        this.focusedOptionIndex = this.focusedOptionIndex ?? 0;
        const selected = this.filteredOptions()[this.focusedOptionIndex];
        if (
          this.selected &&
          this.selected.login.uuid == selected.login.uuid
        ) {
          this.filter = "";
          this.selected = null;
        } else {
          this.selected = selected;
          this.filter = this.selectedName();
        }
        this.close();
      },
      focusPrevOption() {
        if (!this.isOpen()) {
          return;
        }
        const optionsNum = Object.keys(this.filteredOptions()).length - 1;
        if (
          this.focusedOptionIndex > 0 &&
          this.focusedOptionIndex <= optionsNum
        ) {
          this.focusedOptionIndex--;
        } else if (this.focusedOptionIndex == 0) {
          this.focusedOptionIndex = optionsNum;
        }
      },
      focusNextOption() {
        const optionsNum = Object.keys(this.filteredOptions()).length - 1;
        if (!this.isOpen()) {
          this.open();
        }
        if (
          this.focusedOptionIndex == null ||
          this.focusedOptionIndex == optionsNum
        ) {
          this.focusedOptionIndex = 0;
        } else if (
          this.focusedOptionIndex >= 0 &&
          this.focusedOptionIndex < optionsNum
        ) {
          this.focusedOptionIndex++;
        }
      },
    };
  }




function updateOtherDiv2(swiper, index, otherDiv) {
  const activeSlide = swiper.slides[index];
  if (activeSlide) {
      const activeImg = activeSlide.querySelector("img");
      
      if (activeImg ) {
          const activeImgSrc = activeImg.getAttribute("src");
      
          const otherImg = otherDiv.querySelector('[x-ref="otherImg"]');
          
          if (otherImg) {
              otherImg.setAttribute("src", activeImgSrc);
          }
       
      } else {
          console.error("Active slide is missing img or span element");
      }
  } else {
      console.error("Active slide is undefined");
  }
}



