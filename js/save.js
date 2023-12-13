let saveLogo = document.getElementById("save");
saveLogo.addEventListener("click", saveGamePrompt);

function saveGamePrompt() {
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
  homeMadePrompt(
    "<p>Do you wanna save this game? It is gonna be saved in your browser.</p>",
    "SAVE",
    saveFunction,
    "Name of your save"
  );
  let saves = localStorage.getItem("saves");
  if (saves == null) {
    let arrayOfSaves = [];
    localStorage.setItem("saves", JSON.stringify(arrayOfSaves));
  }
}
function saveFunction() {
  let saves = JSON.parse(localStorage.getItem("saves")) || [];

  let location = titleH1[0].innerHTML;
  let stuff = localStorage.getItem("gameStuff");
  let thePosition = player.style.gridArea;
  let nameOfTheSaved = document.getElementById("entry").value;
  let date = new Date();
  let dateOfSaving = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

  let thisSave = [nameOfTheSaved, location, stuff, dateOfSaving, thePosition];

  if (nameOfTheSaved === "auto-save") {
    // delete the previous auto-save
    const autoSaveIndex = saves.findIndex((save) => save[0] === "auto-save");
    if (autoSaveIndex !== -1) {
      saves.splice(autoSaveIndex, 1);
    }
  }
  saves.unshift(thisSave);
  if (saves.length > 10) {
    saves.pop();
  }

  localStorage.setItem("saves", JSON.stringify(saves));

  bubble("player", "game saved!", 0, -1);
  closePromptBox();
}

function autoSave() {
  let saves = JSON.parse(localStorage.getItem("saves"));
  let location = titleH1[0].innerHTML;
  let stuff = localStorage.getItem("gameStuff");
  let thePosition = player.style.gridArea;
  let nameOfTheSaved = "auto-save";
  let date = new Date();
  let dateOfSaving = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

  let thisSave = [nameOfTheSaved, location, stuff, dateOfSaving, thePosition];
  const autoSaveIndex = saves.findIndex((save) => save[0] === "auto-save");
  if (autoSaveIndex !== -1) {
    saves.splice(autoSaveIndex, 1);
  }
  saves.unshift(thisSave);
  localStorage.setItem("saves", JSON.stringify(saves));
  bubble("player", "game auto-saved!", 0, -1);
}
