$(function() {
  $('a[href="#search"]').on("click", function(event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });
  
  $("#search, #search button.close").on("click keyup", function(event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });
});
// carousel
$(document).ready(function(){

    if($('.fea_products').length > 0){
    $(".fea_products").owlCarousel({
    dots: false,
    loop: true,
    autoplay: true,
    slideSpeed : 2000,
    margin: 0,
    responsiveClass: true,
    nav: true,
    // autoHeight: true,
    // slideTransition: 'linear',
    // autoplayTimeout: 3000,
    // smartSpeed: 3000,
    // autoplaySpeed: 3000,
    // autoplayHoverPause: true,
    // center: true,
    navText: ["<i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>"], 
    responsive: {
    0: {
    items: 1,
    nav: true
    },
    480: {
    items: 1,
    nav: true
    },
    600: {
    items: 2,
    nav: true
    },
    800: {
    items: 2,
    nav: true
    },
    1200: {
    items: 4,
    nav: true,
    loop: true,
    margin: 0
    }
    }
    
    });
    }

    if($('.trend_products').length > 0){
        $(".trend_products").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        slideSpeed : 2000,
        margin: 0,
        responsiveClass: true,
        nav: true,
        // autoHeight: true,
        // slideTransition: 'linear',
        // autoplayTimeout: 3000,
        // smartSpeed: 3000,
        // autoplaySpeed: 3000,
        // autoplayHoverPause: true,
        // center: true,
        navText: ["<i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>", "<i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>"], 
        responsive: {
        0: {
        items: 1,
        nav: true
        },
        480: {
        items: 1,
        nav: true
        },
        600: {
        items: 2,
        nav: true
        },
        800: {
        items: 2,
        nav: true
        },
        1200: {
        items: 4,
        nav: true,
        loop: true,
        margin: 0
        }
        }
        
        });
        }


});
// sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
            
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};
   
   
$('.toggle').click(function(e) {
    $(this).next('.dropdown-menu ').slideToggle(500);
    $(this).parent('li').siblings().children('.dropdown-menu').slideUp(500);
});