﻿(function (ContentLoader, $, undefined) {

    ContentLoader.Redirect = function(route) {
        // var baseUrl = "http://localhost:34503/Index.html/";
		// var baseUrl = "MikeL9286.github.io/Fancythings/";
		var baseUrl = "file:///C:/Users/Michael/Documents/Visual%20Studio%202012/Projects/FancyThings/Fancythings/";
        window.location.href = baseUrl + route;
    }

    ContentLoader.Load = function () {
        var currentUrl = window.location.href;
        var index = $("div#body");

        if (currentUrl.indexOf("Blog") != -1) {
            index.load("views/blog/Index.html");
        }
        else if (currentUrl.indexOf("Media") != -1) {
            index.load("views/services/Media.html");
        }
        else if (currentUrl.indexOf("Design") != -1) {
            index.load("views/services/Design.html");
        }
        else {
            index.load("views/home/Index.html");
        }
    };

} (window.ContentLoader = window.ContentLoader || {}, jQuery))