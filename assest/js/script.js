// document.getElementById("email"). addEventListener("blur", ValidateEmail)
// function ValidateEmail(e){
//     e.preventDefaulte
//     const email=document.getElementById("email")
//     const error=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if(!error.test(email.value) || email==""){
//         email.classList.add("is-invalid")
//     }
//     else{
//         email.classList.remove("is-invalid")

//     }
// }

// document.getElementById("number"). addEventListener("blur", ValidateNumber)
// function ValidateNumber(e){
//     e.preventDefaulte
//     const email=document.getElementById("email")
//     const error=/^[+-]?(?=.)(?:\d+,)*\d*(?:\.\d+)?$/
//     if(!error.test(Number.value) || Number==""){
//         Number.classList.add("is-invalid")
//     }
//     else{
//         Number.classList.remove("nomre daxil et")

//     }
// }

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


//comment-slider

// var swiper = new Swiper(".myswiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

var swiper = new Swiper(".ulvi", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});