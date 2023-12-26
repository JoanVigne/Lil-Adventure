function bubble(id, message, bubCol, bubRow) {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.innerHTML = message;
  let whoIsTalking = document.getElementById(id);
  let column = Number(whoIsTalking.style.gridColumnStart);
  let row = Number(whoIsTalking.style.gridRowStart);

  let resultBubbleCol = column + bubCol;
  let resultBubbleRow = row + bubRow;
  // savoir si la bulle n'est pas hors ecran
  if (resultBubbleCol === 1) {
    resultBubbleCol = 3;
  }
  if (resultBubbleCol === 7) {
    resultBubbleCol = 5;
  }
  if (resultBubbleRow === 1) {
    resultBubbleRow = 3;
  }
  if (resultBubbleRow === 11) {
    resultBubbleRow = 9;
  }
  bubble.style.gridColumnStart = resultBubbleCol;
  bubble.style.gridRowStart = resultBubbleRow;

  container.append(bubble);
  setTimeout(function () {
    deletBubble();
  }, 1100);
  function deletBubble() {
    const allTheBubble = document.getElementsByClassName("bubble");
    allTheBubble[0]?.parentNode.removeChild(bubble);
  }
}
function homeMadeAlert(title, message) {
  let alertBox = document.createElement("div");
  alertBox.setAttribute("id", "alertBox");
  alertBox.innerHTML = `<h3>${title}</h3><br>
                                <p>${message}</p><br>
                                <input type="button" value="Okay" onclick="closeHomeMadeAlert()">`;
  setTimeout(() => {
    container.append(alertBox);
    focusThisInput("alertBox");
  }, 100);
}
function closeHomeMadeAlert() {
  let alertBoxToClose = document.getElementById("alertBox");
  alertBoxToClose.remove();
}
// THE SCENARIO MESSAGES
let indexOfVillageCenter = 0;
function theVillageCenterMessage() {
  if (indexOfVillageCenter > 0) {
    return;
  }
  homeMadeAlert(
    "Greatings people!",
    "We all noticed what happend around, burnt houses, and dead lands. I invite everyone who can to investigate about it. Be rewarded for any usefull informations ! "
  );
  indexOfVillageCenter++;
}

let indexArmyRoadBlock = 0;
function theArmyRoadBlockMessage() {
  if (indexArmyRoadBlock === 0) {
    // Afficher le premier message si c'est la première fois
    homeMadeAlert(
      "Halt civilian !",
      "This path is closed by order of General Edmund. Back off. <br>[A soldier pushes you]"
    );
  } else {
    // Afficher le deuxième message pour les appels suivants
    homeMadeAlert(
      "Halt again!",
      "You've been warned. This road is off-limits. <br>[The soldier looks annoyed]"
    );
  }
  indexArmyRoadBlock++;
}
function focusThisInput(indexOrContainer) {
  const levelUpButton = document.querySelector(".levelUpButton");
  if (levelUpButton) {
    levelUpButton.focus();
    return;
  }
  if (indexOrContainer === "alertBox") {
    const alertButton = document.querySelector(
      "#alertBox input[type='button']"
    );
    alertButton?.focus();
    return;
  }
  const promptboxON = document.querySelector("#promptBox");
  if (promptboxON) {
    promptboxON.querySelector('input[type="button"]').focus();
    return;
  }
  const inputButtons = document.querySelectorAll('input[type="button"]');
  if (typeof indexOrContainer === "number") {
    indexOrContainer = indexOrContainer.toString();
  }
  if (inputButtons.length >= 0) {
    inputButtons[indexOrContainer].focus();
    inputButtons[indexOrContainer].classList.add("focusWithArrow");
  }
}
function choice(
  message,
  valueFirstButton,
  functionFirstButton,
  valueSecondButton,
  functionSecondButton
) {
  let promptBox = document.createElement("div");
  promptBox.setAttribute("id", "promptBox");
  promptBox.innerHTML = `<h4>${message}</h4>`;
  let firstButton = document.createElement("input");
  firstButton.setAttribute("type", "button");
  firstButton.setAttribute("value", valueFirstButton);
  firstButton.setAttribute("id", valueFirstButton);
  firstButton.addEventListener("click", functionFirstButton);

  let secondButton = document.createElement("input");
  secondButton.setAttribute("type", "button");
  secondButton.setAttribute("value", valueSecondButton);
  secondButton.setAttribute("id", valueSecondButton);
  secondButton.addEventListener("click", functionSecondButton);

  promptBox.append(firstButton, secondButton);
  container.append(promptBox);
}

function helpMenuButtons(
  message,
  valueFirstButton,
  functionFirstButton,
  valueSecondButton,
  functionSecondButton
) {
  let promptBox = document.createElement("div");
  promptBox.setAttribute("id", "promptBox");
  promptBox.innerHTML = `<h4>${message}</h4>`;
  let firstButton = document.createElement("input");
  firstButton.setAttribute("type", "button");
  firstButton.setAttribute("value", valueFirstButton);
  firstButton.setAttribute("id", valueFirstButton);
  firstButton.addEventListener("click", functionFirstButton);

  let secondButton = document.createElement("input");
  secondButton.setAttribute("type", "button");
  secondButton.setAttribute("value", valueSecondButton);
  secondButton.setAttribute("id", valueSecondButton);
  secondButton.addEventListener("click", functionSecondButton);

  // to close it
  let closeButton = document.createElement("input");
  closeButton.setAttribute("type", "button");
  closeButton.setAttribute("value", "everything is okay");
  closeButton.addEventListener("click", closePromptBox);

  promptBox.append(firstButton, secondButton, closeButton);
  container.append(promptBox);
}

function confirmMessage(message, valueOfFirstButton, functionFirstButton) {
  let promptBox = document.createElement("div");
  promptBox.setAttribute("id", "promptBox");
  promptBox.innerHTML = `<h4>${message}</h4>`;

  let firstButton = document.createElement("input");
  firstButton.setAttribute("type", "button");
  firstButton.setAttribute("value", valueOfFirstButton);
  firstButton.setAttribute("id", valueOfFirstButton);
  firstButton.addEventListener("click", functionFirstButton);
  let secondButton = document.createElement("input");
  secondButton.setAttribute("type", "button");
  secondButton.setAttribute("value", "Cancel");
  secondButton.setAttribute("id", "Cancel");
  secondButton.addEventListener("click", closePromptBox);

  promptBox.append(firstButton, secondButton);
  container.append(promptBox);
  focusThisInput(0);
}
function promptBox(innerHtml) {
  let promptBox = document.createElement("div");
  promptBox.setAttribute("id", "promptBox");
  promptBox.innerHTML = innerHtml;

  container.append(promptBox);
  focusThisInput(0);
}

function closePromptBox() {
  let promptBox = document.getElementById("promptBox");
  promptBox && promptBox.remove();
}
