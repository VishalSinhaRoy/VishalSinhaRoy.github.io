(function ($) {
    "use strict";
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    // About info
    document.getElementById("read-more-btn").addEventListener("click", function() {
        var moreContent = document.getElementById("more-content");
        var readMoreBtn = document.getElementById("read-more-btn");
    
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreContent.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
    
      
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    
    // Education
    document.addEventListener('DOMContentLoaded', function () {
        var eduItems = document.querySelectorAll('.edu-col');
    
        function checkVisibility() {
            eduItems.forEach(function (item) {
                var rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    // Check if the item is not already animated
                    if (!item.classList.contains('animated')) {
                        item.classList.add('animate');
                        item.classList.add('animated'); // Add class to mark as animated
                    }
                }
            });
        }
    
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check
    });


    // Experience
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.exp-col ul').forEach(ul => {
            const listItems = ul.querySelectorAll('li');
    
            listItems.forEach((item, index) => {
                // Hide all list items after the first one by default
                if (index > 0) {
                    item.classList.add('more-content');
                    item.style.display = 'none';
                }
            });
        });
    
        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                const listItems = button.previousElementSibling.querySelectorAll('li.more-content');
    
                if (button.textContent === "Read More") {
                    listItems.forEach(item => {
                        item.style.display = 'list-item';
                    });
                    button.textContent = "Read Less";
                } else {
                    listItems.forEach(item => {
                        item.style.display = 'none';
                    });
                    button.textContent = "Read More";
                }
            });
        });
    });

    
    // Porfolio isotope and filter
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize Isotope
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
    
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');
    
            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    
        // Intersection Observer setup
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // Trigger animation when 10% of the item is visible
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, observerOptions);
    
        // Observe each portfolio item
        document.querySelectorAll('.portfolio-item').forEach(item => {
            observer.observe(item);
        });
    });    


    // Certification slider
    $(document).ready(function(){
        $('.certification-slider').slick({
            autoplay: true,         // The slider will automatically scroll through the slides.
            dots: false,            // Disable navigation dots (set to true if you want to show dots).
            infinite: true,         // The slider will loop infinitely.
            slidesToShow: 1,        // Show one certification at a time.
            slidesToScroll: 1,      // Scroll one certification at a time.
            autoplaySpeed: 2000,    // Time between automatic scrolls in milliseconds (2 seconds here).
            arrows: true,           // Show previous/next navigation arrows.
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            adaptiveHeight: true    // Adjust the height to fit the content of the current slide.
        });
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

