const playersArray = [];

function display(displayPlayers){
  console.log(displayPlayers);
  const selectedPlayers = document.getElementById('selected-players');
  
  const playersNumber = playersArray.length;

  if(playersNumber < 6){
    selectedPlayers.innerHTML = '';
    for(i = 0; i < displayPlayers.length; i++){
      const selectedPlayerName = displayPlayers[i].playerName;
        
      const liTag = document.createElement('li');
      liTag.innerHTML =`
        ${selectedPlayerName}
      `
      // const numberOfPlayers = selectedPlayers.childElementCount;
      
      selectedPlayers.appendChild(liTag);
    }
  }
  else {
    alert('You can not add more than 5 players.')
  }

  
}

function addToSelected(element){
  const playerName = element.parentNode.children[1].innerText;
  
  const playerObject = {
    playerName: playerName
  }

  playersArray.push(playerObject);
  const playersNumber = playersArray.length;

  display(playersArray);
}