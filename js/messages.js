
// Bubble
function bubble(message, whoIsTalking) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerHTML = message;
    let column = whoIsTalking.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = whoIsTalking.style.gridRowStart;
    let numberRow = Number(row);
    bubble.style.gridColumnStart = numberColumn;
    if (numberRow <= 3) {
        bubble.style.gridRowStart = numberRow += 1;
    }
    else {
        bubble.style.gridRowStart = numberRow -= 1;
    }
    container.append(bubble);
    setTimeout(function () { deletBubble(); }, 1000);
    function deletBubble() {
        let allTheBubble = document.getElementsByClassName("bubble");
        allTheBubble[0].parentNode.removeChild(bubble);
    }
}


// HOME MADE ALERT 
function homeMadeAlert(title, message) {
    let alertBox = document.createElement("div");
    alertBox.setAttribute("id", "alertBox");
    alertBox.innerHTML = `<h3>${title}</h3><br>
                                <p>${message}</p><br>
                                <input type="button" value="Okay" onclick="closeHomeMadeAlert()">`
    container.append(alertBox);
}
function closeHomeMadeAlert(){
    let alertBoxToClose = document.getElementById("alertBox");
    alertBoxToClose.remove();
}

/*
function promptMaison(message){
    player.remove();
    let box = document.createElement("div");
    box.setAttribute("id", "boxPrompt");
    box.innerHTML = `<h1>${message}</h1><h1>Entrez votre pseudo pour enregistrer votre score :</h1>`;
   
    let entry = document.createElement("input");
    entry.setAttribute("type", "text");
    entry.setAttribute("id", "entry");
    entry.setAttribute("placeholder", "ex: D4rKs4$$uke42 ..");
   
    let recordEntry = document.createElement("input");
    recordEntry.setAttribute("type", "button");
    recordEntry.setAttribute("value", "Enregistrer");
    recordEntry.setAttribute("id", "recordEntry");
    box.append(entry);
    box.append(recordEntry);
    container.append(box);

    recordEntry.addEventListener("click", recordEntryFunction)
    function recordEntryFunction(){
        if(entry.value != ""){
            recordInLocalStorage();
            console.log("pseudo present");
            console.log(entry.value);
            messageGameOver();
            box.remove();
            
            setTimeout(function () { menuPrincipal(); }, 1500);
        }
        else {
            console.log("aucun pseudo entré");
            box.innerHTML += `<br>Veuillez entrer un pseudo`;
        }
    }
}
*/