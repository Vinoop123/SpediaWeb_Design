$(document).ready(function(){
var rootElement = document.getElementById("menu-wrapper");
var sidebar = document.getElementsByClassName("sidebar")[0];
var header = document.getElementsByClassName("main-header")[0];
var menu = MenuHamburger.initialize({
  rootElement: rootElement,
  size: 40,
  iconColor: "#0DB2B2",
  lineWidth: 2,
});
menu.on("open", function () {
  sidebar.classList.remove("sidebar-closed");
  sidebar.classList.add("sidebar-opened");
});
menu.on("close", function () {
  sidebar.classList.remove("sidebar-opened");
  sidebar.classList.add("sidebar-closed");
  header.classList.remove("main-header-opened");
  header.classList.add("main-header-closed");
});

});

$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() >= 50;
    if ($(window).scrollTop() > navHeight) {
      $('header').addClass('fixed');
    }
    else {
      $('header').removeClass('fixed');
    }
 });
});
        
    $(document).ready(function(){
        $(".toggle-password").click(function() {

          $(this).toggleClass("fa-eye fa-eye-slash");
          var input = $($(this).attr("toggle"));
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
        
            
    });

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
};

$('.liveclass-carousel').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  center: false,
  rtl:true,
  navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
  ],
  dots: false,
  autoplay: true,
  responsive: {
      0: {
          items: 1,
          nav:false,
          stagePadding: 25,
          autoplay: false,
          margin: 10,
      },
      600: {
          items: 2,
          loop: true
      },
      1000: {
          items: 3
      }
  }
});

$('.slider-carousel').owlCarousel({
  loop: true,
  margin:0,
  nav: true,
  navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
  ],
  dots: false,
  autoplay: true,
  rtl:true,
  items:1
});


$('.activeliveclass-carousel').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
  ],
  dots: false,
  autoplay: false,
  rtl:true,
  center: false,
  responsive: {
      0: {
          items: 1,
          nav:false,
          stagePadding: 25,
          autoplay: false,
          margin: 10,
      },
      600: {
          items: 2,
          loop: true
      },
      1000: {
          items: 3
      }
  }
});

$('.privateclass-carousel').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
  ],
  dots: false,
  autoplay: false,
  rtl:true,
  center: false,
  responsive: {
      0: {
          items: 1,
          margin: 10,
          nav:false,
          stagePadding: 25,
          autoplay: false,
      },
      767: {
          items: 2,
          loop: true
      },
      1000: {
          items:2
      }
  }
});

$('.videorecorder-carousel').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
  ],
  dots: false,
  autoplay: true,
  rtl:true,
  center: false,
  responsive: {
      0: {
          items: 2,
          margin: 10,
          nav:false,
          stagePadding: 25,
          autoplay: false,
      },
      767: {
          items: 3,
          loop: true
      },
      1000: {
          items: 4
      }
  }
});


$('.liveclass-category').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  center: false,
  navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>"
  ],
  dots: false,
  autoplay: true,
  rtl:true,
  responsive: {
      0: {
          items: 1,
          margin: 10,
          nav:false,
          stagePadding: 25,
          autoplay: false,
      },
      600: {
          items: 2,
          loop: true
      },
      1000: {
          items: 3
      }
  }
});

$('.skillsubject-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  center: false,
  rtl:true,
  dots: false,
  autoplay: false,
  responsive: {
      0: {
          items: 4,
          autoplay: false,
          stagePadding: 25,
          center:false,
      },
      600: {
          items: 7,
      },
      1000: {
          items: 10
      }
  }
});




$(document) .ready(function(){
  var li =  $(".owl-item li ");
  $(".owl-item li").click(function(){
  li.removeClass('active');
  });
  });
// $('.panel-collapse').on('show.bs.collapse', function () {
//   $(this).siblings('.panel-heading').addClass('active');
// });

// $('.panel-collapse').on('hide.bs.collapse', function () {
//   $(this).siblings('.panel-heading').removeClass('active');
// });


$(document).ready(function(){
  $(".story-open").click(function(){
    $('body').addClass('story-flow')
    $("#story-view").fadeIn();
    $('.story-carousel').owlCarousel({
      loop: false,
      margin:0,
      nav: false,
      navText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>"
      ],
      dots: true,
      autoplay: true,
      rtl:true,
      items:1,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
    });

  function hideSlider() {
    var $owl = $(".story-carousel");
    var owl = $owl.data('owl.carousel');
    var totalItems = owl.items().length;
    var currentItem = owl.relative(owl.current()) + 1;

    if (currentItem === totalItems) {
        setTimeout(function(){
          $("#story-view").fadeOut();
          $('body').removeClass('story-flow');
        }, 5000);
    }
}

    $(".story-carousel").on('changed.owl.carousel', function(event) {
        hideSlider();
    });

    hideSlider();

    $('.story-carousel').on('translate.owl.carousel', function (e) {
      $('.owl-item .item video').each(function () {
        $(this).get(0).pause();
      });
    });
    
    $('.story-carousel').on('translated.owl.carousel', function (e) {
      if ($('.owl-item.active').find('video').length !== 0) {
        $('.owl-item.active .item video').get(0).play();
      }
    });

  });
    $(".story-close-icon").click(function(){
      $("#story-view").fadeOut();
        $('body').removeClass('story-flow');
    });
});






