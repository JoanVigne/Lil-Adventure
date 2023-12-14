//
let mainChatContainer = document.createElement("div");
mainChatContainer.setAttribute("id", "mainChatContainer");
/* player */
let playerContainer = document.createElement("div");
playerContainer.setAttribute("id", "playerContainer");
let statPlayerContainer = document.createElement("div");
statPlayerContainer.setAttribute("id", "statPlayerContainer");
let actionContainer = document.createElement("div");
actionContainer.setAttribute("id", "actionContainer");
/* enemy */
let enemyContainer = document.createElement("div");
enemyContainer.setAttribute("id", "enemyContainer");
let statEnemyContainer = document.createElement("div");
statEnemyContainer.setAttribute("id", "statEnemyContainer");
let enemyChatContainer = document.createElement("div");
enemyChatContainer.setAttribute("id", "enemyChatContainer");

const fightContainers = [
  mainChatContainer,
  playerContainer,
  statPlayerContainer,
  actionContainer,
  enemyContainer,
  statEnemyContainer,
  enemyChatContainer,
];

function fightContainer() {
  let positionBeforefight = player.style.gridArea;
  localStorage.setItem("positionBeforefight", positionBeforefight);
  directionDisappear();
  deletAllObstacle();
  deletAllPeople();
  createTheFightContainers();
  player.style.gridArea = 1;
  playerContainer.append(player);
  displayStatsPlayer(statPlayerContainer);
  weaponChoseDices();
  focusFirstInput();
}

function endOfFight() {
  enemyChatContainer.innerHTML = "";
  mainChatContainer.innerHTML = ``;
  deletTheFightContainers();
  let positionBeforefight = localStorage.getItem("positionBeforefight");
  container.append(player);
  player.style.gridArea = positionBeforefight;
  whereAmI();
  appearDirections();
}
function createTheFightContainers() {
  fightContainers.forEach((element) => {
    container.append(element);
  });
}

function deletTheFightContainers() {
  fightContainers.forEach((element) => {
    element.remove();
  });
}
