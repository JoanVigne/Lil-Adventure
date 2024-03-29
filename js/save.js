let saveLogo = document.getElementById("save");
saveLogo.addEventListener("click", saveGamePrompt);

function saveGamePrompt() {
  // if not possible to save :
  let itsAFight = document.getElementById("enemyContainer");
  if (itsAFight) {
    homeMadeAlert(
      "Cannot save here",
      "You cannot save during a fight session, finish it before saving..."
    );
    return;
  }
  const isMenu = document.querySelector(".menuImg");
  if (isMenu) {
    homeMadeAlert("Cannot save here", "You need to be in a game to save");
    return;
  }
  // IF YOU CAN SAVE :
  promptBox(`<p>Do you wanna save this game? It is gonna be saved in your browser.</p>
  <input type="text" placeholder="Name of your save" id="entry" />
  <input type="button" value="SAVE" onclick="saving(document.getElementById('entry').value)" />
 `);
  let saves = localStorage.getItem("saves");
  if (saves == null) {
    let arrayOfSaves = [];
    localStorage.setItem("saves", JSON.stringify(arrayOfSaves));
  }
}

function saving(name) {
  const saves = JSON.parse(localStorage.getItem("saves")) || [];
  const location = titleH1[0].innerHTML;
  const stuff = gameStuffData;
  const thePosition = player.style.gridArea;
  const dateOfSaving = getFormattedDate();

  const existingSaveIndex = saves.findIndex((save) => save[0] === name);
  if (existingSaveIndex !== -1) {
    saves.splice(existingSaveIndex, 1);
  }
  if (saves.length > 10) {
    saves.pop();
  }
  const thisSave = [
    name,
    location,
    JSON.stringify(stuff),
    dateOfSaving,
    thePosition,
    JSON.stringify(enemyArray),
  ];
  saves.unshift(thisSave);
  localStorage.setItem("saves", JSON.stringify(saves));

  bubble("player", "game saved!", 0, -1);

  closePromptBox();
}

function getFormattedDate() {
  const date = new Date();
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} </br> ${date.getHours()}:${date.getMinutes()}`;
}
