// Preloader

var preloader = document.getElementById("Preloader");

function onLoadFunc(){
    preloader.style.display ="none";

}



// navbar change color

x = document.querySelector("nav");
window.addEventListener("scroll" , ()=>{
    if(window.scrollY){
        x.classList.add("redcolor");        
    }
    else{
        x.classList.remove("redcolor");
    }
})




// typing animation script

var typed = new Typed(".typing", {    
    strings:["Frontend Developer." , "Fullstack Developer."],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

var typed = new Typed(".typings", {    
    strings:[" Frontend Developer." , " Fullstack Developer."],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});