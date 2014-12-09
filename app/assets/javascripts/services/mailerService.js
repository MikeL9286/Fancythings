(function (MailerService, $, undefined) {

    MailerService.SendEmail = function (form, successCallback) {
        var valuesToSubmit = form.serialize();

        $.post(form.attr('action'), valuesToSubmit)
        .done(function(data, textStatus, jqXHR) {
            successCallback();
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            alert("Sorry! We weren't able to send your email. Please try again or email Kristin directly at kristin@fancythingsblog.com");
        });
    };

}(window.MailerService = window.MailerService || {}, jQuery))