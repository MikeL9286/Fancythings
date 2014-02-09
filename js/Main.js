(function (Main, $, undefined) {
    
    $(function () {
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            $(".Portals").attr("max-width", "33.83%");
        }
    });

    //load portals

    //load slideshow

    //load reward style

    //load about images

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