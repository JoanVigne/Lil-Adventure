function playerDeath() {
  homeMadeAlert("You're dead...", "I hope you saved before !");
  directionDisappear();
  deletAllObstacle();
  player.classList.add("death");
  player.style.gridArea = " 8 / 4";
  obstacleCreation1(gameStuffData.weapon, 5, 8);
  obstacleCreation1(gameStuffData.shield, 3, 8);
  gameStuffData.weapon = "";
  gameStuffData.shield = "";
  playerStuff();
  let hat = document.getElementById("hat");
  hat.style.gridColumn = "3 / span 2";
  let top = document.getElementById("top");
  top.style.gridColumn = "1 / span 2";
  top.style.animation = "none";
  /*   setTimeout(() => {
    location.reload();
  }, 5000); */
}

function importantEnemyDeath(where) {
  switch (where) {
    case "The fight arena":
      let whosTurn = localStorage.getItem("whosTurn");
      let thisTurn = parseInt(whosTurn);
      localStorage.setItem("whosTurn", (thisTurn += 1));

      setTimeout(() => {
        orderFightOrcs();
      }, 500);
      break;
    case "The old castle second":
      break;
    default:
      break;
  }
}
