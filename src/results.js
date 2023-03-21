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
    mK: {
        fifaRecord: ['D', 'L', 'W', 'W', 'D', 'L', 'W', 'L', 'L', 'L', 'L', 'L', 'L'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    gB: {
        fifaRecord: ['D', 'W', 'L', 'L', 'D', 'W', 'L', 'W', 'L', 'L', 'L', 'L', 'W'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    iB: {
        fifaRecord: ['D', 'W', 'L', 'L', 'D', 'L', 'W', 'L', 'W', 'W', 'W', 'W', 'W'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    bN: {
        fifaRecord: ['D', 'L', 'W', 'W', 'D', 'W', 'L', 'W', 'W', 'W', 'W', 'W', 'L'],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0

    },
    vP: {
        fifaRecord: [],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    dM: {
        fifaRecord: [],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    rR: {
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
// let playerName = document.querySelector('#bN')

// playerName.querySelector('.player-played').textContent = fifaPlayers[borislavNikolov].played;
// if (fifaPlayers.borislavNikolov.wins < 10) {
//     playerName.querySelector('.player-wins').textContent = ' ' + fifaPlayers.borislavNikolov.wins;

// }
// else {
//     playerName.querySelector('.player-wins').textContent = fifaPlayers.borislavNikolov.wins;
// }

// if (fifaPlayers.borislavNikolov.draws < 10) {
//     playerName.querySelector('.player-draws').textContent = ' ' + fifaPlayers.borislavNikolov.draws;

// }
// else {
//     playerName.querySelector('.player-draws').textContent = fifaPlayers.borislavNikolov.draws;
// }


// if(fifaPlayers.borislavNikolov.lose <10){
//     playerName.querySelector('.player-lose').textContent = ' ' + fifaPlayers.borislavNikolov.lose;
// }
// else{
//     playerName.querySelector('.player-lose').textContent = fifaPlayers.borislavNikolov.lose;
// }
let borkoId = 'bN'
let ivanId = 'iB'
let geogiId = 'gB'
let miroId = 'mK'
let denisId = 'dM'
let venkoId = 'vP'
let rumbaId = 'rR'
calculate(borkoId)
calculate(ivanId)
calculate(geogiId)
calculate(miroId)
calculate(denisId)
calculate(venkoId)
calculate(rumbaId)


export { fifaPlayers }

// 'D', 'L', 'W', 'L'
// 'W', 'W', 'W', 'W'







function calculate(id){
    let playerName = `${id}Stats`
    playerName = document.querySelector(`#${id}`)

    playerName.querySelector('.player-played').textContent = fifaPlayers[id].played;
   
    if (fifaPlayers[id].wins < 10) {
        playerName.querySelector('.player-wins').textContent = ' ' + fifaPlayers[id].wins;
    
    }
    else {
        playerName.querySelector('.player-wins').textContent = fifaPlayers[id].wins;
    }
    
    if (fifaPlayers[id].draws < 10) {
        playerName.querySelector('.player-draws').textContent = ' ' + fifaPlayers[id].draws;
    
    }
    else {
        playerName.querySelector('.player-draws').textContent = fifaPlayers[id].draws;
    }
    
    
    if(fifaPlayers[id].lose <10){
        playerName.querySelector('.player-lose').textContent = ' ' + fifaPlayers[id].lose;
    }
    else{
        playerName.querySelector('.player-lose').textContent = fifaPlayers[id].lose;
    }
}