const fs = require('fs');
const {
    promisify
} = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const beep = () => process.stdout.write('\x07');

const delay = (seconds) => new Promise((resolves) => {
    setTimeout(() => {
        resolves(seconds);
    }, seconds * 1000);
});

const doStuffSequentially = () => Promise.resolve()
    .then(() => console.log('Starting'))
    .then(() => delay(1))
    .then((seconds) => `${seconds} seconds of waiting time`)
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile('file2.txt', 'Sample Text...'))
    .then(beep)
    .then(() => 'file.text created')
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink('file.txt'))
    .then(beep)
    .then(() => 'deleted')
    .then(console.log)
    .catch((error) => console.log(error.message));


doStuffSequentially();


// delay(2).then(seconds => console.log(seconds));