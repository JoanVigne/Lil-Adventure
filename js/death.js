function playerDeath() {
  homeMadeAlert("You're dead...", "I hope you saved before !");
  directionDisappear();
  deletAllObstacle();
  console.log(player);
  setTimeout(() => {
    location.reload();
  }, 5000);
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
