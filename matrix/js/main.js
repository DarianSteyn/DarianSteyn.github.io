$(document).ready(function () {

    function animatePageUp(pageName, speed) {
        pageName.animate({
            'top': '-=100%'
        }, speed);
    }

    function animatePageDown(pageName, speed) {
        pageName.animate({
            'top': '+=100%'
        }, speed);
    }

    $('#startButton').on('click', function () {

        if ($('#name').val() === '') {
            $('#name').css({
                'border-color': '#c64628'
            });
            $('<p class="warning">PLEASE FILL IN YOUR NAME!</p>').insertAfter('#name');
        } else {
            $('#name').css({
                'border-color': 'black'
            });
            $('.warning').detach();
            animatePageUp($('#home'), 500);
            animatePageUp($('#two'), 500);
            animatePageUp($('#three'), 500);
            animatePageUp($('#four'), 500);
            animatePageUp($('#end'), 500);

            var nameVal = $('#name').val();

            $(".element").typed({
                strings: ["Wake up... " + nameVal],
                typeSpeed: 100,
                startDelay: 800
            });
        }

    });

    $('.nextButton').on('click', function () {
        animatePageUp($('#home'), 500);
        animatePageUp($('#two'), 500);
        animatePageUp($('#three'), 500);
        animatePageUp($('#four'), 500);
        animatePageUp($('#end'), 500);

        var nameVal = $('#name').val();

        $(".element2").typed({
            strings: ["The Matrix has you  " + nameVal + "..."],
            typeSpeed: 100,
            startDelay: 800
        });
    });

    $('.prevButton').on('click', function () {
        animatePageDown($('#home'), 500);
        animatePageDown($('#two'), 500);
        animatePageDown($('#three'), 500);
        animatePageDown($('#four'), 500);
        animatePageDown($('#end'), 500);
    });

});