(function (Slideshow, $, undefined) {

    /*** Private properties ***/

    var delayTime = 4000;
    var slideTimer;
    var currentSlide;
    var nextSlide;
    var originalHeight = window.innerHeight;
    var originalWidth = window.innerWidth;

    /*** Public methods ***/

    Slideshow.Start = function () {
        setSlideshowSize();
        slideTimer = window.setInterval(function () {
            Slideshow.InitSlide('right')
        }, delayTime);
    }

    Slideshow.Stop = function () {
        clearInterval(slideTimer);
    }    

    Slideshow.InitSlide = function (slideDirection) {
        //Unbind the onclick event for each blob during transition
        $('.Slideleft, .Slideright').each(function () {
            $(this).removeAttr('onclick');
        });

        currentSlide = $('.SlideContainer div.live');

        SetNextSlide(slideDirection);

        SwapSlides();

        //Execute final steps after animation finishes
        setTimeout(FinishSlide, 1000);
    }

    /*** Private methods ***/

    function SetNextSlide(slideDirection) {
        var slides = $('div[id*=slide]');
        var currentSlideIndex = 0;
        var nextSlideIndex = 0;

        //find index of the live slide in the list of slides
        for (var i = 0; i < slides.length; i++) {
            if (slides[i].id == currentSlide.attr('id')) {
                currentSlideIndex = i;
            }
        }

        if (slideDirection == 'left') {
            nextSlideIndex = currentSlideIndex - 1;

            if (nextSlideIndex < 0)
                nextSlideIndex = slides.length - 1;
        }
        else {
            nextSlideIndex = currentSlideIndex + 1;

            if (nextSlideIndex >= slides.length)
                nextSlideIndex = 0;
        }

        nextSlide = $(slides[nextSlideIndex]);
    }

    function SwapSlides() {
        //restart the slideshow timer on click so the timers won't overlap
        Slideshow.Stop();

        //load the next slide behind the live slide
        nextSlide.attr('class', 'next');
        nextSlide.fadeIn(0);

        currentSlide.fadeOut(1000, function () {
            //change next slide to live slide and un-load the old slide
            nextSlide.attr('class', 'live');
            currentSlide.removeAttr('class');
        });
        Slideshow.Start();
    }

    function FinishSlide() {
        //Rebind the onclick event for each blob after transition
        $('.Slideleft').attr('onclick', "Slideshow.InitSlide('left')");
        $('.Slideright').attr('onclick', "Slideshow.InitSlide('right')");
    }

    function setSlideshowSize() {
        var newHeight = $('.SlideContainer div.live').height();
        $('.SlideContainer div.filler').height(newHeight);

        var newWidth = $('.SlideContainer div.live').width();
        $('.SlideContainer div.filler').width(newWidth);

        Main.ResizeFooter();

        if (Main.IsSafari())
            resizePortalsForSafari();
    }

    function resizePortalsForSafari()
    {
        var length = $('.Slideshow:visible');

        if (length > 0)
            $(".Portals").attr("style", "max-width:33.83%");
        else
            $(".Portals").removeAttr("style");
    }

    //$(window).on("orientationchange", function (event) {
    //    if (Main.IsSafari())
    //        resizePortalsForSafari
    //});

    window.addEventListener('resize orientationchange', setSlideshowSize, false);

} (window.Slideshow = window.Slideshow || {}, jQuery))