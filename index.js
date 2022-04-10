// install express with `npm install express`

const express = require('express')
const app = express()
let phrase;

// function to check if the given string is Alphabetic
const isAlphabetic = (str) => {
  return /^[a-zA-Z,!.?]+$/.test(str);
}

function translateToFerbLatin(body){
  console.log(body);
  phrase = body.split(' ');

  for(i in phrase){
    //check if the word is longer than 3 characters
    if(phrase[i].length > 2){
      //check if it contains only alphabets
      if(isAlphabetic(phrase[i])){
        let wordTemp = phrase[i];
        wordTemp += '-';
        // use first letter and add -erb at the end
        wordTemp += wordTemp[0]+'erb';
        // remove first letter
        wordTemp = wordTemp.slice(1);
        // move special symbols to the end
        for(j in wordTemp) {
          if( /^[,!.?]$/.test(wordTemp[j]) ) {
            let tempSymbol = wordTemp[j];
            wordTemp = wordTemp.replace(wordTemp[j], '');
            wordTemp += tempSymbol;
          }
        }
        phrase[i] = wordTemp;
      }
    }
  }

  phrase = phrase.join(' ');
  return phrase;
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Stranger!')
})

app.post('/translate', (req, res) => {
  // const { id } = req.params;
  const { body } = req.body;
  let responseWithTranslation;

  if(!body) {
    res.status(418).send({message: 'We need a body content to translate!'});
  }
  
  responseWithTranslation = translateToFerbLatin(body);
  res.status(200).send({
    translation: `${responseWithTranslation}`
  });
  
})

// export 'app'
module.exports = app