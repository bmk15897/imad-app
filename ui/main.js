console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img=document.getElementById('img');
var marginLeft;
function moveRight(){
    marginLeft=marginleft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
}