$(document).ready(function(){
  $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks').fadeOut('slow')
  });
  // $('.close-cookies').on('click', function() {
  //   $('.cookies').fadeOut()
  // });

  $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          


          $('form').trigger('reset');
      });
      return false;
  });

});
var mySwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 150,
  navigation: {
    nextEl: '.comment-wrap__next',
    prevEl: '.comment-wrap__prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  scrollbar: {
    el: '.comment-wrap__scrollbar',
    dragSize: 45,
  },
});
var mySwiper2 = new Swiper('.case-slider', {
  slidesPerView: 1,
  spaceBetween: 50,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 45,
    
  },
});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu-wrap__close');
      closeCookies = document.querySelector('.close-cookies');
      cookies = document.querySelector('.cookies')


hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

closeCookies.addEventListener('click', () => {
  cookies.classList.add('cookies-close');
})



