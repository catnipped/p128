window.onload = function () {
    var colors = ['#7E2553', '#008751', '#AB5236', '#FF004D', '#FFA300', '#29ADFF', '#83769C', '#FF77A8'];
    var colors2 = [];
    var index;
    var a = document.getElementsByClassName('randomcolor');
    for (index = 0; index < a.length; ++index) {
        var b = Math.floor(Math.random() * colors.length - 1) + 1;
        console.log(b)
        var color = colors[b];
        colors2.push(color);
        colors.splice(b,0);
        if (colors.length == 0) {
          colors = colors2
          colors2 = []
        };
        a[index].style.background = color;
    };
};

var i = 0;
function switchchannel() {
    var image=document.getElementById("tv");
    if (image != null) {
        var images = ["image1.gif","image2.gif","image3.gif"]
        console.log(image)
        if (++i >= images.length) i = 0;
        image.src=images[i];
    }
}
setInterval(switchchannel, 7000);