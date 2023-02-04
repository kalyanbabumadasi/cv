let slide = document.getElementById("slideup");
let ace = document.getElementById("google_ace");
slide.addEventListener("click",function(){
    if(slide.style.transform == "rotate(270deg)"){
        slide.style.transform = "rotate(180deg)";
        ace.style.display = "initial";
    }
    else{
        ace.style.display = "none";
        slide.style.transform = "rotate(270deg)";
    }
    
});
