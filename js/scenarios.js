// VANGUARD START
function avoidMultiplePrompts() {
  const multiplePromptBox = document.querySelectorAll("#promptBox");
  if (multiplePromptBox.length > 0) {
    return;
  }
}
function vanguardScenario() {
  avoidMultiplePrompts();
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
  gameStuffData.weapon = "";
  playerStuff();
  addingStat("hp", -1);
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
  avoidMultiplePrompts();
  gameStuffData.weapon = "";
  playerStuff();
  /*   newStuff("", "weapon"); */
  closePromptBox();
  noFightLeader();
}

function fightOrcs() {
  gameStuffData.weapon = "small-Axe";
  playerStuff();
  /*   newStuff("small-Axe", "weapon"); */
  closePromptBox();
  promptBox(`<h3>yEAAAAHhaA!!!! </h3>
    <br><p> They all are so happy to bring you to their Arena, and they are <bold>ALL</bold> warming up</p><br>
    <input type="button" onclick="toTheArena()" value="Ohoh...">`);
}

function toTheArena() {
  avoidMultiplePrompts();
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
      promptBox(`<h4>ME FIRST !!</h4>
      <p>One of them come forward and get his weapon. He is ready to fight</p>
      <input type="button" onclick='closePromptBox(); focusThisInput(0)' value="Let's do this">`);
      /*       homeMadeAlert(
        "ME FIRST !!",
        "One of them come forward and get his weapon. He is ready to fight"
      ); */
      detailEnemy(enemyArray[7], "ME FIRST");
      break;
    case "2":
      homeMadeAlert(
        "ME ME ME !!",
        "The moment the first orc body touch the floor, an other take a step forward"
      );
      detailEnemy(enemyArray[8], "ME BETTER");
      break;
    case "3":
      promptBox(`<h4>MY TURN !!!</h4><p>It feels like it will never end...</p>
      <input type="button" onclick='closePromptBox(); focusThisInput(0)' value="Kill it">`);
      detailEnemy(enemyArray[9], "WTF you good");
      break;
    case "4":
      detailEnemy(enemyArray[10], "I'm last one...");
      break;
    case "5":
      promptBox(`<h4>NEXT</h4>
      <p>They are all quiet... An other one comes in front of you. He is bigger than the others...</p>
      <input type="button" onclick='closePromptBox(); focusThisInput(0)' value="This is a big one..">`);
      detailEnemy(enemyArray[11], "You killed enought. now you die.");
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
  addingStat("hp", -2);
  promptBox(`<p><h4>"Imbecile" <br></h4>
                He makes a sign with his enormous hand<br>[you hear a fast whistle behind you]<br><br>
                You feel a pain in your right leg, you take a look and realise 
                    that you have an arrow to the knee...<br>[-2hp] </p>
                <input type="button" onclick="kneeling()" value="Ouch">`);
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
  /*   modifyWeapon("small-Axe"); */
  gameStuffData.weapon = "small-Axe";
  playerStuff();
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
    
    
    <input type="button" onclick='tpAfterOrcs()' value="Let's go! Thanks chef!">`);

  addingStat("force", 1);
  addingStat("hp", 3);
  addingStat("armor", 2);
  localStorage.setItem("theLostLandScenario", 1);
}
function leaderOrcDead() {
  promptBox(`<h4>The leader of the orcs has fallen.</h4>
  <p>The moment he touches the ground, a large number of them surround you. <br>
    One of them gets closer and starts to speak: <br>
    "You, by the ancestral rules of our people, are the new chief.<br>
    You are going to save the lands by fighting the evil in the east!"<br>
    [He begins a magical ritual...]
  </p>
    <input type="button" onclick='tpAfterOrcs()' value="Wait, what? Where?">`);
}
// END OF ORCS
function tpAfterOrcs() {
  closePromptBox();
  TP("After the river");
  appearDirections();
  player.style.gridArea = "5 / 5 / auto / auto ";
  if (gameStuffData.hp < 10) {
    gameStuffData.hp = 10;
  }
  gameStuffData.weapon = "white-sword";
  gameStuffData.shield = "Wooden";
  gameStuffData.top = "Iron";
  gameStuffData.armor = 3;
  playerStuff();
  setTimeout(() => {
    homeMadeAlert(
      "Woaw",
      `<p>You really did teleport somewhere else! what magic is that??<br>
              You look amazing and ready to fight with this strong armor! <br>
              You realise that you are close to the village, after the river on the east. To the old castle direction.</p>`
    );
  }, 2000);
}
// EDMUND

function edmundScenario() {
  choice(
    `<h4>Edmund:</h4>
    <p>So if I mix this ingredient with that one, it will kill this plant even faster!<br>
        Oh hey, soldier, give me that bottle and... Wait, you're not one of my men!!<br>
        Who are you? Another new investigator sent from the village?<br>
        This city's mayor is incredibly foolish to condemn everybody to death.<br></p>
    `,
    `Yes i am.`,
    truth,
    `No no, i am here to help`,
    lie
  );
}
function truth() {
  closePromptBox();
  choice(
    `<h4>Edmund:</h4>
    <p>I see, honesty, a good quality.<br>
        Well, try to be honest with my pet now.<br>
        Gorilla! ATTACK!</p>,`,
    `Throw a piece of meat to him`,
    poop,
    `Prepare to fight`,
    fightGorilla
  );
}
function poop() {
  closePromptBox();
  promptBox(`<h4>Edmund:</h4>
  <p>"You throw a piece of meat to a fruit-eating animal?"<br>
      The gorilla grabs the meat, smells it, puts it on the table.<br>
      Then he looks at you, puts his hand behind his back, frowns for a second...<br>
      His hand comes back from behind with his own poop and starts throwing it at you.<br>
      The unpleasant feeling on your face makes you lose your composure, resulting in a loss of [-1 force].</p>
    <input type="button" onclick='fightGorilla()' value="I am gonna kill IT">`);
  addingStat("force", -1);
}
function fightGorilla() {
  closePromptBox();
  detailEnemy(enemyArray[18], "HOUHOUHOHUHOU.");
  enemyArray[18].done = true;
}
function lie() {
  closePromptBox();
  choice(
    `<h4>Edmund:</h4>
    <p>Oh, a new member of my big project!<br>
        The first step was to push the local government to send the army against those smelly orcs.<br>
        A success if I may say so! They've been fighting for a day now, and no one wants to hear their defense about it.<br>
        Now, the second phase of my master plan can begin!<br></p>
    <p>Anyway, come closer.</p>
    `,
    `Obeying`,
    obeyingEdmund1,
    `I refuse to obey you, Evil!`,
    truth
  );
}

function obeyingEdmund1() {
  closePromptBox();
  choice(
    `<h4>Edmund:</h4>
    <p>Your blade is covered in blood... I can see that you've been through a lot.<br>
        Give it to me, so I can collect the blood of the fallen; it can be useful for my next potions.</p>
    `,
    `Obeying`,
    obeyingEdmund2,
    `Surprise attack on Edmund`,
    surpriseAttack
  );
}
function surpriseAttack() {
  closePromptBox();
  promptBox(`<p>You decide to attempt a surprise attack on him.<br>
  The gorilla watches you closely...<br>
  You draw your sword from its scabbard,<br>
  but in your haste to surprise him, it becomes apparent.<br>
  The gorilla quickly jumps on you and pushes you a few steps away.</p>
    <input type="button" onclick='fightGorilla()' value="Well, let's fight that beast">`);
}

function obeyingEdmund2() {
  closePromptBox();
  choice(
    `<p>By giving him your weapon politely, you notice that the gorilla is less vigilant...<br>
    Edmund collects the blood from the blade and hands it back to you.<br>
    It's time to attack. Who are you going to fight first?</p>`,
    `Edmund`,
    fightEdmund1,
    `The gorilla`,
    fightGorilla
  );
}

function fightEdmund1() {
  closePromptBox();
  addingStat("hp", -1);
  promptBox(`<h4>You attack Edmund!</h4>
  <p>The moment you raise your sword to strike first...<br>
      the gorilla jumps on you and pushes you away,<br>
      you fall on your back and lose [-1 HP].<br>
      Now you don't have any choice. The beast is between you and Edmund, who yells at the animal: "KILL HIIIM!"</p>
     <input type="button" onclick='fightGorilla()' value="Gorilla BBQ tonight!">`);
}

// start this function with whereAmI if localstorage theLostLandScenario === gorillaDown
function fightEdmund2() {
  closePromptBox();
  promptBox(`<h4>Edmund:</h4>
  <p>"My ape... what did you do to him...<br>
      You're gonna suffer for this..."<br>
      Edmund takes a small crossbow and shoots a small arrow with surprising precision, directly at your neck!<br>
      You pull out the arrow as fast as possible.<br>
      You feel a liquid flowing out of the impact... You touch it and look at it...<br>
      There is some blood, and... a green substance??</p>
  
    <input type="button" onclick='wthIsThat()' value="What the hell is that?!">
    `);
}
function wthIsThat() {
  closePromptBox();
  promptBox(`<h4>Edmund:</h4>
  <p>It is the color of your punishment!<br>
      You're going to suffer slowly until death takes you.<br>
      No one can stop me. You were a fool to think you could do anything to stop me.</p>  
    <input type="button" onclick='finalFight()' value="I AM GONNA KILL YOU">`);
}

function finalFight() {
  closePromptBox();
  detailEnemy(enemyArray[19], "It is just a question of time...");
  enemyArray[19].done = true;
}

function adventureIsOver() {
  /*  promptBox(` "Congrats, you win this game, you avoided bugs and death !<br><br>
          <img src="./images/joan.png"><br>
          (this is me, looking at you wondering how you went so far in my game)`); */
  homeMadeAlert(
    `<h3>You win !!!!! </h3>`,
    `you avoided bugs and death !<br><br>
          <img src="./images/joan.png"><br>
          (this is me, looking at you wondering how you went so far in my game)`
  );
}
