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
      localStorage.setItem("enemyArray", JSON.stringify(enemyArray));
      break;
    case "The north of the graveyard":
      localStorage.setItem("skeleton", "dead");
      choice(
        `<h4>What is this on the floor?</h4>
            You can see the sword of the skeleton, you touch it and feel strange in your body... stronger?
             You stop touching and the blade fades away slowly. <br>
             Quick! if you want this new weapon, it is now or never.`,
        "Take this sword",
        () => {
          modifyWeapon("dark-small-sword");
          addingForce(2);
          closePromptBox();
        },
        "Let it go",
        closePromptBox
      );
      break;
    case "The northen crossroad":
      console.log("against leather");
      localStorage.setItem("leatherGuard", "dead");
      break;
    case "The north of the orc camp":
      localStorage.setItem("northCampOrc", "dead");
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
      let theLostLandScenarioEnd = localStorage.getItem("theLostLandScenario");
      if (theLostLandScenarioEnd == "poisoned") {
        homeMadeAlert(
          "You win",
          "Congrats, you win this game, you avoided bugs and death !"
        );
        promptBox(`<h3>You win !!!!! </h3> "Congrats, you win this game, you avoided bugs and death !<br><br>
                <img src="./images/joan.png"><br>
                (this is me, looking at you wondering how you went so far in my game)`);
      }
      break;
    default:
      break;
  }
}
