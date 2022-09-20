

window.onload =  function menu() {
    // function buttons(idOfThisButton, classOfThisButton, valueOfThisButton, theEvent, whereDoItAppend)
    titleH1[0].innerHTML = `Menu`;
    let menuButtonContainer = document.createElement("fieldset");
    container.append(menuButtonContainer);
    let continueGame = localStorage.getItem("", "");
    if(continueGame == null){
        buttons("start", "menuButton", "Start the adventure", "start()", menuButtonContainer);
        buttons("options", "menuButton", "Options", "aFunction()", menuButtonContainer);
        buttons("about", "menuButton", "About the creator", "aFunction()", menuButtonContainer);
    }
    else {
        buttons("continue", "menuButton", "Continue the adventure", "aFunction()", menuButtonContainer);
        buttons("startOver", "menuButton", "Start over the adventure", "start()", menuButtonContainer);
        buttons("options", "menuButton", "Options", "aFunction()", menuButtonContainer);
        buttons("about", "menuButton", "About the creator", "aFunction()", menuButtonContainer);
    }
    whereAmI();
};



function aFunction(){
    console.log("fonctionne");
}

function quitMenu(){
    let menuButtonContainer = document.getElementsByTagName("fieldset");
    menuButtonContainer[0].remove();
}