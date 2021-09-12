const music =
    `<fieldset>
    <div class="top">
        <div class="header">
            <button class="back-btn">
                <div class="previous button__icon"></div>
            </button>
            <div>
                <h4 style="font-weight: 400; text-align: left;">register Sciencesomnia Festival</h4>
                <p class="caption">Music Competition</p>
            </div>
        </div>
        <div class="oneline">
            <div class="input">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Peserta</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="input" id="team">
                <input id="nama" type="text" class="input__element" placeholder=" " />
                <label class="input__label" for="nama">Pilih jumlah peserta</label>
            </div>
        </div>
        <div class="input">
            <input id="asal" type="text" class="input__element" placeholder=" " />
            <label class="input__label" for="asal">Asal Daerah *</label>
        </div>
        <div class="input">
            <input id="email" type="text" class="input__element" placeholder=" " />
            <label class="input__label" for="email">Email Aktif *</label>
        </div>
        <div class="input">
            <input id="ponsel" type="text" class="input__element" placeholder=" " />
            <label class="input__label" for="ponsel">No HP *</label>
        </div>
    </div>

    <button type="button" class="button">
        <h5 class="button__label next">Next</h5>
        <div class="button__icon"></div>
    </button>
    </fieldset>

    <fieldset style="height: unset;">
    <div class="top insert-here">
        <div class="header">
            <button class="back-btn">
                <div class="previous button__icon"></div>
            </button>
            <div>
                <h4 style="font-weight: 400; text-align: left;">register Sciencesomnia Festival</h4>
                <p class="caption">Music Competition</p>
            </div>
        </div>


    </div>

    <button type="button" class="button">
        <h5 class="button__label next">Next</h5>
        <div class="button__icon"></div>
    </button>
    </fieldset>

    <fieldset class="special">
        <div>
            <div class="header">
                <button class="back-btn">
                    <div class="previous button__icon"></div>
                </button>
                <div>
                    <h4 style="font-weight: 400; text-align: left;">register Sciencesomnia Festival</h4>
                    <p class="caption">Music Competition</p>
                </div>
            </div>
        </div>
    <div class="top">
        <div class="input satu">
            <p>Upload Foto</p>
            <p class="caption">Jadikan satu untuk grup. Maksimum 5mb.</p>
            <label for="inputFoto">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputFoto" id="inputFoto" accept="image/*" style="display: none;">
        </div>
        <div class="input dua">
            <p>Upload kartu identitas aktif</p>
            <p class="caption">KTP/KTM/Kartu Pelajar. Maksimum 3mb.</p>
            <label for="inputIdentitas">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputIdentitas" id="inputIdentitas" accept="image/*"
                style="display: none;">
        </div>
        <div class="input tiga">
            <p>Screenshot bukti follow IG @sciencesomnia 2021</p>
            <p class="caption">Maksimum 3mb.</p>
            <label for="inputFollow">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputFollow" id="inputFollow" accept="image/*" style="display: none;">
        </div>
        <div class="input empat">
            <p>Screenshot bukti follow IG Sciencesomnia Festival (@sciencesomniafestival)</p>
            <p class="caption">Maksimum 3mb.</p>
            <label for="inputFollowFest">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputFollowFest" id="inputFollowFest" accept="image/*"
                style="display: none;">
        </div>
        <div class="input lima">
            <p>Screenshot bukti repost poster Sciencesomnia di Instastory dengan tag IG @sciencesomnia
                @sciencesomniafestival</p>
            <p class="caption">Maksimum 3mb.</p>
            <label for="inputRepost">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputRepost" id="inputRepost" accept="image/*" style="display: none;">
        </div>
    </div>

    <a href="afterform-festival-music.html" type="button" class="button">
        <h5 class="button__label">Daftar</h5>
        <div class="button__icon"></div>
    </a>
    </fieldset>`;

const art =
    `<fieldset>
    <div class="top">
        <div class="header">
            <button class="back-btn">
                <div class="previous button__icon"></div>
            </button>
            <div>
                <h4 style="font-weight: 400; text-align: left;">register Sciencesomnia Festival</h4>
                <p class="caption">Digital Art Competition</p>
            </div>
        </div>
        <div class="input">
            <input id="asal" type="text" class="input__element" placeholder=" " />
            <label class="input__label" for="asal">Nama *</label>
        </div>
        <div class="input">
            <input id="asal" type="text" class="input__element" placeholder=" " />
            <label class="input__label" for="asal">Asal Daerah *</label>
        </div>
        <div class="input">
            <input id="email" type="text" class="input__element" placeholder=" " />
            <label class="input__label" for="email">Email Aktif *</label>
        </div>
        <div class="input">
            <input id="ponsel" type="text" class="input__element" placeholder=" " />
            <label class="input__label" for="ponsel">No HP *</label>
        </div>
    </div>

    <button type="button" class="button">
        <h5 class="button__label next">Next</h5>
        <div class="button__icon"></div>
    </button>
</fieldset>

<fieldset class="special">
    <div>
        <div class="header">
            <button class="back-btn">
                <div class="previous button__icon"></div>
            </button>
            <div>
                <h4 style="font-weight: 400; text-align: left;">register Sciencesomnia Festival</h4>
                <p class="caption">Digital Art Competition</p>
            </div>
        </div>
    </div>
    <div class="top">
        <div class="input satu">
            <p>Upload Foto</p>
            <p class="caption">Jadikan satu untuk grup. Maksimum 5mb.</p>
            <label for="inputFoto">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputFoto" id="inputFoto" accept="image/*" style="display: none;">
        </div>
        <div class="input dua">
            <p>Upload kartu identitas aktif</p>
            <p class="caption">KTP/KTM/Kartu Pelajar. Maksimum 3mb.</p>
            <label for="inputIdentitas">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputIdentitas" id="inputIdentitas" accept="image/*"
                style="display: none;">
        </div>
        <div class="input tiga">
            <p>Screenshot bukti follow IG @sciencesomnia 2021</p>
            <p class="caption">Maksimum 3mb.</p>
            <label for="inputFollow">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputFollow" id="inputFollow" accept="image/*" style="display: none;">
        </div>
        <div class="input empat">
            <p>Screenshot bukti follow IG Sciencesomnia Festival (@sciencesomniafestival)</p>
            <p class="caption">Maksimum 3mb.</p>
            <label for="inputFollowFest">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputFollowFest" id="inputFollowFest" accept="image/*"
                style="display: none;">
        </div>
        <div class="input lima">
            <p>Screenshot bukti repost poster Sciencesomnia di Instastory dengan tag IG @sciencesomnia
                @sciencesomniafestival</p>
            <p class="caption">Maksimum 3mb.</p>
            <label for="inputRepost">
                <span>Nama File.png</span>
                <span class="upload">Upload</span></label>
            <input type="file" name="inputRepost" id="inputRepost" accept="image/*" style="display: none;">
        </div>
    </div>

    <a href="afterform-festival-art.html" type="button" class="button">
        <h5 class="button__label">Daftar</h5>
        <div class="button__icon"></div>
    </a>
</fieldset>`;

// RADIO
$('#radio-next').click(() => {
    if ($("input[name='festival']")[0].checked) {
        $('form.form').append(music);
    }
    else {
        $('form.form').append(art);
    }

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

    // fungsi animasi lg
    animate()
})

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
const animate = () => {
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
                e.preventDefault();
                if (animating) return false;
                animating = true;

                current_fs = $(this).parent().parent().parent().parent();
                previous_fs = $(this).parent().parent().parent().parent().prev();

                //de-activate current step on progressbar
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

                //show the previous fieldset
                previous_fs.show();
                //hide the current fieldset with style
                current_fs.animate({
                    opacity: 0
                }, {
                    step: function (now) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale previous_fs from 80% to 100%
                        scale = 0.8 + (1 - now) * 0.2;
                        //3. increase opacity of previous_fs to 1 as it moves in
                        opacity = 1 - now;
                        previous_fs.css({
                            'transform': 'scale(' + scale + ')',
                            'opacity': opacity
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
}
animate();