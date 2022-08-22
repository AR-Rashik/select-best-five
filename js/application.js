const playersArray = [];

// reuseable getInputElementById function.
function getInputElementById(elementId){
  const elementInput = document.getElementById(elementId);
  const elementInputString = elementInput.value;
  const elementInputNumber = parseFloat(elementInputString);

  if(isNaN(elementInputNumber)){
    alert('Please input a number');
  }
  else if(elementInputNumber <= 0 ){
    alert('Please input a positive number');
  }
  else{
    return elementInputNumber;
  }
}

// reuseable setTextElementById function.
function setTextElementById(elementId, value){
  const valueText = document.getElementById(elementId);
  valueText.innerText = value;
}

// reuseable getTextElementById function.
function getTextElementById(elementId){
  const elementValueNumber = document.getElementById(elementId);
  const elementValueString = elementValueNumber.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}


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

  if(playersNumber < 6){
    element.setAttribute('disabled', true);
    element.classList.add('bg-zinc-700');
    element.classList.remove('hover:bg-blue-900');
  }

  display(playersArray);
}

// Budget section
document.getElementById('btn-calculate').addEventListener('click', function(){
  const perPlayerPrice = getInputElementById('per-player-price');
  
  const selectedPlayers = document.getElementById('selected-players');
  const selectedPlayersNumbers = selectedPlayers.children.length;

  const playersPrice = perPlayerPrice * selectedPlayersNumbers;
  setTextElementById('player-expanses', playersPrice);
})

// Total calculation
document.getElementById('btn-calculate-total').addEventListener('click', function(){
  const managerPrice = getInputElementById('manager-price');
  const coachPrice = getInputElementById('coach-price');

  const playersPrice = getTextElementById('player-expanses');

  const totalPrice = playersPrice + managerPrice + coachPrice;
  setTextElementById('total-price', totalPrice);
})