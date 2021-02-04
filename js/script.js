$(document).ready(function () {
    $('.Imgarea .owl-carousel').owlCarousel({
        items: 5, // This Is The Number of Items You Want To show
        // margin: 20, // This Is The Gap Which You Want To Shows
        loop: true, // Behaves As A Loop As The Default is False We Need To Change
        nav: true, // It Will Show THe arrows 
        autoplay: true, // Playing The Carousel Automatically
        autoplayTimeout: 2000, // At What Time You Need The Carousel To scroll Automatically
       
        // This Is For The Animation Only Occurs For Single Data
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order
        dots:false,


                
        responsive: {
            0: {
                items:1,
                nav : false,
            },
            600 : {
                items : 1,
                nav : false,
            },
            1000 : {
                items : 1,
                nav : false,
                // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
            },
        }
    })
});
