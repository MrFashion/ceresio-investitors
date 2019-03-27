var masonry_element = $('.grid');

$(document).ready(function() {
    slickSliderManager();
    
    var viewportWidth = $(window).innerWidth();

    $('.collapse')
        .on('shown.bs.collapse', function () {
            $(this)
                .parent()
                .find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
        })
        .on('hidden.bs.collapse', function () {
            $(this)
                .parent()
                .find(".icon-minus")
                .removeClass("icon-minus")
                .addClass("icon-plus");
        });

       masonry_element.masonry({
          // options
          itemSelector: '.grid-item'
       });
});

$( window ).on( "load", function() {
    resizeManager();
    masonry_element.masonry('layout');
});

$(window).resize(function () {
    resizeManager();

    $('.slider-for').slick('setPosition');
});

function footerAddress() {

    if ($('.footer-address').length){        
        $('.footer-address > div > p').on('click', function() {

            if (viewportWidth < 768) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open');
                    $(this).parent().parent().find('.footer-address-content').stop().slideUp(300);
                } else {
                    $(this).parent().addClass('open');
                    $(this).parent().parent().find('.footer-address-content').stop().slideDown(300);
                } 
            }

            return false;
        });
    }
}

function resizeManager() {
    viewportWidth = $(window).innerWidth();
    
    footerAddress();
    
    //768px tablet/cellulari
    
    if (viewportWidth < 768) {

        $(".content-nav").each(function () {
            $(this).removeClass("show");
        });

        $('#close-nav').removeClass("nav-item.custom");

        $('#footerLinks').css('text-align', 'left');

        $(".titleNav").each(function () {
            $(this).attr('data-toggle', 'collapse');
        });

        $('.collapse')
            .on('shown.bs.collapse', function () {
                $(this)
                    .parent()
                    .find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
            })
            .on('hidden.bs.collapse', function () {
                $(this)
                    .parent()
                    .find(".icon-minus")
                    .removeClass("icon-minus")
                    .addClass("icon-plus");
            });

    } else {

        $('#close-nav').addClass("nav-item.custom");

        $(".content-nav").each(function () {
            $(this).addClass("show");
        });

        $(".titleNav").each(function () {
            $(this).removeAttr('data-toggle');
        });

        $('#footerLinks').css('text-align', 'right');

    }
}

function openNav() {
    document.getElementById("myNav").style.height = "120%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function slickSliderManager() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        touchMove: false,
        adaptiveHeight: true,
        infinite: false,
        useCSS: true
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-for').slick('slickGoTo', slideno - 1, true);
        
        $('a[data-slide]').removeClass('active');
        $(this).addClass('active');
        
        masonry_element.masonry('layout'); 
        
        return false;
    });
}