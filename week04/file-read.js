const fs = require('fs');

fs.readFile(__dirname + '\\filex.txt', 'utf-8', function(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

console.log('Program continues to execute while file is being read...');

