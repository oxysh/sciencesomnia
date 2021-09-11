// ANIMATION
; (function ($) {
    "use strict";

    function verificationForm() {
        let current_fs, next_fs, previous_fs; //fieldsets
        let left, opacity, scale; //fieldset properties which we will animate
        let animating; //flag to prevent quick multi-click glitches

        $(".next").parent().click(function (e) {
            e.preventDefault();

            // if ($('#email')[0].value == "") {
            //     $('#alert-email').css({ 'display': 'block' });
            //     $('#alert-email')[0].innerHTML = notFilled;
            // }
            // else if ($('#email')[0].value == "not found") {
            //     $('#alert-email').css({ 'display': 'block' })
            //     $('#alert-email')[0].innerHTML = notFound;
            // }
            // else {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            console.log(current_fs);
            console.log(next_fs);

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute',
                        'align-self': 'center',
                        'width': '100%'
                    });
                    next_fs.css({
                        'opacity': opacity,
                        'display': 'flex'
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
            // }
        });

        $(".previous").click(function (e) {
            // e.preventDefault();
            // if (animating) return false;
            // animating = true;

            // current_fs = $(this).parent();
            // previous_fs = $(this).parent().prev();

            // //de-activate current step on progressbar
            // $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            // //show the previous fieldset
            // previous_fs.show();
            // //hide the current fieldset with style
            // current_fs.animate({
            //     opacity: 0
            // }, {
            //     step: function (now) {
            //         //as the opacity of current_fs reduces to 0 - stored in "now"
            //         //1. scale previous_fs from 80% to 100%
            //         scale = 0.8 + (1 - now) * 0.2;
            //         //2. take current_fs to the right(50%) - from 0%
            //         left = ((1 - now) * 50) + "%";
            //         //3. increase opacity of previous_fs to 1 as it moves in
            //         opacity = 1 - now;
            //         current_fs.css({
            //             'left': left
            //         });
            //         previous_fs.css({
            //             'transform': 'scale(' + scale + ')',
            //             'opacity': opacity
            //         });
            //     },
            //     duration: 800,
            //     complete: function () {
            //         current_fs.hide();
            //         animating = false;
            //     },
            //     //this comes from the custom easing plugin
            //     easing: 'easeInOutBack'
            // });
        });

        $(".submit").click(function () {
            return false;
        })
    };

    //* Add Phone no select
    function phoneNoselect() {
        if ($('#msform').length) {
            $("#phone").intlTelInput();
            $("#phone").intlTelInput("setNumber", "+880");
        };
    };
    //* Select js
    function nice_Select() {
        if ($('.product_select').length) {
            $('select').niceSelect();
        };
    };
    /*Function Calls*/
    verificationForm();
    phoneNoselect();
    nice_Select();
})(jQuery);

// INPUT GAMBAR
$('#inputFollow')[0].addEventListener('change', () => {
    $('label[for="inputFollow"] span')[0].innerHTML = $('input#inputFollow')[0].files[0].name;
}, true)

$('#inputRepost')[0].addEventListener('change', () => {
    $('label[for="inputRepost"] span')[0].innerHTML = $('input#inputRepost')[0].files[0].name;
}, true)