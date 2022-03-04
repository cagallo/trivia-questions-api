# Trivia Night API

- Deployed API on Heroku [here](https://trivia-night-api-2110.herokuapp.com/api/v1/questions/all) <br>
- Frontend Repo [here](https://github.com/cagallo/trivia-night-ui) <br>
- Project Spec [here](https://frontend.turing.edu/projects/module-3/showcase.html)

## Background

This server was created to accompany the user interface of 'Trivia Night', a frontend Mod 3 project at the Turing School of Software and Design. I used data from this [Trivia API](https://trivia.willfry.co.uk/) to populate a PostgreSQL database which this API querys using knex. This server was written in JavaScript using Express and Node.

## Installation Instructions

1. Clone down this repo to your local machine:
    - `git@github.com:cagallo/trivia-questions-api.git`
2. Change into the new directory:
    - `cd trivia-questions-api`
3. Install the dependencies:
    - `npm install`
4. To fire up the server, run:
    - `node server.js` or `nodemon server.js`(if you have nodemon installed)
5. In the browser or postman, use the following endpoints with the base URL: http://localhost:3000/ to retrieve or post data. 
6. You can also use the following endpoints(besides get random questions from all categories, takes you there automatically) on the deployed Heroku API linked above. 

## Endpoints

| Description | URL         | Method      | Required Properties for Request | Sample Sucessful Response |
| ----------- | ----------- | ----------- | ------------------------------- | ------------------------- |
| Get Random Questions from All Categories | `http://localhost:3001/api/v1/questions/all` | GET | none | array containing 20 trivia question objects |    
| Get Questions by Category | `http://localhost:3001/api/v1/questions?category=:category` <br> *where category will be the category name of the subject i.e. category=History* | GET | none | array containing trivia question objects from same category | 
| Add New Question | `http://localhost:3001/api/v1/questions` | POST | `{ "question": "What is the capital of Alaska?", "incorrect_answers": ["Fairbanks", "Anchorage" , "Wasilla"] "correct_answer": "Juneau"}` | `{ id: <id> in questions table}` |


## Technologies Used

- Express
- PostgreSQL
- Knex.js
- JavaScript
- Node
- Node-Fetch
- PgAdmin4
- Heroku
- Postman

## Author

- [Chez Gallo](https://github.com/cagallo)

- Project Manager: [Robbie Jaeger](https://github.com/robbiejaeger)
