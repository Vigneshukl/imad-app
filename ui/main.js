console.log('Loaded!');

//change the value of main-text div
var element=document.getElementById('main-text');
element.innerHTML='Hi! I am Vignesh';

//Move the image

var element=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginleft = marginleft + 10;
    img.style.marginleft=marginleft + 'px';
}
img.onclick= function (){
    var interval =setInterval(moveRight, 50);
};