import fs from 'fs'
import fetch from 'node-fetch'
import triviaUrls from './triviaUrls.js'

const retrieveData = async(urls) => {
  const allQuestions = [];
  const checkDuplicates = [];

  const maxQuestions = 3000;

  let i = 0;
  while (allQuestions.length < maxQuestions) {
    let url = urls[i];

    try {
        console.log('processing ' + url);
        const response = await fetch(url);
        console.log(response.status);
        if (response.status !== 200) {
          console.log("failed response ", response.status);
          continue;
        }
        const questions = await response.json();
        questions.forEach(question => {
          let id = question.id;
          if (!checkDuplicates.includes(id)) {
            checkDuplicates.push(id);
            allQuestions.push(question);
          }
        });
    } catch(error) {
        console.log(error);
    }

    let progress = ((allQuestions.length / maxQuestions) * 100).toFixed(2)
    console.log(`${progress}% complete`)

    if (i === triviaUrls.length - 1) {
        i = 0;
    } else {
        i++;
    }

  }

  console.log("writing questions to file")
  fs.writeFileSync('./results/triviaQuestions3.json', JSON.stringify(allQuestions, 0, 4),{ flag:'w' });
  console.log("operation complete")
}


retrieveData(triviaUrls);