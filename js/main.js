
(function ($) {
 
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
   // new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
    

        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);




const langSec = document.querySelector('.langageSetion');
const butons = document.querySelectorAll('a');
const textSubt = document.querySelector('.subtitle');
const textSubt1 = document.querySelector('.subtitle1');
const textdesc = document.querySelector('.description');

butons.forEach(buton =>{
    buton.addEventListener('click', ()=> {
        langSec.querySelector('.active').classList.remove('active');
        buton.classList.add('active');

        const  attr = buton.getAttribute('language');
        textSubt.textContent = data[attr].subtitle;
        textSubt1.textContent = data[attr].subtitle1;
        textdesc.textContent = data[attr].textdesc;
    });
});

const data ={
    "english":{
        "subtitle" : "AL-Gannas",
        "subtitle1" : "Qatari Society",
        "description" : " Al-Gannas Qatari Society is a cultural association specialized in falconry. It aims to encourage the Arabian traditional hunting by supporting falconers and managing their affairs. Al-Gannas hasorganized numerous events and activities, and represented Arab falconers in regional and global forums.Al-Gannas various interests include hunting with falcons, saluqi (hunting dogs) and rifles todevelop traditional hunting on scientific basis and to introduce falconry to the new generation.In 2010, UNESCO declared falconry as an intangible heritage of humanity, several countries wereassociated with the inscription of this element, including:Qatar, Saudi Arabia, United Arab Emirates, Belgium, The Czech Replublic, France, Republic of Korea,Mongollia, Morocco, Spain and The Syrian Arab Republic."
    },
    "arabic":{
        "subtitle" : "جمعية",
        "subtitle1" : " القناص القطرية",
        "description" : " Al-Gannas Qatari Society is a cultural association specialized in falconry. It aims to encourage the Arabian traditional hunting by supporting falconers and managing their affairs. Al-Gannas hasorganized numerous events and activities, and represented Arab falconers in regional and global forums.Al-Gannas various interests include hunting with falcons, saluqi (hunting dogs) and rifles todevelop traditional hunting on scientific basis and to introduce falconry to the new generation.In 2010, UNESCO declared falconry as an intangible heritage of humanity, several countries wereassociated with the inscription of this element, including:Qatar, Saudi Arabia, United Arab Emirates, Belgium, The Czech Replublic, France, Republic of Korea,Mongollia, Morocco, Spain and The Syrian Arab Republic."
    },
}

