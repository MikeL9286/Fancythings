﻿(function (Slideshow, $, undefined) {

    /*** Private properties ***/

    var delayTime = 4000;
    var slideTimer;
    var currentSlide;
    var nextSlide;
    var originalHeight = window.innerHeight;
    var originalWidth = window.innerWidth;

    /*** Public methods ***/

    Slideshow.Start = function () {
        slideTimer = window.setInterval(function () {
            Slideshow.InitSlide(null)
        }, delayTime);
    }

    Slideshow.Stop = function () {
        clearInterval(slideTimer);
    }

    Slideshow.InitSlide = function (targetSlideId) {
        //Unbind the onclick event for each blob during transition
        $('ul.SlideBlobs li').each(function () {
            $(this).removeAttr('onclick');
        });

        currentSlide = $('.SlideContainer div.live');

        //Make sure the user didn't click on the live slide
        if (targetSlideId != currentSlide.attr('id')) {
            nextSlide = GetNextSlide(targetSlideId);

            SwapSlides();
            ChangeBlob();

            //Execute final steps after animation finishes
            setTimeout(FinishSlide, 1000);
        }
    }

    /*** Private methods ***/

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
        $('ul.SlideBlobs li').each(function () {
            $(this).attr('onclick', 'Slideshow.InitSlide($(this).attr("data-slideFor"))');
        });
    }

    function GetNextSlide(targetSlideId) {
        //If method was invoked by a click event...
        if (targetSlideId != null) {
            Slideshow.Stop();
            Slideshow.Start();
            return $('.SlideContainer div#' + targetSlideId);
        }
        //Else it was invoked by the timer...
        else {
            nextSlide = $('.SlideContainer div.live + div[id*=slide]');
            //If the slideshow has passed the end of the slide list, loop back to 1st slide
            if (nextSlide.length == 0)
                return $('.SlideContainer').find('div[id*=slide]:first-child');

            return nextSlide;
        }
    }

    function ChangeBlob() {
        $('.SlideBlobs li[data-slideFor=' + currentSlide.attr('id') + ']').removeAttr('style');
        $('.SlideBlobs li[data-slideFor=' + nextSlide.attr('id') + ']').attr('style', 'background-color:#5ABECC');
    }

    window.onresize = setSlideshowSize;
    function setSlideshowSize() {
        //var heightDif = originalHeight - window.innerHeight;
        //var widthDif = originalWidth - window.innerWidth;

        //var newHeight = 600 - heightDif;
        //var newWidth = 1200 - widthDif;

        //$('.SlideContainer div.filler').height(newHeight);
        //$('.SlideContainer div.filler').width(newWidth);

        var newHeight = $('.SlideContainer div.live').height();
        $('.SlideContainer div.filler').height(newHeight);

        var newWidth = $('.SlideContainer div.live').width();
        $('.SlideContainer div.filler').height(newWidth);
    }

} (window.Slideshow = window.Slideshow || {}, jQuery))