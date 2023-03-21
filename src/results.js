// let mirkoKarahihov = {
//     fifaRecord:[],
//     attendedEvents:["17.03.23"]
// }
// let georgiBalabanov = {
//     fifaRecord:[],
//     attendedEvents:["17.03.23"]
// }
// let ivanBalabanov = {
//     fifaRecord:[],
//     attendedEvents:["17.03.23"]
// }
// let borislavNikolov = {
//     fifaRecord:[],
//     attendedEvents:["17.03.23"]
// }

let fifaPlayers = {
    mirkoKaramihov: {
        fifaRecord: ['D', 'L', 'W', 'W', 'D', 'L', 'W', 'L', 'L', 'L', 'L', 'L', 'L'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    georgiBalabanov: {
        fifaRecord: ['D', 'W', 'L', 'L', 'D', 'W', 'L', 'W', 'L', 'L', 'L', 'L', 'W'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    ivanBalabanov: {
        fifaRecord: ['D', 'W', 'L', 'L', 'D', 'L', 'W', 'L', 'W', 'W', 'W', 'W', 'W'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    borislavNikolov: {
        fifaRecord: ['D', 'L', 'W', 'W', 'D', 'W', 'L', 'W', 'W', 'W', 'W', 'W', 'L'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0

    },
    venelinPetrov: {
        fifaRecord: [],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    denisMyahov: {
        fifaRecord: [],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    rumenRashev: {
        fifaRecord: [],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    }

}
let fifaCouples = {
    borkoMirko: {},
    borkoJorko: {},
    borkoIvan: {},

    mirkoJorko: {},
    mirkoIvan: {},

    ivanJorko: {},
}
for (const player in fifaPlayers) {
    console.log('Current player is  - >', player)
    let currentPlayerWins = fifaPlayers[player].fifaRecord.filter(x => x.includes('W'));
    fifaPlayers[player].wins = currentPlayerWins.length;
    let currentPlayerDraws = fifaPlayers[player].fifaRecord.filter(x => x.includes('D'));
    fifaPlayers[player].draws = currentPlayerDraws.length;

    let currentPlayerLose = fifaPlayers[player].fifaRecord.filter(x => x.includes('L'));
    fifaPlayers[player].lose = currentPlayerLose.length;
    fifaPlayers[player].attendedEvents = fifaPlayers[player].attendedEventsDates.length;
    fifaPlayers[player].played = fifaPlayers[player].fifaRecord.length;

}
let borkoStats = document.querySelector('#borko')

borkoStats.querySelector('.player-played').textContent = fifaPlayers.borislavNikolov.played;
if (fifaPlayers.borislavNikolov.wins < 10) {
    borkoStats.querySelector('.player-wins').textContent = ' ' + fifaPlayers.borislavNikolov.wins;

}
else {
    borkoStats.querySelector('.player-wins').textContent = fifaPlayers.borislavNikolov.wins;
}

if (fifaPlayers.borislavNikolov.draws < 10) {
    borkoStats.querySelector('.player-draws').textContent = ' ' + fifaPlayers.borislavNikolov.draws;

}
else {
    borkoStats.querySelector('.player-draws').textContent = fifaPlayers.borislavNikolov.draws;
}


if(fifaPlayers.borislavNikolov.lose <10){
    borkoStats.querySelector('.player-lose').textContent = ' ' + fifaPlayers.borislavNikolov.lose;
}
else{
    borkoStats.querySelector('.player-lose').textContent = fifaPlayers.borislavNikolov.lose;
}




export { fifaPlayers }

// 'D', 'L', 'W', 'L'
// 'W', 'W', 'W', 'W'