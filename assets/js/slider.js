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

var videos = ["https://www.youtube.com/embed/YCAp-9ITkyk","https://www.youtube.com/embed/fmYRlHM7Z7g","https://www.youtube.com/embed/COiwk-nM_Wo","https://www.youtube.com/embed/DGDu9XOc-ss"];
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