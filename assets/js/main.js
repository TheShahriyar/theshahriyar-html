(function($) {
    "use strict";

    //when dom is ready
    $(document).ready(function() {


        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top -0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();

        });
        // scroller end
        

        //Tooltip
        $('[data-toggle="tooltip"]').tooltip()




    });
    //dom ready end


})(jQuery);