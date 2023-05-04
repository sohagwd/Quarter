$(function(){

    //banner_slider
    $('.proper_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        
    });

    // new WOW().init();

    // counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });

    //testimunail 

    $('.testi_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        
    });

    // blog 
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        
    });

})