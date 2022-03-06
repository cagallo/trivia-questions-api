const express = require('express');
const app = express();
const { request, response } = require('express');
const cors = require('cors');
require('dotenv').config();

const queries = require('./queries');

app.use(express.json());
app.use(cors())

app.set('port', process.env.PORT || 3001);

app.get('/api/v1/questions/all', (request, response) => {
  queries.getAllQuestions()
    .then(data => response.status(200).json(data))
    .catch(error => response.status(500).json({ error }))
});

app.get('/api/v1/questions', (request, response) => {
  queries.getQuestionsByCategory(request)
    .then(data => {
      if (data.length === 0) {
        response.status(404).json({"error": `No questions found for category ${request.query.category}`})
      } else {
        response.status(200).json(data)
      }
    })
    .catch(error => response.status(500).json({ error }))
});

app.post('/api/v1/questions', (request, response) => {
  let triviaQuestion = request.body;
  triviaQuestion.category = "User Generated Question";
  triviaQuestion.type = "Multiple Choice"
  const { correct_answer, incorrect_answers, question } = triviaQuestion;
  for (let requiredParameter of [ 'correct_answer', 'incorrect_answers', 'question' ]) {
    if (!triviaQuestion[requiredParameter]) {
      return response.status(422)
      .json({ message: `Expected format: { correct_answer: <String>, incorrect_answers: <Array<String>>, question: <String> }. You’re missing a “${requiredParameter}” property.` });
    }
  }
  queries.postUserQuestion(triviaQuestion)
    .then(data => response.status(201).json(data))
    .catch(error => response.status(500).json({ error }));
});

app.listen(app.get('port'), () => {
  console.log(`Trivia API is up on on http://localhost:${app.get('port')}.`);
});
