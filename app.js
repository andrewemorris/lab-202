"use strict";

function askQuestion(question) {
  let rePrompt = "";
  let answerStr = "";
  let answer = false;
  let done = false;

  do {
    answerStr = prompt(rePrompt + question + " (t/f)");
    rePrompt = "";
    console.log(answer);
    switch (answerStr.toLowerCase()) {
      case "t":
        answer = true;
        done = true;
        break;
      case "f":
        answer = false;
        done = true;
        break;
      default:
        rePrompt = "That wasn't a valid answer. ";
    }
  } while (!done)
  // alert("To the question " + question + " you answered " + answerStr);
  return answer;
}

function giveResponse(question, answerGiven, answerExpected) {
  const message = "Question '" + question + "' answer given '" + answerGiven + "' answer expected '" + answerExpected + "'";
  if (answerGiven == answerExpected) {
    //console.log(message);
    alert("Correct! " + message);
  } else {
    //console.log(message);
    alert("Incorrect! " + message);
  }
}

function numberGame() {
  const promptMsg = "Can you guess what integer I'm thinking of between 1 and 100 in four our fewer attempts? What's your first guess?";
  const tryAgainMsg = ".  Try agian:";
  const lowerMsg = "That's too high";
  const higherMsg = "That's too low";
  const nanMsg = "That not an integer"
  const successMsg = "We done, that's correct!";
  const failMsg = "Sorry, you ran out of attepmts. Better luck next time!";
  const myInt = 51;
  const maxAttempts = 4;
  let answer;
  let message = promptMsg;

  for (let i = 0; i < maxAttempts; i++) {
    answer = parseInt(prompt(message + " (1..100)"));
    console.log("answer = " + answer);
    console.log(answer == NaN);
    console.log(answer === NaN);


    if (isNaN(answer)) {
      message = nanMsg;
    } else if (myInt < answer) {
      message = lowerMsg;
    } else if (answer < myInt) {
      message = higherMsg;
    } else {
      message = successMsg;
      break;
    }

    if (i < maxAttempts - 1) {
      message += ". Attempt " + (i + 1) + " of " + maxAttempts + tryAgainMsg;
    } else {
      message += failMsg;
    }
  }
  alert(message);
}


function arrayGame() {
  const promptMsg = "What is one of my favourite albums?";
  const tryAgainMsg = "Try agian  .";
  const correctMsg = "well done, that's one of them";
  const failMsg = "Sorry, you ran out of attempts. Better luck next time!";
  const albums = ["alison", "pretzel logic", "harvest", "manassas", "caught and spark", "rosemary lane"];
  const maxAttempts = 6;
  let message = promptMsg;
  let correct = false;
  let answer;

  for (let i = 0; i < maxAttempts; i++) {
    answer = prompt(message).toLowerCase();
    console.log(answer);

    console.log("attempt " + (i + 1));

    for (let j = 0; j < albums.length; j++) {

      correct = (albums[j] == answer);
      if (correct) {
        message = correctMsg;
        console.log("correct");
        break;
      }
    }

    if (correct) {
      break;
    }
    else if (i < maxAttempts - 1) {
      message = tryAgainMsg + " Attempt " + (i + 1) + " of " + maxAttempts + ". " + promptMsg;
    } else {
      message = failMsg;
    }

  }
  alert(message);
}