// ==========================
// XTUREAI SCRIPT
// ==========================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>60){

navbar.style.background="rgba(0,0,0,.85)";
navbar.style.backdropFilter="blur(18px)";
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

navbar.style.background="rgba(0,0,0,.65)";
navbar.style.boxShadow="none";

}

});

// Back To Top Button

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

// Hero Stats Hover

const stats=document.querySelectorAll(".hero-stats div");

stats.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// Service Card Animation

const cards=document.querySelectorAll(".service-card,.product-card,.portfolio-card,.why-card,.price-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

console.log("XtureAI Loaded Successfully");
