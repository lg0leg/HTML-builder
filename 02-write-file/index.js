const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const writeStream = fs.createWriteStream(path.join(__dirname,'textExample.txt'), 'utf8',);

rl.question('Введите текст для записи в файл:\n', (answer) => {
  
  if (answer == 'exit') {
    writeStream.close();
    rl.close();
    console.log('Всего доброго!');
  } else {
    writeStream.write(answer + '\n');
  }

});


rl.on('line', (input) => {
  
  if (input == 'exit') {
    writeStream.close();
    rl.close();
    console.log('Всего доброго!');
  } else {
    writeStream.write(input + '\n');
  }

});

rl.on('close', () => {
  console.log('Всего доброго!');
});