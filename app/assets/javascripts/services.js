﻿(function (Services, $, undefined) {

    $(window).resize(function () {
        resizeServices();
    });

    function resizeServices() {
        var services = $('.service');
        var desiredHeight = 0;

        //clear the min-height if we're in a single column view
        if (window.innerWidth < 768 && services.css('min-height') != '0px') {
            services.css('min-height', '');
            return;
        }

        //else set the min-height so that all rows are equal heights
        if (window.innerWidth >= 768) {
            services.each(function (i) {
                var serviceHeight = $(this).outerHeight();
                desiredHeight = (serviceHeight > desiredHeight) ? serviceHeight : desiredHeight;
            });

            services.css('min-height', desiredHeight + 5);
        }
    };

    $(document).ready(function() {
        resizeServices();
        
        $('.servicePitch a').leanModal({closeButton: "#inquiryModal #lean-modal-close"});

        var closeModal = function() {
            $('#inquiryModal form')[0].reset();
            $('#inquiryModal, #lean_overlay').fadeOut(200)
        };

        $('form[action="inquiry"]').submit(function() {  
            MailerService.SendEmail($(this), closeModal);
            return false; // prevents normal behaviour
        });
    });

}(window.Services = window.Services || {}, jQuery))