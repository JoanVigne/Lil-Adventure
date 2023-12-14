// Bubble
function bubble(id, message, bubCol, bubRow) {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.innerHTML = message;
  let whoIsTalking = document.getElementById(id);
  let column = whoIsTalking.style.gridColumnStart;
  let numberColumn = Number(column);
  let row = whoIsTalking.style.gridRowStart;
  let numberRow = Number(row);
  bubble.style.gridColumnStart = numberColumn += bubCol;
  bubble.style.gridRowStart = numberRow += bubRow;
  //
  // pour eviter la bulle hors jeu :
  if (row === "2") {
    bubble.style.gridRowStart = numberRow += 2;
    console.log(bubble.style.gridRowStart);
  }
  if (row === "10") {
    bubble.style.gridRowStart = numberRow += 0;
  }
  if (column === "2") {
    bubble.style.gridColumnStart = numberColumn += 0;
  }
  if (column === "7") {
    bubble.style.gridRowStart = numberRow += 2;
  }

  container.append(bubble);
  setTimeout(function () {
    deletBubble();
  }, 1100);
  function deletBubble() {
    let allTheBubble = document.getElementsByClassName("bubble");
    allTheBubble[0].parentNode.removeChild(bubble);
  }
}

// HOME MADE ALERT FOR SCENARIO MESSAGES
function homeMadeAlert(title, message) {
  let alertBox = document.createElement("div");
  alertBox.setAttribute("id", "alertBox");
  alertBox.innerHTML = `<h3>${title}</h3><br>
                                <p>${message}</p><br>
                                <input type="button" value="Okay" onclick="closeHomeMadeAlert()">`;
  /* container.append(alertBox); */
  setTimeout(() => {
    container.append(alertBox);
  }, 100);
}
function closeHomeMadeAlert() {
  let alertBoxToClose = document.getElementById("alertBox");
  alertBoxToClose.remove();
}

// THE SCENARIO MESSAGES
let indexOfVillageCenter = 0;
function theVillageCenterMessage() {
  if (indexOfVillageCenter === 0) {
    homeMadeAlert(
      "Greatings people!",
      "We all noticed what happend around, burnt houses, and dead lands. I invite everyone who can to investigate about it. Be rewarded for any usefull informations ! "
    );
  } else {
    return;
  }
  indexOfVillageCenter++;
}

let indexArmyRoadBlock = 0;
function theArmyRoadBlockMessage() {
  if (indexArmyRoadBlock === 0) {
    // Afficher le premier message si c'est la première fois
    homeMadeAlert(
      "Halt civilian !",
      "This way is closed, ordered by General Edmund. Back off. <br>[A soldier pushes you]"
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

function homeMadePrompt(
  message,
  valueOfFirstButton,
  functionFirstButton,
  valueOfThePlaceHolder
) {
  let promptBox = document.createElement("div");
  promptBox.setAttribute("id", "promptBox");
  promptBox.innerHTML = `${message}`;

  let entry = document.createElement("input");
  entry.setAttribute("type", "text");
  entry.setAttribute("id", "entry");
  entry.setAttribute("placeholder", valueOfThePlaceHolder);

  let firstButton = document.createElement("input");
  firstButton.setAttribute("type", "button");
  firstButton.setAttribute("value", valueOfFirstButton);
  firstButton.setAttribute("id", valueOfFirstButton);
  firstButton.addEventListener("click", functionFirstButton);
  let secondButton = document.createElement("input");
  secondButton.setAttribute("type", "button");
  secondButton.setAttribute("value", "Cancel");
  secondButton.setAttribute("id", "Cancel");
  secondButton.addEventListener("click", cancelFunction);

  promptBox.append(entry, firstButton, secondButton);
  container.append(promptBox);

  function cancelFunction() {
    promptBox.remove();
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
}
function promptBox(innerHtml) {
  let promptBox = document.createElement("div");
  promptBox.setAttribute("id", "promptBox");
  promptBox.innerHTML = innerHtml;

  container.append(promptBox);
}

function closePromptBox() {
  let promptBox = document.getElementById("promptBox");
  promptBox.remove();
}
