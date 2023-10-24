function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => {
      return word.split("").reverse().join("");
    });
    return reversedWords.join(" ");
  }
//   for promt please use npm i && npm install prompt-sync
  const prompt = require("prompt-sync")();
  let inputSentence = prompt("Please enter a sentense :")
  let outputSentence = reverseWords(inputSentence);
  console.log(outputSentence);
  