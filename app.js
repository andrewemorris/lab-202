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

