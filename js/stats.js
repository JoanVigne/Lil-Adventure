



// xpConcideringLevel(xpRecieved) to give xp to player

function displayStatsPlayer(container) {
    let stuff = localStorage.getItem("gameStuff");
    actualStuff = JSON.parse(stuff);
    container.innerHTML = `<u>Stats:</u><br>    
    <p>
    <bold>HP:<span id="hpPlayer">${actualStuff.hp}</span></bold><br>
    armor:<span id="armorPlayer">${actualStuff.armor}</span>
    force:<span id="forcePlayer">${actualStuff.force}</span>
    spe:<span id="spePlayer">${actualStuff.spe}</span> 
    </p>
    `;
}

function profile() {
    let stuff = localStorage.getItem("gameStuff");
    actualStuff = JSON.parse(stuff);
    homeMadeAlert("Profile", `<p> <u>Level</u>:${actualStuff.level} <u>HP</u>:${actualStuff.hp} <u>force</u>:${actualStuff.force}   
    <p><u>spe</u>:${actualStuff.spe}</p>
    <h4>stuff</h4>
    <p><u>total armor</u>:${actualStuff.armor}</p>
    <p><u>hat</u>:${actualStuff.hat} <u>top</u>:${actualStuff.top} </p>
    <p><u>weapon</u>:${actualStuff.weapon} <u>shield</u>:${actualStuff.shield} </p>
 `);
}

function statUpgrade() {
    let stuff = localStorage.getItem("gameStuff");
    actualStats = JSON.parse(stuff);
    console.log(actualStats);
    promptBox(`<h3><u>Level up !</u></h3> <br> 
    <h4>Chose a stat to upgrade :</h4>
    <br>
    <button class="forceBut" onClick="addingForce(1); closePromptBox();">Force +1</button> <br>
    <button class="hpBut" onClick="addingHp(2); closePromptBox()">HP +2</button>`)
}

let xpContainer = document.getElementById("xpContainer");
xpContainer.addEventListener("click", profile);

function addingHp(howMuch) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.hp = stuff.hp += howMuch;
    localStorage.setItem("gameStuff", JSON.stringify(stuff))
    if (stuff.hp <= 0) {
        playerDeath();
    }
    playerStuff();
}
function addingForce(howMuch) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.force = stuff.force += howMuch;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));
    playerStuff();
}
function addingArmor(howMuch) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.armor = stuff.armor += howMuch;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));
    playerStuff();
}
function orcBeerDrink() {
    homeMadeAlert("GlupGlup", "You drink a pint of this orc beer of cheap quality. Your biceps got bigger but it hurt you... <br>[+1force]<br>[-1 HP]")
    addingForce(1);
    addingHp(-1);
}
function greenPotion() {
    homeMadeAlert("Yerk", `It tastes TERRIBLE, and you have a strong stomach ache now..., 
    you feel your face and all your body burning!!<br>
    You lose 2hp...`)
    addingHp(-2);
}


/* function modifySpe(newSpe) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
       stuff.weapon = newWeapon;
        localStorage.setItem("gameStuff", JSON.stringify(stuff));
} */
