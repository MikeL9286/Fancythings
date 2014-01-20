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
            nextSlideIndex = currentSlideIndex--;
        }
        else {
            nextSlideIndex = currentSlideIndex++;
        }

        if (nextSlideIndex >= 0 && nextSlideIndex < slides.length)
            nextSlide = $(slides[nextSlideIndex]);

        console.log('current index: ' + currentSlideIndex);
        console.log('next index: ' + nextSlideIndex);
        console.log('next slide: ' + nextSlide.attr('id'));

        //reset if index is past the start or end of list
        if (nextSlide.length == null)
            nextSlide = $('.Slides div:first-child');
    }

    function SwapSlides() {
        //load the next slide behind the live slide
        nextSlide.attr('class', 'next');
        nextSlide.fadeIn(0);

        currentSlide.fadeOut(1000, function () {
            //change next slide to live slide and un-load the old slide
            nextSlide.attr('class', 'live');
            currentSlide.removeAttr('class');
        });
    }

    function FinishSlide() {
        //Rebind the onclick event for each blob after transition
        $('.Slideleft, .Slideright').each(function () {
            $(this).attr('onclick', "Slideshow.InitSlide('right')");
        });
    }

    function setSlideshowSize() {
        var newHeight = $('.SlideContainer div.live').height();
        $('.SlideContainer div.filler').height(newHeight);

        var newWidth = $('.SlideContainer div.live').width();
        $('.SlideContainer div.filler').width(newWidth);
    }

    window.onresize = setSlideshowSize;

} (window.Slideshow = window.Slideshow || {}, jQuery))