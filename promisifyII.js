const fs = require('fs');
const {
    promisify
} = require('util');

const writeFile = promisify(fs.writeFile);

writeFile('sample.txt', 'This is an example')
    .then(() => 'File created succes')
    .catch((error) => console.log(error.message));