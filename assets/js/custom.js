const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 991px)").matches) {
    $dropdown.hover(
      function () {
        $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).addClass('show');
    },
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).removeClass('show');
    }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
  // $(document).on('hover click', $dropdown, function(){
  //   // $(this).dblclick(); 
  //   $(this).toggleClass('show');
  //   $(this).find($dropdownMenu).toggleClass('show');
  // });
});

$(window).on("load resize", function () {
  if (this.matchMedia("(max-width: 991px)").matches) {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show").removeAttr('style');
      }

      var $subMenu = $(this).next(".dropdown-menu");
      if ($subMenu.hasClass('show')) {
        $subMenu.removeAttr('style');
      }

      $subMenu.toggleClass('show');

  
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
  
      return false;
    });
  }

});

// owl carousel start //
$('#owl-carousel-client').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2,
      margin: 15
    },
    1000: {
      items: 2
    }
  }
})
var owl = $("#owl-carousel-client");
owl.owlCarousel();
$(".next-btn").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".prev-btn").click(function () {
  owl.trigger("prev.owl.carousel");
});
$(".prev-btn").addClass("disabled");
$(owl).on("translated.owl.carousel", function (event) {
  if ($(".owl-prev").hasClass("disabled")) {
    $(".prev-btn").addClass("disabled");
  } else {
    $(".prev-btn").removeClass("disabled");
  }
  if ($(".owl-next").hasClass("disabled")) {
    $(".next-btn").addClass("disabled");
  } else {
    $(".next-btn").removeClass("disabled");
  }
});
// owl carousel end //
// video script start //
window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
// video script end //
// DIRTY Responsive pricing table JS

$("ul").on("click", "li", function () {
  var pos = $(this).index() + 2;
  $("tr").find('td:not(:eq(0))').hide();
  $('td:nth-child(' + pos + ')').css('display', 'table-cell');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
});

// Initialize the media query
var mediaQuery = window.matchMedia('(min-width: 640px)');

// Add a listen event
mediaQuery.addListener(doSomething);

// Function to do something with the media query
function doSomething(mediaQuery) {
  if (mediaQuery.matches) {
    $('.sep').attr('colspan', 6);
  } else {
    $('.sep').attr('colspan', 2);
  }
}

// On load
doSomething(mediaQuery);
// DIRTY Responsive pricing table JS
// bottom to top btn start //
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});
// bottom to top btn end //
// preloader start //
$(window).on('load', function () {
  // Preloader
  $('.loader').fadeOut();
  $('.loader-mask').delay(350).fadeOut('slow');
});
// preloader end //