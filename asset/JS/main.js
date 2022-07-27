let allCategory = document.querySelector('.buttom-dropdown');

allCategory.addEventListener('click', function () {

    document.querySelector('.all-cat-menu').classList.toggle('active-class')
})


$('#Slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:`
    <button type="button" class="slider-prev"><i class="fa-solid fa-angle-left"></i></button>
    `,
    nextArrow:`
    <button type="button" class="slider-next"><i class="fa-solid fa-angle-right"></i></button>
    `,

    responsive: [
      {
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });