const pages = document.querySelectorAll(".page");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const photoBtn = document.getElementById("photoBtn");

const slides = document.querySelectorAll(".slide");

let currentPage = 0;
let slideIndex = 0;

function showPage(index){
  pages.forEach((page,i)=>{
    page.classList.toggle("active",i===index);
  });
  currentPage=index;
}

window.onload=()=>{
  showPage(0);
};

startBtn.addEventListener("click",()=>{
  showPage(1);
});

nextBtn.addEventListener("click",()=>{
  showPage(2);
});

photoBtn.addEventListener("click",()=>{
  showPage(3);
  startSlider();
});

function startSlider(){

  if(slides.length===0) return;

  slides.forEach(slide=>slide.classList.remove("active"));

  slides[slideIndex].classList.add("active");
    slideIndex++;

  if(slideIndex >= slides.length){
    slideIndex = 0;
  }

  setTimeout(startSlider,3000);
}

// Background Music
const music = new Audio("music.mp3");
music.loop = true;
music.volume = 0.8;

document.addEventListener("click",()=>{
  music.play().catch(()=>{});
},{once:true});

// Disable Right Click
document.addEventListener("contextmenu",(e)=>{
  e.preventDefault();
});

// Disable Drag
document.addEventListener("dragstart",(e)=>{
  e.preventDefault();
});

// Disable Text Selection
document.addEventListener("selectstart",(e)=>{
  e.preventDefault();
});
