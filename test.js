let questions = require('./randomQuestion');


async function main() {
  let result = await questions.getQuestions(3, 22, "easy", "boolean")
  console.log("data", result);
}


main ();
