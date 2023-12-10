function setLostLandScenario(whatNumber) {
    localStorage.setItem("theLostLandScenario", whatNumber);
}

function setALocalStorage() {
    console.log("setAlocalStorage");

    let thisEnemy = enemyChatContainer.getElementsByTagName("h4")[0];
    let thisEnemyName = thisEnemy.innerHTML;

    switch (thisEnemyName) {
        case "guard-enemy":
            setLostLandScenario("2");
            break;
        case "first-soldier":
            setLostLandScenario("3");
            break;
        case "second-soldier":
            setLostLandScenario("4");
            break;
        case "third-soldier":
            setLostLandScenario("5");
            break;
        case "Rider":
            setLostLandScenario("6");
            break;
        case "gorilla":
            setLostLandScenario("gorillaDown");
            break;
        case "Edmund":
            console.log("fin");
            break;
        default:
            break;
    }
}