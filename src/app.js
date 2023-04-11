import { fifaPlayers } from "./results.js";



// let notApplicable = document.querySelectorAll('.not-applicable').forEach((x)=>{
//     x.textContent = 'W'
// })
// console.log(notApplicable)
// let fifaDate = new Date("Dec 03, 2022 13:00").getTime();
// let fifaDate = new Date("Feb 04, 2023 13:00").getTime();
let fifaDate = ''
// let fifaDate = new Date("March 25, 2023 19:00").getTime();
// fifaDate = new Date("April 09, 2023 12:00").getTime();
fifaDate = new Date("April 22, 2023 12:00").getTime();



let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = fifaDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    if(distance <0){
let cd = document.querySelector('.countDown')
let heading = document.querySelector('.countDown-heading').classList.add("hide");
cd.innerHTML = `<p class='fifa-time'> Its FIFA TIME!</p>`


    }
}, 1000);

