const questions = require('../../results/triviaQuestions3.js')

// let ids = [];
// console.log(questions.length)
// const MAX = 255;

// for (let question of questions) {
//   // if (!question.id) {
//   //   console.log('no id')
//   // }
//   let keys = Object.keys(question);
//   let values = Object.values(question);
//   for (let i = 0; i < values.length; i++) {
//     if (values[i].length > MAX) {
//       console.log('\n',values[i])
//       console.log(keys[i])
//     }
//   }

  // if (!ids.includes(question.id)) {
  //   ids.push(question.id)
  // } else {
  //   console.log(question.id)
  // }
//}

// console.log(ids.length)
exports.seed = function(knex) {
    return knex('questions').del()
    .then(() => {
      return knex.raw('ALTER SEQUENCE questions_id_seq RESTART WITH 1');
    })
    .then(() => {
      return knex('questions').insert(questions);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
  }

