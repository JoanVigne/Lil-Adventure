// VANGUARD START
function vanguardScenario() {
  choice(
    'They surround you. <br> One of the orcs: <br>"Drop weapon pity human, or die.',
    "I obey",
    obey,
    "I refuse",
    fightOrcs
  );
}
function obey() {
  closePromptBox();
  choice(
    "They disarmed you violently. [-1 HP]",
    "Keep obeying",
    toTheLeader,
    "I tell them to relax",
    refuse
  );
  modifyWeapon("");
  addingHp(-1);
}
function refuse() {
  closePromptBox();
  choice(
    "They all stare at you. One of them gives you an axe, that look better than your weapon, and they are preparing to fight you.. ",
    "Let's destroy them",
    fightOrcs,
    "Refuse to fight and give the weapon back",
    toTheLeader
  );
}
function toTheLeader() {
  modifyWeapon("");
  closePromptBox();
  noFightLeader();
}

function fightOrcs() {
  modifyWeapon("small-Axe");
  closePromptBox();
  promptBox(`<h3>yEAAAAHhaA!!!! </h3>
    <br><p> They all are so happy to bring you to their Arena, and they are <bold>ALL</bold> warming up</p><br>
    <input type="button" onclick="toTheArena()" value="Ohoh...">`);
}

function toTheArena() {
  closePromptBox();
  TP("The fight arena");
  directionDisappear();
  localStorage.setItem("whosTurn", 1);
  setTimeout(() => {
    orderFightOrcs();
  }, 1500);
}
function orderFightOrcs() {
  let whosTurn = localStorage.getItem("whosTurn");
  /*  let indexturn = 0; */
  switch (whosTurn) {
    case "1":
      homeMadeAlert(
        "ME FIRST !!",
        "One of them come forward and get his weapon. He is ready to fight"
      );
      detailEnemy(enemyArray[6], "ME FIRST");
      break;
    case "2":
      homeMadeAlert(
        "ME ME ME !!",
        "The moment the first orc body touch the floor, an other take a step forward"
      );
      detailEnemy(enemyArray[7], "ME BETTER");
      break;
    case "3":
      homeMadeAlert("NEXT", "It feels like it will never end...");
      detailEnemy(enemyArray[5], "WTF you good");
      break;
    case "4":
      detailEnemy(enemyArray[8], "I'm last one...");
      break;
    case "5":
      homeMadeAlert(
        "NEXT",
        "They are all silent... An other one comes in front of you. He is bigger than the others... "
      );
      detailEnemy(enemyArray[9], "You killed enought. now you die.");
      break;
    case "6":
      afterFightOrcsLeader();
      break;
    default:
      break;
  }
}
function afterFightOrcsLeader() {
  endOfFight();
  directionDisappear();
  promptBox(`The rest of the orcs left are not moving anymore... They are impressed by you !<br>
    One of them come closer to you, and say:<br>
    "You proved your honor and force. You are worthy to meet our leader. Folow me.<br>
    <input type="button" onclick='TP("The orc leader")' value="Follow him">`);
}
function noFightLeader() {
  TP("The orc leader");
}
// VANGUARD END

//LEADER START

function leaderOrcScenario() {
  player.style.gridArea = "9 / 4 / auto / auto";
  directionDisappear();
  setTimeout(() => {
    choice(
      '"Human. Knee before me.',
      '"I dont take order from any orcs"',
      dontKnee,
      '"Okay.."[kneeling]',
      kneeling
    );
  }, 2000);
}
function dontKnee() {
  closePromptBox();
  promptBox(`<p><h4>"Imbecile" <br></h4>
                He makes a sign with his enormous hand<br>[you hear a fast whistle behind you]<br><br>
                You feel a pain in your right leg, you take a look and realise 
                    that you have a spear through your thigh..<br>[-2hp] </p>
                <input type="button" onclick="kneeling()" value="Ouch">`);
  addingHp(-2);
}
function kneeling() {
  closePromptBox();
  choice(
    `<p>Good, kneeling was the only option.<br> 
    I wonder how a ridiculous human like you could intrude so far on our lands.<br>
    </p>`,
    '"By chance!"',
    respectLeader,
    '"Orcs are easy to fool.."',
    disrespectLeader
  );
}

function respectLeader() {
  closePromptBox();
  choice(
    `"By chance i see. And why taking this risk to be here? Talk or die.`,
    '"I investigate about south burning"',
    investigate,
    "[no answer]",
    fightLeaderOrc
  );
}
function disrespectLeader() {
  closePromptBox();
  choice(
    `"AHAHAHAHAHA, YOU are a funny boy, do you think you can fool me?"`,
    '"You? no.."',
    respectLeader,
    `"Aren't you as stupid as the others?"`,
    fightLeaderOrc
  );
}

function investigate() {
  closePromptBox();
  choice(
    `"Drying your lands and burning your trees? We wish we did, but it was not us!<br>
    your retarded leaders started attacks during the night because they blame us?"`,
    '"I guess they did... unfair!"',
    agreeWithLeaderOrc,
    '"You deserve to be eradicated anyway"',
    fightLeaderOrc
  );
}

function fightLeaderOrc() {
  closePromptBox();
  modifyWeapon("small-Axe");
  homeMadeAlert(
    "Really? AHAHAHA",
    "An other orc give you a small axe, smile at you, and run away. The leader comes to you."
  );
  detailEnemy(enemyArray[12], "Idiot.");
}

function agreeWithLeaderOrc() {
  closePromptBox();
  promptBox(`<p>"You dont seem so retarded for a human, maybe i can let you investigate further.<br>
    For what we know, the problem comes from the east. <br>
    I am gonna give you a better stuff than your shit you had before, and teleport you close to the real guilty"
    <br>
    [new stuff!]</p><br>
    
    
    <input type="button" onclick='closePromptBox(), TP("After the river"), appearDirections()' value="Let's go! Thank chef!">`);
  modifyWeapon("white-sword");
  modifyShield("bouclier");
  modifyTop("armure");
  addingForce(1);
  addingHp(3);
  addingArmor(2);
  localStorage.setItem("theLostLandScenario", 1);
}

// EDMUND

function edmundScenario() {
  choice(
    `<h4>Edmun: ?</h4><p>So if i mix this ingredient with this one... it is killing this plant even faster!<br>
    Oh hey, soldier, give me this bottle and... Hey you re not one of my men !!<br>
    Who are you?<br> An other newbe investigator sent from the village?<br>
    This city mayor is retarded as f*ck to sentence everybody to death.<br></p>`,
    `Yes i am.`,
    truth,
    `No no, i am here to help`,
    lie
  );
}
function truth() {
  closePromptBox();
  choice(
    `<h4>Edmund: </h4><p> I see, honesty, good quality.<br>
    Well, try to be honest with my pet now. <br>
    Gorilla ! ATTACK !</p>`,
    `Throw a peace of meat to him`,
    poop,
    `Prepare to fight`,
    fightGorilla
  );
}
function poop() {
  closePromptBox();
  promptBox(`<h4>Emdund:</h4> <p>"You throw a peace of meat to a fruit-eater animal?"<br>
    The gorilla grabs the meat, smells it, put in on the table.<br>
    Then he looks at you, put his hand behind his back, frowns for a second... <br>
    His hand comes back from his back full of his own poop... and start throwing it to you<br>
    The worm feeling of it on your face makes you lose your means, and you lose [-1 force].. <br></p>
    <input type="button" onclick='fightGorilla()' value="I am gonna kill IT">`);
  addingForce(-1);
}
function fightGorilla() {
  closePromptBox();
  detailEnemy(enemyArray[18], "HOUHOUHOHUHOU.");
}
function lie() {
  closePromptBox();
  choice(
    `<h4>Emdund: </h4><p> Oh, a new member of my big project!<br>
    The first step was to push the local government to send the army against those smelly orcs.<br>
    A success if i may ! They fought for a day now and no one wants to hear their defense about it.<br>
    Then, the second phase of my master-plan can begin!<br></p>
     Anyway, come closer.`,
    `Obeying`,
    obeyingEdmund1,
    `I refuse to obey you, Evil!`,
    truth
  );
}

function obeyingEdmund1() {
  closePromptBox();
  choice(
    `<h4>Edmund:</h4><p> Your blade is full of blood... I can see that you passed through a lot. <br>
    Give it to me, so i can collect the blood of those dead, it can be usefull for my next potions.<br></p>`,
    `Obeying`,
    obeyingEdmund2,
    `Surprise attack on Edmund`,
    surpriseAttack
  );
}
function surpriseAttack() {
  closePromptBox();
  promptBox(`<p>You decide to try to surprise attack him.<br>
    The gorilla is watching you...<br>
    You draw your sword from your scabbard, <br>
    but by doing it a bit fast to try to surprise... It became obvious.<br>
    The gorilla jumps on you and pushes you a few steps away.</p>
    <input type="button" onclick='fightGorilla()' value="Well, let's fight that">`);
}

function obeyingEdmund2() {
  closePromptBox();
  choice(
    `<p> By giving him your weapon nicely, you can notice that the gorilla is less vigilent... <br>
    Edmund collects the blood out of the blade, and give it back to you.<br>
    It is time to attack, who are you gonna fight first? </p>`,
    `Edmund`,
    fightEdmund1,
    `The gorilla`,
    fightGorilla
  );
}

function fightEdmund1() {
  closePromptBox();
  addingHp(-1);
  promptBox(`<h4> You attack Edmund !</h4><br>
    <p> The moment you raise your sword to hit first... <br>
     the gorilla jumps on you and push you away, <br>
     you fall on your back and lose [-1hp]<br>
     Now you don't have any choice. the beast is between you and Edmund who yells at the animal "KILL HIIIIIM"!</p>
     <input type="button" onclick='fightGorilla()' value="Gorilla BBQ tonight!">`);
}

// start this function with whereAmI if localstorage theLostLandScenario === gorillaDown
function fightEdmund2() {
  /* closePromptBox(); */
  promptBox(`<h4>Edmund: </h4><p> "My ape ... what did you do to him... <br>
    You re gonna suffer for this... "<br>
    Edmund takes a small crossbow and shoots a small arrow, with a surprising precision, directly in your neck !<br>
    You pull out the arrow as fast as possible.<br>
    You feel a liquid flowing out of the impact... You touch it and look at it...<br>
    There is some blood, but not only... a green liquid too ??<br></p>
    <input type="button" onclick='wthIsThat()' value="What the hell is that?!">
    `);
}
function wthIsThat() {
  localStorage.setItem("theLostLandScenario", "poisoned");
  closePromptBox();
  promptBox(`<h4>Edmund :</h4><p> It is the color of your punishment ! <br>
    You re gonna slowly suffer until the death take you. <br>
    No one can stop me, You were a fool to think you could do anything to stop me.</p>
    <input type="button" onclick='finalFight()' value="I AM GONNA KILL YOU">`);
}

function finalFight() {
  closePromptBox();
  detailEnemy(enemyArray[19], "It is just a question of time...");
}
