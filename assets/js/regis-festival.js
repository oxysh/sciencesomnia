const createField = member => {
    let text = '';
    for (let i = 0; i < member; i++) {
        text +=
            `<div class="input" id="team">
        <input id="nama" type="text" class="input__element" placeholder=" " />
        <label class="input__label" for="nama">Nama Anggota *</label>
        </div>`;
    }

    $('.insert-here').append(text);
}

// JUMLAH PESERTA
const team =
    `<input id="nama" type="text" class="input__element" placeholder=" " />
    <label class="input__label" for="nama">Nama Tim *</label>`;
const ind =
    `<input id="nama" type="text" class="input__element" placeholder=" " />
<label class="input__label" for="nama">Nama Lengkap *</label>`;
const none =
    `<input id="nama" type="text" class="input__element" placeholder=" " />
<label class="input__label" for="nama">Pilih jumlah peserta</label>`;

let member = 0;
$('#inputGroupSelect01').click(() => {
    member = $('#inputGroupSelect01')[0].value;
    if ($('#inputGroupSelect01')[0].value == 'Peserta') {
        $('#team')[0].innerHTML = none;
    }
    else if ($('#inputGroupSelect01')[0].value == '1') {
        $('#team')[0].innerHTML = ind;
    }
    else {
        $('#team')[0].innerHTML = team;
    }
});


// ANIMATION
; (function ($) {
    "use strict";

    function verificationForm() {
        let current_fs, next_fs, previous_fs; //fieldsets
        let left, opacity, scale; //fieldset properties which we will animate
        let animating; //flag to prevent quick multi-click glitches

        $(".next").parent().click(function (e) {
            e.preventDefault();

            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            if (current_fs[0] == $('fieldset')[0] && member > 1) {
                console.log('> 1 dah masok sini bos');
                createField(member);
            }

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
$('#inputFoto')[0].addEventListener('change', () => {
    $('label[for="inputFoto"] span')[0].innerHTML = $('input#inputFoto')[0].files[0].name;
}, true)

$('#inputIdentitas')[0].addEventListener('change', () => {
    $('label[for="inputIdentitas"] span')[0].innerHTML = $('input#inputIdentitas')[0].files[0].name;
}, true)

$('#inputFollow')[0].addEventListener('change', () => {
    $('label[for="inputFollow"] span')[0].innerHTML = $('input#inputFollow')[0].files[0].name;
}, true)

$('#inputFollowFest')[0].addEventListener('change', () => {
    $('label[for="inputFollowFest"] span')[0].innerHTML = $('input#inputFollowFest')[0].files[0].name;
}, true)

$('#inputRepost')[0].addEventListener('change', () => {
    $('label[for="inputRepost"] span')[0].innerHTML = $('input#inputRepost')[0].files[0].name;
}, true)

