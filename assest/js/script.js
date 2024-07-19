
toggleMenu();
function toggleMenu() {
    let toggle_menu=document.querySelector(".toggle-menu");
    let close_mobile_menu=document.querySelector("#close");
    let mobile_menu=document.querySelector(".mobile-menu");

    toggle_menu.addEventListener("click",function () {
        mobile_menu.classList.add("active");
    })
    close_mobile_menu.addEventListener("click",function () {
        mobile_menu.classList.remove("active");
    })
}

let header = document.querySelector('.navbar');

document.addEventListener('scroll', function() {
  
  // Get the scroll position
  let scrollPos = window.pageYOffset;
  let backtoTop=document.getElementById("backtoTop");
  if ( scrollPos > 700 ) {
    backtoTop.style.display = "block";
  }else{
    backtoTop.style.display = "none";
  }
  if ( scrollPos > 200 ) {
    header.style.backgroundColor = "rgb(139, 139, 143)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});



//
keboardeffect();
function keboardeffect() {
  let text ="Gallery!",
      i=0;
  typeEffect=setInterval(function () {
      document.getElementById("title").innerHTML+=text[i];
      i=i+1;
      if(i > text.length -1){
        clearInterval(typeEffect);
      }
  },200)
  
}
//animation//
//
//







let title = document.querySelectorAll(".title");
 let sections = document.querySelectorAll(".section");
 let count = document.querySelectorAll(".counter-content .number");
 let section=document.querySelector(".about-us");
 let start=false;


 window.onscroll= function () {
  if ( window.scrollY > section.offsetTop-300  ) {
    if (!start) {
      count.forEach((num)=>counter(num))
    }
    start=true;
  } 
  sections.forEach(section => {
    title.forEach(elementtitle => {
    if ( window.scrollY >section.offsetTop-600  ) {
      elementtitle.classList.add("active-slide");
      section.classList.add("active-fade");
     
    }
  })
})
 }
 
 function counter(el) {
  let value = parseInt(el.getAttribute("value"));
 let counterEffect=setInterval(function () {
  el.textContent++;
   if (el.textContent==value) {
      clearInterval(counterEffect)
   }
  },20/value)
}
