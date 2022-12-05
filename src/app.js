


// let fifaDate = new Date("Dec 03, 2022 13:00").getTime();
// let fifaDate = new Date("Dec 01, 2022 15:51").getTime();

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

console.log(cd)
    }
}, 1000);
