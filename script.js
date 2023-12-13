var inbtn = document.getElementById("increase");
var debtn = document.getElementById("decrease");
var count = document.getElementById("count");
inbtn.onclick = function(){
    count.innerText++;
}
debtn.onclick = function(){
    count.innerText--;
}