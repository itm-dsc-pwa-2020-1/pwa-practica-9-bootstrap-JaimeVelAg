const responsive = {
    0: {
        items: 1
    },
    414: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function(){


  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 3000);


  $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3000,
      dots: false,
      nav: true,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
      responsive: responsive
  });



  new WOW().init();


  $("#switch").click(function() {
      $("body").toggleClass("dark");
      $("#switch").toggleClass("active");
      $(".card").toggleClass("nota_dark");
      $(".item-3").toggleClass("dark");
      $(".item-4").toggleClass("dark");
      $(".item-5").toggleClass("dark");
      $(".item-6").toggleClass("dark");
      $(".item-7").toggleClass("dark");
      $(".publicidad2").toggleClass("dark");
      $(".efecto").toggleClass("dark");
      $(".item-8").toggleClass("dark");
      $(".item-9").toggleClass("dark");
      $(".pie").toggleClass("dark");
      $(".info").toggleClass("dark");
  });

});
