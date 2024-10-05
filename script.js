$(document).ready(function() {
    // Add smooth scroll to navigation links
    $('nav ul li a').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Animation for the Call to Action button on hover
    $('.cta .btn').hover(function() {
        $(this).animate({ padding: '15px 25px' }, 200);
    }, function() {
        $(this).animate({ padding: '10px 20px' }, 200);
    });

    // Fade in the header on load
    $('header').hide().fadeIn(1000);
});
