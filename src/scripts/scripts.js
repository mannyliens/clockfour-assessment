$(document).ready(function() {
    $('#faq').on('click', function() {
        $('.faq-item').toggle();
        $(".fa-caret-right, .fa-caret-down").toggleClass("fa-caret-right fa-caret-down");
    })
});
