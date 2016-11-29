var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var chinese = "ABCDEFGHIJKLMONP田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑1234567890!@#$%^&*?><\':}{]";

var font_size = 16;
var columns = c.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++) {
    drops[x] = 1;
}


function draw(wording) {
    wording = wording.split("");

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0, 0, c.width, c.height)

    ctx.fillStyle = "#0f0"
    ctx.font = font_size + "px arial"


    for (var i = 0; i < drops.length; i++) {
        var text = wording[Math.floor(Math.random() * wording.length)];

        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

var startDraw = setInterval(function () {
    draw(chinese);
}, 33);
window[startDraw];

//DRAW NAME

function drawName() {

    var userName = document.getElementById("name").value;
    submitOK = true;

    if (userName.length <= 0) {
        alert("This is not a valid name, it needs to be at least one character long");
    }

    console.log(userName)
}

function updateText() {

    var userName = document.getElementById("name").value;

    if (typeof userName === 'string') {
        clearInterval(startDraw);
        setInterval(function () {
            draw(userName);
        }, 33);

    }

}

var nameInput = document.getElementById('name');

nameInput.addEventListener('blur', function () {

    if (nameInput.value === '') {
        return false;
    } else {
        updateText();
    }

});