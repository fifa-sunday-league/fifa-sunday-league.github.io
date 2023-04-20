const draws = false;
 function calculate(objectForCalc,id){
    let playerName = `${id}Stats`
    playerName = document.querySelector(`#${id}`)
console.log(id)
    playerName.querySelector('.player-played').textContent = objectForCalc[id].played;
    playerName.querySelector('.player-pts').textContent = objectForCalc[id].pts;

   
    if (objectForCalc[id].wins < 10) {
        playerName.querySelector('.player-wins').textContent =  (objectForCalc[id].wins).toString() + ' ' ;
    
    }
    else {
        playerName.querySelector('.player-wins').textContent = objectForCalc[id].wins;
    }
    
    if (objectForCalc[id].draws < 10) {
        playerName.querySelector('.player-draws').textContent = (objectForCalc[id].draws).toString()+ ' ' ;
    
    }
    else {
        playerName.querySelector('.player-draws').textContent = objectForCalc[id].draws;
    }
    
    
    if(objectForCalc[id].lose <10){
        playerName.querySelector('.player-lose').textContent =(objectForCalc[id].lose).toString()+ ' ' ;
    }
    else{
        playerName.querySelector('.player-lose').textContent = objectForCalc[id].lose;
    }
}




function calculateWinDrawLose(objectForCalc){
    for (const record in objectForCalc) {
        console.log('Current player is  - >', record)
        let currentPlayerWins = objectForCalc[record].fifaRecord.filter(x => x.includes('W'));
        objectForCalc[record].wins = currentPlayerWins.length;
      
        let currentPlayerDraws = objectForCalc[record].fifaRecord.filter(x => x.includes('D'));
        objectForCalc[record].draws = currentPlayerDraws.length;
    
        let currentPlayerLose = objectForCalc[record].fifaRecord.filter(x => x.includes('L'));
        objectForCalc[record].lose = currentPlayerLose.length;
        objectForCalc[record].attendedEvents = objectForCalc[record].attendedEventsDates.length;
        objectForCalc[record].played = objectForCalc[record].fifaRecord.length;

        objectForCalc[record].pts =(currentPlayerWins.length * 3) + currentPlayerDraws.length;
    
    }
    console.log('results - >', objectForCalc)
}


export{calculate,calculateWinDrawLose,draws}