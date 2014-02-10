(function (Main, $, undefined) {
    
    $(window).load(function() {
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            $(".Portals").attr("style", "max-width:33.83%");
        }

        ////load slideshow after portal images are finished loading
        //$('.Portals').imagesLoaded(function () {
        //    $('.Slideshow').removeAttr('style');
        //});

        $('.Slideshow').imagesLoaded(function () {
            $('ltkwidget-widget').removeAttr('style');
        });
    });

    Main.LoadRewardStyle = function() {
        !function (d, s, id) {
            var e, p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                e = d.createElement(s);
                e.id = id;
                e.src = p + '://' + 'www.rewardstyle.com/api/widgets' + '/js/ltkwidget.js';
                d.body.appendChild(e);
            }
            if (typeof (window.__ltkwidget) === 'object' && document.readyState === 'complete') {
                __ltkwidget.init();
            }
        }(document, 'script', 'ltkwidget-script');
    }

} (window.Main = window.Main || {}, jQuery))