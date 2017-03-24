var images = ["assets/image/1.jpg","assets/image/2.jpg","assets/image/3.jpg","assets/image/4.jpg"];
var i=0;
function prev(){
i=mod(i-1,images.length);
document.getElementById("slider").src=images[i];
}
function next(){
i=mod(i+1,images.length);
document.getElementById("slider").src=images[i];
}

var videos = ["https://www.youtube.com/embed/zZU_5gFGorU","https://www.youtube.com/embed/X97-eh612oA","https://www.youtube.com/embed/Qy7C5Ifu_Xw","https://www.youtube.com/embed/_9jEOr6VA0A"];
var j=0;
function Vprev(){
j=mod(j-1,videos.length);
document.getElementById("Vslider").src=videos[j];
}
function Vnext(){
j=mod(j+1,videos.length);
document.getElementById("Vslider").src=videos[j];
}
function mod(n, m) {
        return ((n % m) + m) % m;
}