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