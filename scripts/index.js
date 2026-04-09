// index.js

// 띠배너
// DOM
const topBnr = document.querySelector('#top_bnr .top_bnr_swiper');

console.log(topBnr);

// swiper
const topBnrSwiper = new Swiper(topBnr,{
    loop:true,
    autoplay:{delay:2000,disableOnInteraction: false,},
    direction:'vertical',
})
