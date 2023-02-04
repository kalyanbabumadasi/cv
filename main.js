let avatar = document.getElementById("avatar");
let side_bar = document.getElementById("side-bar");
let X= document.getElementById("X");

avatar.addEventListener("click", function(){
    side_bar.style.visibility = "visible";
});

X.addEventListener("click",function(){
    side_bar.style.visibility = "hidden";
});