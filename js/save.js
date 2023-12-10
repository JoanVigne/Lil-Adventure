let saveLogo = document.getElementById("save");
saveLogo.addEventListener("click", saveGamePrompt);

function saveGamePrompt() {
  let itsAFight = document.getElementById("enemyContainer");

  if (itsAFight == null) {
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
  } else {
    homeMadeAlert(
      "Cannot save here",
      "You cannot save during a fight session, finish it before saving..."
    );
  }
}
function saveFunction() {
  let saves = JSON.parse(localStorage.getItem("saves"));

  let location = titleH1[0].innerHTML;
  let stuff = localStorage.getItem("gameStuff");
  let thePosition = player.style.gridArea;
  let nameOfTheSaved = document.getElementById("entry").value;
  let date = new Date();
  let dateOfSaving = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

  thisSave = [nameOfTheSaved, location, stuff, dateOfSaving, thePosition];
  if (saves.length >= 7) {
    saves.pop();
    saves.splice(0, 0, thisSave);
  } else {
    saves.splice(0, 0, thisSave);
  }

  localStorage.setItem("saves", JSON.stringify(saves));

  bubble("player", "game saved!", 0, -1);
  closePromptBox();
}
