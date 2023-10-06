const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};

rl.question('What is your name', (name) => {
  answers.name = name;
  rl.question('what is an activity you like doing?', (activity) => {
    answers.activity = activity;
    rl.question('What do you listen to while doing that?', (music) => {
     answers.music = music;
    console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}`);
    rl.close();
    });
  });
});