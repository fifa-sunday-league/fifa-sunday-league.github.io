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

import {
    calculate,
    calculateWinDrawLose
} from "../utils/calculator.js";

let fifaPlayers = {
    mK: {
        fifaRecord: ['D', 'L', 'W', 'W', 'D', 'L', 'W', 'L', 'L', 'L', 'L', 'L', 'L', 'L',
            //'W','W','W','D','L','W','W'
            'W', 'W', 'W', 'D', 'L', 'W', 'W', 'L', 'L', 'L', 'W', 'L', 'D', 'L', 'L'
        ],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    gB: {
        fifaRecord: ['D', 'W', 'L', 'L', 'D', 'W', 'L', 'W', 'L', 'L', 'L', 'L', 'W', 'W',
            'L', 'D', 'L', 'L', 'L', 'L', 'L', 'D', 'D', 'W', 'W', 'L', 'W',
            'L', 'D', 'L', 'D', 'L', 'W', 'L', 'L', 'D', 'W', 'W', 'W',
            // L D L D L - W L L - D W W W 09.04
            // L  W W W  L W L L 22.04
            'L', 'W', 'W', 'W', 'L', 'W', 'L', 'L'
        ],
        attendedEventsDates: ["17.03.23"],
        wins: 0,
        draws: 0,
        lose: 0
    },
    iB: {
        fifaRecord: ['D', 'W', 'L', 'L', 'D', 'L', 'W', 'L', 'W', 'W', 'W', 'W', 'W', 'W',
            'W', 'D', 'W', 'W', 'L', 'L', 'L', 'D', 'D', 'L', 'L', 'W', 'L',
            'W', 'W', 'D', 'W', 'L', 'L', 'L', 'W', 'L', 'D', 'W', 'W',
            // W W D W -       L L L W -             L D W W 09.04
            // W L L D W L L    22.04
            'W', 'L', 'L', 'D', 'W', 'L', 'L', 'L', 'L', 'L', 'W', 'W', 'D', 'W', 'W', 'L', 'L', 'L', 'W', 'D', 'W',
            // W L L D  L L L D   L L D L 29.04.23
            'W', 'L', 'L', 'D', 'L', 'L', 'L', 'D', 'L', 'L', 'D', 'L'
        ],
        attendedEventsDates: ["17.03.23", '25.03.23', ],
        wins: 0,
        draws: 0,
        lose: 0
    },
    bN: {
        fifaRecord: ['D', 'L', 'W', 'W', 'D', 'W', 'L', 'W', 'W', 'W', 'W', 'W', 'L', 'L',
            'W', 'D', 'W', 'W', 'W', 'W', 'W', 'D', 'D', 'W', 'W', 'L', 'W',
            'W', 'W', 'D', 'D', 'W', 'W', 'W', 'W', 'W', 'D', 'L', 'W',
            // W W D  -     D  W  W      W  -     W W D L     - W 09.04
            // L L L D W W W (w 13 / d 3 / L 5)
            'L', 'L', 'L', 'D', 'W', 'W', 'W', 'W', 'W', 'W', 'L', 'W', 'D', 'W', 'W', 'W', 'W', 'W', 'L', 'D', 'W',
            //29.04.23
            'W', 'L', 'L', 'D', 'W', 'W', 'W', 'D', 'W', 'W', 'D', 'W'
        ],
        attendedEventsDates: ["17.03.23", '25.03.23'],
        wins: 0,
        draws: 0,
        lose: 0

    },
    vP: {
        fifaRecord: ['L', 'D', 'L', 'L', 'W', 'W', 'W', 'D', 'D', 'L', 'L', 'W', 'L',
            'L', 'D', 'L', 'D', 'L', 'L', 'W', 'W', 'W', 'D', 'L', 'L',
            // L - D L D - L L W W W D - L L 09.04
            //29.04.23 
            'L', 'W', 'W', 'D', 'W', 'W', 'W', 'D', 'L', 'L', 'D', 'L'
        ],
        attendedEventsDates: ['25.03.23'],
        wins: 0,
        draws: 0,
        lose: 0
    },
    dM: {
        fifaRecord: [
            'L', 'L', 'W', 'D', 'W', 'W', 'L', 'L', 'L', 'L', 'L', 'L',
            // L L - W D W W - L L L - L L L 09.04
            'L', 'L', 'L', 'L', 'L', 'W', 'D', 'L'
        ],
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
    },
    dD: {
        fifaRecord: [
            'W', 'L', 'L', 'D', 'L', 'W', 'L', 'W', 'W', 'W', 'L', 'L', 'D', 'W', 'W', 'W', 'L', 'D', 'L',
            //29.04.23
            'L', 'W', 'W', 'D', 'L', 'L', 'L', 'D', 'W', 'W', 'D', 'W'
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    }

}
let fifaTeams = {
    bNiB: {
        fifaRecord: ['W', 'W', 'W', 'W',
            'W', 'D', 'W', 'W',
            'W', 'W', 'D',
            'W', 'W', 'W', 'W', 'W', 'D', 'D', 'D', 'L',
            // bI W W D 09.04
            //29.04.23
            'W', 'L', 'L', 'D',
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    bNmK: {
        fifaRecord: ['D', 'L', 'W', 'W', 'L', 'L',
            'W', 'W'
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    bNgB: {
        fifaRecord: ['D', 'W', 'L', 'W',
            'D', 'W', 'W', 'L', 'W', 'W', 'W',
            'L'

            //bG W W 09.04
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    //new team
    bNdD: {
        fifaRecord: ['W', 'W', 'W', 'W', 'W', 'W', 'L', 'L', 'L',

            //bG W W 09.04
            //29.04
            'W', 'W', 'D','W'
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    bNdM: {
        fifaRecord: [
            'D', 'W', 'W', 'L',
            // bD D W W L
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },


    mKgB: {
        fifaRecord: ['L', 'L', 'L', 'L', 'W', 'W', 'W'],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    mKiB: {

        fifaRecord: ['D', 'L', 'W', 'L',
            'L', 'L', 'L', 'L', 'W'
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    //new
    mKdD: {

        fifaRecord: ['D', 'D', 'L'],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    mKdM: {

        fifaRecord: ['L', 'L'],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },

    iBgB: {
        fifaRecord: ['D', 'W', 'L', 'L', 'W', 'W',
            'L', 'L', 'L', 'D',
            'L', 'D', 'W', 'W',
            'L',
            //L D W W 09.04
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    // TO DO Add...
    gBvP: {
        fifaRecord: ['L', 'D', 'L', 'L',
            'D', 'L', 'D'
            // vG - D L D 09.04
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    bNvP: {
        fifaRecord: ['W', 'W', 'W', 'D',
            'W', 'W', 'D',
            //bV W W D 09.04
            //29.04.23
            'W', 'W', 'W', 'D'
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    iBvP: {
        fifaRecord: ['D', 'L', 'L', 'W', 'L',
            'L', 'L', 'W',
            // iV - L L W 09.04
            //29.04.23
            'L','L','D','L'

        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    //new teams
    iBdM: {
        fifaRecord: [
            'W', 'L',
            'W', 'L', 'L', 'L'

            // dI W L 09.04
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    iBdD: {
        fifaRecord: [
            'W', 'L',
            //29.04.23
            'L', 'L', 'L', 'D'


            // dI W L 09.04
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    vPdM: {
        fifaRecord: [
            'L', 'L', 'L'
            // vD L L L 09.04
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    gBdM: {
        fifaRecord: [
            'L', 'L', 'L'
            // gD L L L 09.04
        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    gBdD: {
        fifaRecord: [
            'L', 'L', 'W'

        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },
    dDdM: {
        fifaRecord: [
            'L', 'D'

        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },

    vPdD: {
        fifaRecord: [
            'L','W','W' ,'D'

        ],
        attendedEventsDates: [],
        wins: 0,
        draws: 0,
        lose: 0
    },


}
// let borkoId = 'bN'
// let ivanId = 'iB'
// let geogiId = 'gB'
// let miroId = 'mK'
// let denisId = 'dM'
// let venkoId = 'vP'
// let rumbaId = 'rR'
// 'gBvP'
let playersAbbreviation = ['bN', 'iB', 'gB', 'mK', 'dM', 'vP', 'rR', 'dD'];
let teamsAbbreviation = ['bNmK', 'bNgB', 'bNiB', 'mKgB', 'mKiB', 'iBgB', 'bNvP', 'gBvP', 'iBvP', 'gBdM', 'bNdM', 'iBdM', 'vPdM',
    'bNdD', 'gBdD', 'mKdD', 'mKdM', 'dDdM', 'iBdD','vPdD'
];
// old working calc
// for (const player in fifaPlayers) {
//     console.log('Current player is  - >', player)
//     let currentPlayerWins = fifaPlayers[player].fifaRecord.filter(x => x.includes('W'));
//     fifaPlayers[player].wins = currentPlayerWins.length;
//     let currentPlayerDraws = fifaPlayers[player].fifaRecord.filter(x => x.includes('D'));
//     fifaPlayers[player].draws = currentPlayerDraws.length;

//     let currentPlayerLose = fifaPlayers[player].fifaRecord.filter(x => x.includes('L'));
//     fifaPlayers[player].lose = currentPlayerLose.length;
//     fifaPlayers[player].attendedEvents = fifaPlayers[player].attendedEventsDates.length;
//     fifaPlayers[player].played = fifaPlayers[player].fifaRecord.length;

// }
// console.log(fifaPlayers.bN)
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


calculateWinDrawLose(fifaPlayers)
calculateWinDrawLose(fifaTeams)

playersAbbreviation.forEach(player => {
    calculate(fifaPlayers, player)
});
// calculate(fifaTeams,'bNiB')
// console.log(fifaTeams)
// console.log(teamsAbbreviation)
teamsAbbreviation.forEach(team => {
    calculate(fifaTeams, team)
    console.log('team - >', team)

});

// calculate
// calculate(fifaPlayers,borkoId)
// calculate(ivanId)
// calculate(geogiId)
// calculate(miroId)
// calculate(denisId)
// calculate(venkoId)
// calculate(rumbaId)
// calculate(rumbaId)


export {
    fifaPlayers as fifaPlayers
}

// 'D', 'L', 'W', 'L'
// 'W', 'W', 'W', 'W'







// function calculate(id){
//     let playerName = `${id}Stats`
//     playerName = document.querySelector(`#${id}`)

//     playerName.querySelector('.player-played').textContent = objectForCalc[id].played;

//     if (objectForCalc[id].wins < 10) {
//         playerName.querySelector('.player-wins').textContent = ' ' + objectForCalc[id].wins;

//     }
//     else {
//         playerName.querySelector('.player-wins').textContent = objectForCalc[id].wins;
//     }

//     if (objectForCalc[id].draws < 10) {
//         playerName.querySelector('.player-draws').textContent = ' ' + objectForCalc[id].draws;

//     }
//     else {
//         playerName.querySelector('.player-draws').textContent = objectForCalc[id].draws;
//     }


//     if(objectForCalc[id].lose <10){
//         playerName.querySelector('.player-lose').textContent = ' ' + objectForCalc[id].lose;
//     }
//     else{
//         playerName.querySelector('.player-lose').textContent = objectForCalc[id].lose;
//     }
// }



// function calculateWinDrawLose(objectForCalc){
//     for (const record in objectForCalc) {
//         console.log('Current player is  - >', record)
//         let currentPlayerWins = objectForCalc[record].fifaRecord.filter(x => x.includes('W'));
//         objectForCalc[record].wins = currentPlayerWins.length;
//         let currentPlayerDraws = objectForCalc[record].fifaRecord.filter(x => x.includes('D'));
//         objectForCalc[record].draws = currentPlayerDraws.length;

//         let currentPlayerLose = objectForCalc[record].fifaRecord.filter(x => x.includes('L'));
//         objectForCalc[record].lose = currentPlayerLose.length;
//         objectForCalc[record].attendedEvents = objectForCalc[record].attendedEventsDates.length;
//         objectForCalc[record].played = objectForCalc[record].fifaRecord.length;

//     }
// }