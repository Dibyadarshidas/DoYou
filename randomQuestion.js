const axios = require('axios');



module.exports.getQuestions = async function getQuestions(numberOfQuestions, category, level, type) {
  try {
    let result;
    const response = await axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${level}&type=${type}`);
    result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

/*
numberOfQuestions: An interger for how many question you want to return

category:
  9. General Knowledge
  10. Entertainment: Books
  11. Entertainment: Film
  12. Entertainment: Music
  13. Entertainment: Musicals & Theatres
  14. Entertainment: Television
  15. Entertainment: Video Games
  16. Entertainment: Board Games
  17. Science & Nature
  18. Science: Computers
  19. Science: Mathematics
  20. Mythology
  21. Sports
  22. Geography
  23. History
  24. Politics
  25. Art
  26. Celebrities
  27. Animals
  28. Vehicles
  29. Entertainment: Comics
  30. Science: Gadgets
  31. Entertainment: Japanese Anime & Manga
  32. Entertainment: Cartoon & Animations

level: easy, medium, hard

type: boolean, multiple

*/
