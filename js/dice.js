function weaponChoseDices() {
  switch (gameStuffData.weapon) {
    case "bambou":
      choseYourDice(1, 2, null, null);
      break;
    case "rolling-pin":
      choseYourDice(2, 3, 4, null);
      break;
    case "hammer-small":
      choseYourDice(2, 4, 6, null);
      break;
    case "dark-small-sword":
      choseYourDice(2, 4, 6, 8);
      break;
    case "white-sword":
      choseYourDice(2, 4, 6, 10);
      break;
    case "small-Axe":
      choseYourDice(3, 4, 5, 6);
      break;
    default:
      choseYourDice(2, 4, 6, 8);
      console.log("default choseYourDice in weaponChoseDices");
      break;
  }
  focusThisInput(1);
}

function choseYourDice(first, second, third, fourth) {
  removeThisClass("choseYourDice");
  removeThisClass("diceContainers");
  buttons(
    `diceOf${first}`,
    "choseYourDice",
    first,
    `theChosenDice(${first})`,
    actionContainer
  );
  buttons(
    `diceOf${second}`,
    "choseYourDice",
    second,
    `theChosenDice(${second})`,
    actionContainer
  );
  buttons(
    `diceOf${third}`,
    "choseYourDice",
    third,
    `theChosenDice(${third})`,
    actionContainer
  );
  buttons(
    `diceOf${fourth}`,
    "choseYourDice",
    fourth,
    `theChosenDice(${fourth})`,
    actionContainer
  );
}
function theChosenDice(valueOfTheDice) {
  switch (valueOfTheDice) {
    case 1:
      appearTheDice(2, 95);
      break;
    case 2:
      appearTheDice(3, 90);
      break;
    case 3:
      appearTheDice(4, 85);
      break;
    case 4:
      appearTheDice(5, 80);
      break;
    case 5:
      appearTheDice(6, 75);
      break;
    case 6:
      appearTheDice(7, 70);
      break;
    case 7:
      appearTheDice(8, 65);
      break;
    case 8:
      appearTheDice(9, 60);
      break;
    case 9:
      appearTheDice(10, 55);
      break;
    case 10:
      appearTheDice(11, 50);
      break;
    case 12:
      appearTheDice(13, 40);
      break;
    case 14:
      appearTheDice(15, 35);
      break;
    default:
      break;
  }
}
function appearTheDice(dammageValue, oddValue) {
  removeThisClass("choseYourDice");
  buttons(
    "changeDice",
    "choseYourDice",
    `change dice`,
    "weaponChoseDices()",
    actionContainer
  );
  //dice
  let dice = document.createElement("input");
  dice.setAttribute("type", "button");
  dice.setAttribute("class", "dice");
  dice.addEventListener("click", function () {
    roll(dammageValue, oddValue);
  });
  // dammage
  let dammageDiceContainer = document.createElement("div");
  dammageDiceContainer.setAttribute("class", "diceContainers");
  dammageDiceContainer.setAttribute("id", "dammageContainer");
  let dammageNumberContainer = document.createElement("div");
  dammageNumberContainer.setAttribute("id", "dammageNumberContainer");
  dammageNumberContainer.setAttribute("class", "numberContainer");
  let possibleDammage = dammageValue - 1;
  dammageDiceContainer.append(
    `dammage from 1 to ${possibleDammage}`,
    dammageNumberContainer
  );
  dammageDiceContainer.append(dice);
  actionContainer.append(dammageDiceContainer);
  // odds
  let oddDiceContainer = document.createElement("div");
  oddDiceContainer.setAttribute("class", "diceContainers");
  oddDiceContainer.setAttribute("id", "oddContainer");
  let oddNumberContainer = document.createElement("div");
  oddNumberContainer.setAttribute("id", "oddNumberContainer");
  oddNumberContainer.setAttribute("class", "numberContainer");

  oddDiceContainer.append(
    `Between 1 to ${oddValue} to success`,
    oddNumberContainer
  );
  actionContainer.append(oddDiceContainer);
  focusThisInput(1);
}
function roll(dammageValue, oddValue) {
  removeThisClass("choseYourDice");
  removeThisClass("dice");
  /* DAMMAGE */
  let dammageNumberContainer = document.getElementById(
    "dammageNumberContainer"
  );
  let resultDammage = Math.floor(Math.random() * (dammageValue - 1)) + 1;
  animateValue(resultDammage, dammageNumberContainer);
  /* ODDS */
  let oddNumberContainer = document.getElementById("oddNumberContainer");
  let resultOdd = Math.floor(Math.random() * (100 - 1)) + 1;
  animateValue(resultOdd, oddNumberContainer);
  /* RESULTS functions IN FIGHT.JS*/
  if (resultOdd < oddValue) {
    setTimeout(() => {
      youTouch(resultDammage);
      console.log("resultDammage in roll():", resultDammage);
    }, 500);
  } else {
    setTimeout(() => {
      youMiss(resultOdd);
    }, 500);
  }
  function animateValue(result, resultContainer) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / 500, 1);
      resultContainer.innerHTML = Math.floor(progress * (result - 0) + 0);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
