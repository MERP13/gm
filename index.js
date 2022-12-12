let p1ActiveDice = [0,0,0,0,0,0];
let p1Scores = [0,0,0,0,0,0];
let activeGame = false;
let validRollVar = false;
let _tempPlyAmt = 1;

class Player{
    activeDice = [0,0,0,0,0,0];
    loggedDice = [0,0,0,0,0,0];
    endScoreValid = false;
    loggedTotal = 0;
};
const Player1 = new Player();
const Player2 = new Player();
const Player3 = new Player();

///////////////////////////////////////////////////////////
document.getElementById("rollDice").onclick = function(){
    disableAllInputs();
    if(!activeGame){checkGameStart();}
    checkValidRoll();
    if(validRollVar){
        if(activeGame){logPlayerSelections(); logOpponentSelections(); logTotalScores(); checkGameState();}
        if(activeGame){rollNewDice(); enableValidInputs();}
        else{finalizeGame();}
        consoleLogAllData();}
    else{window.alert("SELECT 1+ DICE"); enableValidInputs();}
};
///////////////////////////////////////////////////////////

consoleLogAllData();
function consoleLogAllData(){
    console.log(Player1.activeDice.reduce((total, amount) => total +amount) == 0);
    
    console.log(activeGame);
    console.log(p1ActiveDice);
    console.log(p1Scores);
    console.log(validRollVar);

    console.log(Player1);
    console.log(Player2);
    console.log(Player3);
};

function disableAllInputs(){
    document.getElementById("rollDice").disabled = true;
    for(i=1; i<=3; i+=1){
        document.getElementById(`P${i}D1-checkbox`).disabled = true;
        document.getElementById(`P${i}D2-checkbox`).disabled = true;
        document.getElementById(`P${i}D3-checkbox`).disabled = true;
        document.getElementById(`P${i}D4-checkbox`).disabled = true;
        document.getElementById(`P${i}D5-checkbox`).disabled = true;
        document.getElementById(`P${i}D6-checkbox`).disabled = true;}
};

function checkValidRoll(){
    if((Player1.activeDice.reduce((total, amount) => total +amount)) == 0)
        {validRollVar = true;}
    else if((Player1.loggedDice[0] == 0) && (document.getElementById(`P1D1-checkbox`).checked == true))
        {validRollVar = true;}
    else if((Player1.loggedDice[1] == 0) && (document.getElementById(`P1D2-checkbox`).checked == true))
        {validRollVar = true;}
    else if((Player1.loggedDice[2] == 0) && (document.getElementById(`P1D3-checkbox`).checked == true))
        {validRollVar = true;}
    else if((Player1.loggedDice[3] == 0) && (document.getElementById(`P1D4-checkbox`).checked == true))
        {validRollVar = true;}
    else if((Player1.loggedDice[4] == 0) && (document.getElementById(`P1D5-checkbox`).checked == true))
        {validRollVar = true;}
    else if((Player1.loggedDice[5] == 0) && (document.getElementById(`P1D6-checkbox`).checked == true))
        {validRollVar = true;}
    else{validRollVar = false;}
};

function checkGameStart(){
    if ((activeGame == false) && ((Player1.activeDice.reduce((total, amount) => total +amount)) == 0)){
        document.getElementById(`rollDice`).innerHTML = "";
        document.getElementById(`rollDice`).innerHTML = "ROLL";
        window.alert("HIGHEST SCORE WINS + YOU MUST HAVE ⚀ (1) & ⚃ (4)");
        activeGame = true;}
    else {window.alert("ERROR! (CGS)"); gameOver();};
};

function logPlayerSelections(){
    if(activeGame){
        for(i=1; i<=6; i+=1){
            if((Player1.loggedDice[(i-1)] <=0) && 
            (Player1.activeDice[(i-1)] >=1) && 
            (document.getElementById(`P1D${i}-checkbox`).checked))
                {Player1.loggedDice[i-1] = Player1.activeDice[i-1]}
            else {}
            }
    } else {window.alert("ERROR! (LPS)"); gameOver();};
};

function logOpponentSelections(){
    //should check to see if they have already finished or not
    // should have P2 be low risk && P3 be high risk
    // checkboxes should always be disabled, but the checks can appear

    //might also want to tag in an extra part here that can FINISHED UP the game once 
}

function logTotalScores(){
    Player1.loggedTotal = (Player1.activeDice.reduce((total, amount) => total +amount));
    Player2.loggedTotal = (Player2.activeDice.reduce((total, amount) => total +amount));
    Player3.loggedTotal = (Player3.activeDice.reduce((total, amount) => total +amount));
}

// it may be possible to combine these three functions in the future

function checkGameState(){
    if ((Player1.loggedDice[0] >=1) && 
        (Player1.loggedDice[1] >=1) &&
        (Player1.loggedDice[2] >=1) &&
        (Player1.loggedDice[3] >=1) &&
        (Player1.loggedDice[4] >=1) && 
        (Player1.loggedDice[5] >=1)){
            activeGame = false;
        }
    else
        {activeGame = true;};
        //should also check here to see if opponents are done, if not then call FINSHER function
};

function rollNewDice(){
    if(activeGame == true){
        for(let i=1; i<=6; i+=1){
            if(Player1.loggedDice[i-1] >=1){}
            else{
                Player1.activeDice[(i-1)] = (Math.floor(Math.random()*6)+1);
                switch(Player1.activeDice[(i-1)]){
                    case (Player1.activeDice[(i-1)]) = 1:
                        document.getElementById(`P1D${i}-text`).innerHTML = `⚀ (1)`; break;
                    case (Player1.activeDice[(i-1)]) = 2:
                        document.getElementById(`P1D${i}-text`).innerHTML = `⚁ (2)`; break;
                    case (Player1.activeDice[(i-1)]) = 3:
                        document.getElementById(`P1D${i}-text`).innerHTML = `⚂ (3)`; break;
                    case (Player1.activeDice[(i-1)]) = 4:
                        document.getElementById(`P1D${i}-text`).innerHTML = `⚃ (4)`; break;
                    case (Player1.activeDice[(i-1)]) = 5:
                        document.getElementById(`P1D${i}-text`).innerHTML = `⚄ (5)`; break;
                    case (Player1.activeDice[(i-1)]) = 6:
                        document.getElementById(`P1D${i}-text`).innerHTML = `⚅ (6)`; break;
                };
                Player2.activeDice[(i-1)] = (Math.floor(Math.random()*6)+1);
                switch(Player2.activeDice[(i-1)]){
                    case (Player2.activeDice[(i-1)]) = 1:
                        document.getElementById(`P2D${i}-text`).innerHTML = `⚀ (1)`; break;
                    case (Player2.activeDice[(i-1)]) = 2:
                        document.getElementById(`P2D${i}-text`).innerHTML = `⚁ (2)`; break;
                    case (Player2.activeDice[(i-1)]) = 3:
                        document.getElementById(`P2D${i}-text`).innerHTML = `⚂ (3)`; break;
                    case (Player2.activeDice[(i-1)]) = 4:
                        document.getElementById(`P2D${i}-text`).innerHTML = `⚃ (4)`; break;
                    case (Player2.activeDice[(i-1)]) = 5:
                        document.getElementById(`P2D${i}-text`).innerHTML = `⚄ (5)`; break;
                    case (Player2.activeDice[(i-1)]) = 6:
                        document.getElementById(`P2D${i}-text`).innerHTML = `⚅ (6)`; break;
                };
                Player3.activeDice[(i-1)] = (Math.floor(Math.random()*6)+1);
                switch(Player3.activeDice[(i-1)]){
                    case (Player3.activeDice[(i-1)]) = 1:
                        document.getElementById(`P3D${i}-text`).innerHTML = `⚀ (1)`; break;
                    case (Player3.activeDice[(i-1)]) = 2:
                        document.getElementById(`P3D${i}-text`).innerHTML = `⚁ (2)`; break;
                    case (Player3.activeDice[(i-1)]) = 3:
                        document.getElementById(`P3D${i}-text`).innerHTML = `⚂ (3)`; break;
                    case (Player3.activeDice[(i-1)]) = 4:
                        document.getElementById(`P3D${i}-text`).innerHTML = `⚃ (4)`; break;
                    case (Player3.activeDice[(i-1)]) = 5:
                        document.getElementById(`P3D${i}-text`).innerHTML = `⚄ (5)`; break;
                    case (Player3.activeDice[(i-1)]) = 6:
                        document.getElementById(`P3D${i}-text`).innerHTML = `⚅ (6)`; break;
                };
                
            };
        };
    }
    else {window.alert("ERROR! (RND)"); gameOver();};
};

function enableValidInputs(){
    if(activeGame){
        for(let i=1; i<=6; i+=1){
            if(Player1.loggedDice[i-1] >=1){document.getElementById(`P1D${i}-checkbox`).disabled = true;}
            else{document.getElementById(`P1D${i}-checkbox`).disabled = false;}
        };
        document.getElementById("rollDice").disabled = false;
    } else {window.alert("ERROR! (EVI)"); gameOver();};
};

function finalizeGame(){
    /////////////////////////////////////// hitting error here because opponents still have ZERO
    /////////////////////////////////////// need to make a AI system for choosing dice now :)
    if((!activeGame) && 
    (Player1.loggedDice.indexOf(0) !== -1) && 
    (Player2.loggedDice.indexOf(0) !== -1) && 
    (Player3.loggedDice.indexOf(0) !== -1)){
        if ((Player1.loggedDice.indexOf(1) !== -1) && (Player1.loggedDice.indexOf(4) !== -1))
                {Player1.endScoreValid = true;}
        if ((Player2.loggedDice.indexOf(1) !== -1) && (Player2.loggedDice.indexOf(4) !== -1))
                {Player2.endScoreValid = true;}
        if ((Player3.loggedDice.indexOf(1) !== -1) && (Player3.loggedDice.indexOf(4) !== -1))
                {Player3.endScoreValid = true;}
        if(Player1.endScoreValid = true){
            if((Player1.loggedTotal > Player2.loggedTotal) && (Player1.loggedTotal > Player3.loggedTotal)){
                let r = (confirm(`YOU WIN! YOU HAVE THE HIGHEST SCORE (${Player1.loggedTotal})! \n RESTART GAME?`));
                    if (r==true){window.location.reload();}
                    else{gameOver();}}
            else{
                let P2 = 0; let P3 = 0; let W;
                if(Player2.endScoreValid==true){P2 = Player2.loggedTotal;}
                if(Player3.endScoreValid==true){P3 = Player3.loggedTotal;}
                if(P2 > P3){w = P2;} else {w = P3;}
                let r = (confirm(`YOU LOSE! YOUR SCORE (${Player1.loggedTotal}) IS NOT THE HIGHEST (${w}). \n RESTART GAME?`));
                if(r==true){window.location.reload();}
                else{gameOver();}}}
        else{
            let r = (confirm("YOU LOSE! YOU MUST HAVE (1) & (4). \n RESTART GAME?"));
            if(r==true){window.location.reload();}
            else{gameOver();}}
    }else {window.alert("ERROR! (FG)"); gameOver();};
};

function gameOver(){
    document.getElementById(`rollDice`).innerHTML = "";
    document.getElementById(`rollDice`).innerHTML = "GAME OVER";
    disableAllInputs();
}

