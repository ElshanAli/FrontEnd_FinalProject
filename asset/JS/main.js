
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


$(".for-slider").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true
    }
  }
})
$(document).ready(function () {
  $('.bottom-nav li a').click(function(){
      var position = $(this).position();
      var margin = 37;
      $('.slider').css({"left":+position.left+margin ,  "transform": "translateX(-50%)"});
      $('.bottom-nav li a').removeClass('active-icon');
      $(this).addClass('active-icon');
  });
});



btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});

$(document).ready(function () {

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

})

$('.big-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.small-img'
});
$('.small-img').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.big-img',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(function () {

  $('<span class="add plus" uk-icon="plus">+</span>').insertAfter('.product-container .product-quantity input');
  $('<span class="sub minus" uk-icon="minus">-</span>').insertBefore('.product-container .product-quantity input');


  $('.add').click(function () {
    var selectedInput = $(this).prev('input');
    if (selectedInput.val() < 19) {
      selectedInput[0].stepUp(1);
    }
  });

  $('.sub').click(function () {
    var selectedInput = $(this).next('input');
    if (selectedInput.val() > 0) {
      selectedInput[0].stepDown(1);
    }
  });


});

let categoryMenuToggleBtn = $(".drpdwn-category")

categoryMenuToggleBtn.on("click", function () {
  $(".category-menu").slideToggle();
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  dots: false,
  items: 1,
  infinite: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: false
    }
  }
});



// $('#Slider').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   prevArrow: `
//     <button type="button" class="slider-prev"><i class="fa-solid fa-angle-left"></i></button>
//     `,
//   nextArrow: `
//     <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
//     `,

//   responsive: [{
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }

//   ]
// });

$('#categorySlider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: `
    <button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>
    `,
  nextArrow: `
    <button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>
    `,

  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }

  ]
});
$('.alsoSlide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,

  prevArrow: `
    <button type="button" class="slider-prev"><i class="fa-solid fa-angle-left"></i></button>
    `,
  nextArrow: `
    <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
    `,

  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.alsoSlide-basket').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,

  prevArrow: `
    <button type="button" class="slider-prev"><i class="fa-solid fa-angle-left"></i></button>
    `,
  nextArrow: `
    <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
    `,

  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});






var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');

if (upperSlider !== null) {
  document.querySelector('#two').value = upperSlider.value;
  document.querySelector('#one').value = lowerSlider.value;

  var lowerVal = parseInt(lowerSlider.value);
  var upperVal = parseInt(upperSlider.value);

  upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;
      if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
      }
    }
    document.querySelector('#two').value = this.value
  };

  lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;
      if (upperVal == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 4;
      }
    }
    document.querySelector('#one').value = this.value
  };
}



// var swiper = new Swiper(".for-slider", {
//   slidesPerView: 3,
//   spaceBetween: 30,
// });



// $('.for-slider').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   prevArrow:`
//   <button type="button" class="slider-prev"><i class="fa-solid fa-angle-left"></i></button>
//   `,
//   nextArrow:`
//   <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
//   `,

//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }

//   ]
// });

window.onscroll = () => stickyHeader();

let header = document.querySelector(".buttom-hdr");
let sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

let addToCartBtns = document.querySelectorAll(".add-cart")
let products = JSON.parse(localStorage.getItem("products"));

if (products == null) {
    localStorage.setItem("products", JSON.stringify([]));
    products = [];
}

function updateBasketCount() {
  let basketCount = document.querySelector("#basketCount")
  let products = JSON.parse(localStorage.getItem("products"));
  basketCount.innerText = products.length;
}


function addToCartBtn(event, productId) {
  let parent = event.target.closest(".whole-devices");
  let productImage = parent.querySelector(".device-img img").src;
  let productTitle = parent.querySelector(".device-name h6 > a").innerText;
  let productPrice = parent.querySelector(".device-price p > span").innerText;

  let product = products.find(p => p.id == productId);

  if (product === undefined) {
      products.push({
          id : productId,
          image: productImage,
          title: productTitle,
          price: +productPrice.split("US $")[1],
          count: 1
      });
  }else {
      product.count = +product.count + 1;
  }

  updateBasketCount();
  
  localStorage.setItem("products", JSON.stringify(products));
}

addToCartBtns.forEach((cartBtn, index) => {
  cartBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addToCartBtn(event, index + 1)
  })
});

updateBasketCount();