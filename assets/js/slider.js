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
function mod(n, m) {
        return ((n % m) + m) % m;
}