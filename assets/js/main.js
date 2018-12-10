$(document).ready(function() {
    let header_element = '.header_tab .nav-tabs .nav-item';
    $(header_element).on('click', function () {
        $(header_element).removeClass('active-tab');
        $(this).addClass('active-tab');
    });
    $('.close').on('click', function () {
        alert(1);
    });
});