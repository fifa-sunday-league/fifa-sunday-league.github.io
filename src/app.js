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
fifaDate = new Date("April 29, 2023 12:00").getTime();

const drawDate = new Date("April 22, 2023 18:15").getTime();
console.log(drawDate)
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = fifaDate - now;
// console.log(now)
// console.log(drawDate)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
if(Number(now) >= Number(drawDate)){
console.log(" BOOOOOOOOOOM")
let players = ['HighButWinner', 'Ball', 'RU', 'Champ',''];


let newPlayers = []
let teamNumber = 1;
//


for (let index = 1; index <= 4; index++) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)]
    players = players.filter((x) => {
        return x !== randomPlayer
    })
    newPlayers.push(randomPlayer)
    //   console.log(index,' player is :',randomPlayer)

}
console.log('Teams')

let startNumber= 0;
const wrapper = document.querySelector('.team-draws-wrapper')

for (let index = 0; index < newPlayers.length; index += 2) {

const startTeams = wrapper.querySelectorAll('.player-profile')

let imgs =startTeams[startNumber].querySelectorAll('.player-stats-img')
imgs[0].src =`/img/players/${newPlayers[index]}.jpg`
// startTeams[startNumber].querySelectorAll('.player-stats-img')[0].src =`/img/players/${newPlayers[index]}.jpg`

imgs[1].src=`/img/players/${newPlayers[index + 1 ]}.jpg`
// startTeams[startNumber].querySelectorAll('.player-stats-img')[1].src=`/img/players/${newPlayers[index + 1 ]}.jpg`

startNumber++;
console.log(' INCREMENTED',startNumber)

    console.log('index',index)
    console.log(teamNumber, 'is', newPlayers[index], '&', newPlayers[index + 1])
  
    teamNumber++;
}
}



    if(distance <0){
let cd = document.querySelector('.countDown')
let heading = document.querySelector('.countDown-heading').classList.add("hide");
cd.innerHTML = `<p class='fifa-time'> Its FIFA TIME!</p>`


    }
}, 1000);

let teamDraws = new Date("April 20, 2023 14:30").getTime();
let y = setInterval(function () {
    let now = new Date().getTime();
    let distance = teamDraws - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('daysPickUp').innerHTML = days;
    document.getElementById('hoursPickUp').innerHTML = hours;
    document.getElementById('minutesPickUp').innerHTML = minutes;
    document.getElementById('secondsPickUp').innerHTML = seconds;
    if(distance <0){
let cd = document.querySelector('.countDownPickUp')
let heading = document.querySelector('.countDown-heading').classList.add("hide");
cd.innerHTML = `<p class='fifa-time'> First match is:</p>`
let eventOpeningWrapper = document.querySelector('.team-draws-wrapper').style.display='flex'
let players = ['HighButWinner', 'Ball', 'RU', 'Champ','Gudiominator'];


let newPlayers = []
let teamNumber = 1;
//


// for (let index = 1; index <= 4; index++) {
//     let randomPlayer = players[Math.floor(Math.random() * players.length)]
//     players = players.filter((x) => {
//         return x !== randomPlayer
//     })
//     newPlayers.push(randomPlayer)


// }
// console.log('Teams')

// let startNumber= 0;
// const wrapper = document.querySelector('.team-draws-wrapper')

// for (let index = 0; index < newPlayers.length; index += 2) {

// const startTeams = wrapper.querySelectorAll('.player-profile')

// let imgs =startTeams[startNumber].querySelectorAll('.player-stats-img')
// imgs[0].src =`/img/players/${newPlayers[index]}.jpg`

// imgs[1].src=`/img/players/${newPlayers[index + 1 ]}.jpg`

// startNumber++;
// console.log(' INCREMENTED',startNumber)

//     console.log('index',index)
//     console.log(teamNumber, 'is', newPlayers[index], '&', newPlayers[index + 1])
  
//     teamNumber++;
// }
    }
}, 1000);

