import fetch from 'node-fetch';

const testTriviaRequest = () => {
  return fetch ('https://api.trivia.willfry.co.uk/questions')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

testTriviaRequest();