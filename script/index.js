const navbarBtn=document.querySelector("#navbariacbtn")
const closeBtn=document.querySelector(".fa-xmark")
navbarBtn.addEventListener("click",function(){
   document.querySelector(".menuicon").classList.add("aktiv")
})

closeBtn.addEventListener("click", function(){
   document.querySelector(".menuicon").classList.remove("aktiv")
})


var swiper = new Swiper(".Trustedby", {
  slidesPerView: 1,
  breakpoints: {
    340: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});




  var swipers = new Swiper(".projects-swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: ".afterbtn-button",
      prevEl: ".prevbtn-button",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 100,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 150,
      },
    },
  });

  

  const sira ="https://jsonplaceholder.typicode.com/posts"
  window.addEventListener("DOMContentLoaded",getMelumatlariGetir)
  async function getMelumatlariGetir(){
    try{
     await fetch(sira)
     const gelenCavab= await fetch(sira) 
     const melumatlar=await gelenCavab.json()
    
     for(let i=0;i<melumatlar.length;i++)
    blogDivi.innerHTML+=`
      <div class="blog py-3">
      <span><span id="date">Aprel 16, 2021</span>, <span id="time"> 6 mins</span></span>
      <h2>${melumatlar[i].title}</h2>
      <a href="" class="roboto-bold">Read the article <img src="./images/white-arrow.svg" alt="" class="px-3"></a> `
    }
    catch(err){
    }
  }




  
  const projectt = new Swiper(".projectSwiperr", {
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
      prevEl: ".prevBtn",
       nextEl: ".nextBtn",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
    },
  });
  
  new Accordion('.accordion-container');
  new Accordion('.accordion-container2');
  