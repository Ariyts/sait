document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#customCarousel1');
    const indicators = document.querySelectorAll('.custom-carousel-indicators button');
  
    carousel.addEventListener('slid.bs.carousel', function (event) {
      const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(
        carousel.querySelector('.carousel-item.active')
      );
  
      indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    });
  });
