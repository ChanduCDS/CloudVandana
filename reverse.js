function reverseWordsInSentence(sentence) {
  let reversedSentence = "";
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      word = sentence[i] + word;
    } else {
      reversedSentence += word + " ";
      word = "";
    }
  }
  reversedSentence += word;
  return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
