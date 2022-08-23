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