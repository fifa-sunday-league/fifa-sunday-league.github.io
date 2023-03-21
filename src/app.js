import { fifaPlayers } from "./results.js";




// let fifaDate = new Date("Dec 03, 2022 13:00").getTime();
// let fifaDate = new Date("Feb 04, 2023 13:00").getTime();

let fifaDate = new Date("March 17, 2023 19:00").getTime();

// console.log(fifaPlayers.borislavNikolov.fifaRecord.length,fifaPlayers.borislavNikolov.fifaRecord)
// console.log(fifaPlayers.mirkoKarahihov.fifaRecord.length)
// console.log(fifaPlayers.ivanBalabanov.fifaRecord.length)
// console.log(fifaPlayers.georgiBalabanov.fifaRecord.length)

console.log(fifaPlayers)
// for (const player in fifaPlayers) {
//     console.log('Current player is  - >',player)
//  let currentPlayerWins = fifaPlayers[player].fifaRecord.filter(x => x.includes('W'));
//  let currentPlayerDraws = fifaPlayers[player].fifaRecord.filter(x => x.includes('D'));
//  let currentPlayerLose = fifaPlayers[player].fifaRecord.filter(x => x.includes('L'));


//  console.log('Wins - ',currentPlayerWins)
//  console.log('Draws - ',currentPlayerDraws)
//  console.log('Lose - ',currentPlayerLose)
//  console.log('Total matches - ',fifaPlayers[player].fifaRecord.length)
//  console.log('--------------')
// }

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

