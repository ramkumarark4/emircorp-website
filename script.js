$(document).ready(function() {
    $(".navbar-nav .nav-link").on("click", function() {
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    });
});
$(document).ready(function () {
            $('[data-bs-toggle="collapse"]').each(function () {
                var target = $(this).attr('href'); 
                $(target).on('show.bs.collapse', function () {
                    const icon = $(this).prev().find('.toggle-icon');
                    icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
                });

                $(target).on('hide.bs.collapse', function () {
                    const icon = $(this).prev().find('.toggle-icon');
                    icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
                });
            });
        });