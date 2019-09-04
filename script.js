var css= document.querySelector('h3');
var color1=document.querySelector(".clor1");
var c2=document.querySelector(".clor2");
var bodie= document.getElementById("gradient");

//bodie.style.background = "red";
function changegradient(){
    bodie.style.background= "linear-gradient(to right," +color1.value + "," + c2.value + ")";
}
c2.addEventListener("input",changegradient);
color1.addEventListener("input",changegradient);
