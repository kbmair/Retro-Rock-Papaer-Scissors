//FIGHTER OBJECTS
const OneEye = {
    name: `One-Eye`,
    health: 100
}


const Typhus = {
    name: `Typhus`,
    health: 75
}

const EmberGaze = {
    name: `Embergaze`,
    health: 100
}

const TheGluttonous = {
    name: `The Gluttonous`,
    health: 50
}

const Villager = {
    name: `Villager`,
    health: 1
}

const Goblin = {
    name: `Goblin`,
    health: 75
}

const TheLimper = {
    name: `The Limper`,
    health: 100
}

const Sunderer = {
    name: `The Dark Eye`,
    health: 100
}

const clickSound = new Audio(`2022-12-05 15h20m20s.mp3`);
clickSound.volume = 1;

const backgroundTheme = new Audio(`Epic End.ogg`);









//FUNCTIONS
async function restartgame() {
    runorfight = 0;
    opponentHealthLabel.textContent = ``;
    player1Heart.style.opacity = `0`;
    await sleep(500);
    player2Heart.style.opacity = `0`;
    await sleep(500);
    player3Heart.style.opacity = `0`;
    await sleep(500);
    player4Heart.style.opacity = `0`;
    await sleep(500);
    player5Heart.style.opacity = `0`;
    line2.textContent = ``;
    await sleep(2000);
    line2.textContent = ``;
    input.style.opacity = `0`;
    start.style.opacity = `0`;
    submit.style.opacity = `0`
    step = 1;
    randomNumber = '';
    opponent = '';
    runorfight = '';
    message.textContent = `When you are ready Click Start!`;

    start.style.transform = `translateX(0px)`;
    await sleep(1000);
    start.style.opacity = `1`;
    title.style.opacity = `1`;
}
function OpponentAttackCalc() {
    let number = Math.trunc(Math.random() * 3) + 1;
    if (number === 1) {
        opponentAttack = `rock`;
    } else if (number === 2) {
        opponentAttack = `paper`;

    } else if (number === 3) {
        opponentAttack = `scissors`;
    }
    return opponentAttack;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playerhealthbar() {
    player1Heart.style.opacity = `1`;
    await sleep(500);
    player2Heart.style.opacity = `1`;
    await sleep(500);
    player3Heart.style.opacity = `1`;
    await sleep(500);
    player4Heart.style.opacity = `1`;
    await sleep(500);
    player5Heart.style.opacity = `1`;
}

async function prepareToFight() {
    message.textContent = '';
    await sleep(1000);
    message.textContent = 'Prepare';
    await sleep(1000);
    message.textContent = "Prepare To";
    await sleep(1000);
    message.textContent = `Prepare To Fight`;
    await sleep(250);
    message.textContent = `Prepare To Fight.`;
    await sleep(250);
    message.textContent = `Prepare To Fight..`;
    await sleep(250);
    message.textContent = `Prepare To Fight...`;
}

let step = 1;//1
let randomNumber;
let opponent;
let runorfight
let score = 0;
let matchResult;
let attackChoice;
let opponentAttack;
let roundWinner;
let gameWinner
let enemyHealth;
const message = document.querySelector(`.message`);
const line2 = document.querySelector(`.anotherline`);
const input = document.querySelector(`.input`);
const title = document.querySelector(`h1`);
const start = document.querySelector(`.start`);
const submit = document.querySelector(`.submit`);
const opponentHealthLabel = document.querySelector(`.label-opponenthealth`);
const Health_Opponent = document.querySelector(`.opponenthealth`);

const player1Heart = document.querySelector(`.yourhealth1`);
const player2Heart = document.querySelector(`.yourhealth2`);
const player3Heart = document.querySelector(`.yourhealth3`);
const player4Heart = document.querySelector(`.yourhealth4`);
const player5Heart = document.querySelector(`.yourhealth5`);


backgroundTheme.volume = 1;




document.querySelector(`.start`).addEventListener(`click`, async function () {
    backgroundTheme.play();
    clickSound.play();
    if (step === 1) {
        step++//2
        submit.style.transform = `translateX(0px)`;
        await sleep(2000);
        submit.style.opacity = `1`;
        start.style.opacity = `0`;
        document.querySelector(`.input`).style.opacity = `1`;


        title.style.opacity = 0;
        await sleep(1000);
        start.style.transform = (`translateX(-1000px)`);

        message.textContent = `.`;
        await sleep(1000);
        message.textContent = `..`;
        await sleep(1000);
        message.textContent = `...`;
        await sleep(1000);
        message.textContent = `Your opponent is approaching`;
        await sleep(2000);
        message.textContent = `Call out to your opponent to challenge them...`;
        step++;//3
    }


})





submit.addEventListener(`click`, async function () {
    clickSound.play();
    if (step === 3) {
        let text = input.value;
        if (Number(text)) {
            line2.textContent = 'Use words to call out to them!';
        } else if (String(text)) {
            step++//4
            await sleep(2000);
            line2.textContent = ``;
            message.textContent = `Your opponent reveals themself...`
            randomNumber = Math.trunc(Math.random() * 8) + 1;
            if (randomNumber === 1) {
                opponent = OneEye;
            } else if (randomNumber === 2) {
                opponent = Typhus;
            } else if (randomNumber === 3) {
                opponent = EmberGaze;
            } else if (randomNumber === 4) {
                opponent = TheGluttonous;
            } else if (randomNumber === 5) {
                opponent = Villager;
            } else if (randomNumber === 6) {
                opponent = Goblin;
            } else if (randomNumber === 7) {
                opponent = TheLimper;
            } else if (randomNumber === 8) {
                opponent = Sunderer;
            }
            await sleep(2000);
            message.textContent = `${opponent.name} sizes you up!`;
            await sleep(2000);
            line2.textContent = `Will you run or fight?`;
            step++//5


        }
    }

})

submit.addEventListener(`click`, async function () {
    clickSound.play();
    if (step === 5) {
        text = input.value;
        if (text.toUpperCase() === `RUN`) {
            step++//6
            runorfight = 0;
            message.textContent = `Game over...You ran away...`;
            line2.textContent = ``;
            await sleep(2000);
            line2.textContent = ``;
            input.style.opacity = `0`;
            start.style.opacity = `0`;
            submit.style.opacity = `0`
            step = 1;
            randomNumber = '';
            opponent = '';
            runorfight = '';
            message.textContent = `When you are ready Click Start!`;

            start.style.transform = `translateX(0px)`;
            await sleep(1000);
            start.style.opacity = `1`;
            title.style.opacity = `1`;

        } else if (text.toUpperCase() === `FIGHT`) {
            step++//6
            runorfight = 1;
            line2.textContent = ``;
            opponentHealthLabel.textContent = (`${opponent.name}'s Health: ${opponent.health}`);
            enemyHealth = opponent.health;
            prepareToFight();
            await sleep(3000);
            playerhealthbar();
            line2.textContent = `Enter an attack, and your opponent will counter!`
            step++//7






        } else {
            line2.textContent = `Respond with Run or Fight!`;
        }

    }
})






submit.addEventListener(`click`, async function () {
    clickSound.play();
    if (step === 7) {
        if (input.value.toUpperCase() === "ROCK" || input.value.toUpperCase() === `PAPER` || input.value.toUpperCase() === `SCISSORS`) {
            step++//8
            attackChoice = input.value.toLowerCase();
            message.textContent = `You chose ${attackChoice}. `;
            opponentAttack = OpponentAttackCalc();
            await sleep(1000);
            line2.textContent = `Ready?`;
            await sleep(1000);
            line2.textContent = `Set.`;
            await sleep(1000);
            line2.textContent = `Go!`;
            await sleep(1000);
            line2.textContent = `${opponent.name} used ${opponentAttack}!`;
            await sleep(1000);
            if (opponentAttack === `rock`) {
                if (attackChoice === `rock`) {
                    message.textContent = `Attack Deflected! You both picked ${opponentAttack}!`
                    await sleep(5000);

                    line2.textContent = `Enter an attack, and your opponent will counter!`;

                    step--//7
                }
                else if (attackChoice === `paper`) {
                    if (enemyHealth > 25) {
                        message.textContent = `You won this round! ${attackChoice} beats ${opponentAttack}!`;

                        enemyHealth = enemyHealth - 25;
                        opponentHealthLabel.textContent = (`${opponent.name}'s Health: ${enemyHealth}`);

                        await sleep(5000);

                        line2.textContent = `Enter an attack, and your opponent will counter!`;

                        step--//7
                    } else {
                        message.textContent = `You won the match!`;
                        enemyHealth = 0;
                        score = score + 500;
                        restartgame();


                    }



                } else if (attackChoice === `scissors`) {
                    if (player1Heart.style.opacity === `1` || player2Heart.style.opacity === `1` || player3Heart.style.opacity === `1` || player4Heart.style.opacity === `1` || player5Heart.style.opacity === `1`) {
                        if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `1` && player5Heart.style.opacity === `1`) {
                            player5Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);
                            line2.textContent = `Enter an attack, and your opponent will counter!`;

                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `1` && player5Heart.style.opacity === `0`) {
                            player4Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;

                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player3Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;

                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player2Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;


                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player2Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;


                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player1Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;


                            step--//7

                        }
                        else if (player1Heart.style.opacity === `0` && player2Heart.style.opacity === `0` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player1Heart.style.opacity = `0`;
                            message.textContent = `You have no more health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(2000);
                            message.textContent = `Game over...`;
                            await sleep(2000);
                            step--//7
                            restartgame();

                        }



                    }







                }




            }
            else if (opponentAttack === `paper`) {
                if (attackChoice === `paper`) {
                    message.textContent = `Attack Deflected! You both picked ${opponentAttack}!`
                    await sleep(5000);

                    line2.textContent = `Enter an attack, and your opponent will counter!`;

                    step--//7
                }
                else if (attackChoice === `scissors`) {
                    if (enemyHealth > 25) {
                        message.textContent = `You won this round! ${attackChoice} beats ${opponentAttack}!`;

                        enemyHealth = enemyHealth - 25;
                        opponentHealthLabel.textContent = (`${opponent.name}'s Health: ${enemyHealth}`);

                        await sleep(5000)
                        line2.textContent = `Enter an attack, and your opponent will counter!`;

                        step--//7
                    } else {
                        message.textContent = `You won the match!`;
                        enemyHealth = 0;
                        score = score + 500;
                        await sleep(2000);

                        restartgame();


                    }



                } else if (attackChoice === `rock`) {
                    if (player1Heart.style.opacity === `1` || player2Heart.style.opacity === `1` || player3Heart.style.opacity === `1` || player4Heart.style.opacity === `1` || player5Heart.style.opacity === `1`) {
                        if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `1` && player5Heart.style.opacity === `1`) {
                            player5Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `1` && player5Heart.style.opacity === `0`) {
                            player4Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player3Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player2Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `0` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player1Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `0` && player2Heart.style.opacity === `0` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player1Heart.style.opacity = `0`;
                            message.textContent = `You have no more health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(2000);
                            message.textContent = `Game over...`;
                            await sleep(2000);
                            step--//7
                            restartgame();

                        }



                    }







                }




            }
            if (opponentAttack === `scissors`) {
                if (attackChoice === `scissors`) {
                    message.textContent = `Attack Deflected! You both picked ${opponentAttack}!`
                    await sleep(5000);
                    line2.textContent = `Enter an attack, and your opponent will counter!`;

                    step--//7
                }
                else if (attackChoice === `rock`) {
                    if (enemyHealth > 25) {
                        message.textContent = `You won this round! ${attackChoice} beats ${opponentAttack}!`;

                        enemyHealth = enemyHealth - 25;
                        opponentHealthLabel.textContent = (`${opponent.name}'s Health: ${enemyHealth}`);

                        await sleep(5000);

                        line2.textContent = `Enter an attack, and your opponent will counter!`;

                        step--//7
                    } else {
                        message.textContent = `You won the match!`;
                        enemyHealth = 0;
                        score = score + 500;
                        await sleep(2000);

                        restartgame();


                    }



                } else if (attackChoice === `paper`) {
                    if (player1Heart.style.opacity === `1` || player2Heart.style.opacity === `1` || player3Heart.style.opacity === `1` || player4Heart.style.opacity === `1` || player5Heart.style.opacity === `1`) {
                        if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `1` && player5Heart.style.opacity === `1`) {
                            player5Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `1` && player5Heart.style.opacity === `0`) {
                            player4Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `1` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player3Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `1` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player2Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }
                        else if (player1Heart.style.opacity === `1` && player2Heart.style.opacity === `0` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player1Heart.style.opacity = `0`;
                            message.textContent = `You lost health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(5000);

                            line2.textContent = `Enter an attack, and your opponent will counter!`;
                            step--//7

                        }


                        else if (player1Heart.style.opacity === `0` && player2Heart.style.opacity === `0` && player3Heart.style.opacity === `0` && player4Heart.style.opacity === `0` && player5Heart.style.opacity === `0`) {
                            player1Heart.style.opacity = `0`;
                            message.textContent = `You have no more health! ${opponentAttack} beats ${attackChoice}!`
                            await sleep(2000);
                            message.textContent = `Game over...`;
                            await sleep(2000);
                            step--//7
                            restartgame();

                        }



                    }







                }




            }








        } else {
            message.textContent = `You can only attack with Rock, Paper or Scissors`;
        }
    }


})



