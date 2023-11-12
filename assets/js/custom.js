$(document).ready(function () {
    // remove preloader
    $("#preloader").fadeOut("slow");

    //set animasi
    init_animate();
});

// trigger element with class animate__animated
function init_animate() {
    $(".animae__animated").each(function () {
        $(this).on('inview' , function(event, isInView) {
            var animate_class = $(this).attr("data-animate");

            //mendeteksi element ketika tampil
            if (isInView) {
                //jika tampil / visible
                $(this).addClass(animate_class);
            } else {
                //jika tidak tampil / not visible
                $(this). removeClass(animate_class);  
            }
        });
    });
}
