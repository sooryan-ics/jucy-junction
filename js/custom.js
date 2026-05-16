// to get current year
function getYear() {
    const currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    const yearElement = document.querySelector("#displayYear");

if (yearElement) {
    yearElement.innerHTML = currentYear;
}
}

getYear();


// isotope js
// isotope js
$(window).on('load', function () {

    // initialize isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.all',
        layoutMode: 'fitRows'
    });

    // filter items
    $('.filters_menu li').on('click', function () {

        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });

    });

});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
