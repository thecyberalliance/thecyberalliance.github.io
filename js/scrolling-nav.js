// Modern jQuery scrolling with better performance
$(function() {
    $('a.page-scroll').on('click', function(event) {
        const $anchor = $(this);
        const target = $anchor.attr('href');
        
        if (target && $(target).length) {
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 70 // Account for fixed navbar
            }, {
                duration: 1200,
                easing: 'swing' // Use built-in easing instead of plugin
            });
            event.preventDefault();
        }
    });
});
