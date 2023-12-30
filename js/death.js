function playerDeath() {
  homeMadeAlert("You're dead...", "I hope you saved before !");
  setTimeout(() => {
    location.reload();
  }, 5000);
}

function importantEnemyDeath(where) {
  switch (where) {
    case "Tunnel fourth":
      /* localStorage.setItem("spiderQueen", "dead"); */
      enemyArray[1].done = true;
      /*  localStorage.setItem("enemyArray", JSON.stringify(enemyArray)); */
      break;
    case "The north of the graveyard":
      /*       localStorage.setItem("skeleton", "dead"); */
      enemyArray[3].done = true;
      /*  newStuff(
        "dark-small-sword",
        "weapon",
        `You got closer to the sword that the skeleton left. <br>
      While getting your hand clother of it, you feel something strange, It's as if the blade retains a whisper of the fallen warrior's essence. <br>`
      ); */

      break;
    case "The fight arena":
      let whosTurn = localStorage.getItem("whosTurn");
      let thisTurn = parseInt(whosTurn);
      localStorage.setItem("whosTurn", (thisTurn += 1));

      setTimeout(() => {
        orderFightOrcs();
      }, 1500);
      break;
    case "The old castle second":
      break;
    default:
      break;
  }
}
