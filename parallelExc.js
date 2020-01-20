const fs = require('fs');
const {
    promisify
} = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const beep = () => process.stdout.write('\x07');

const delay = (seconds) => new Promise((resolves) => {
    setTimeout(() => {
        resolves(seconds);
    }, seconds * 1000);
});

Promise.all([
        delay(1),
        delay(2),
        delay(1)
    ]).then(() => readdir(__dirname))
    .then(console.log)
    .then(() => Promise.race([
        delay(2).then(console.log),
        delay(1)
    ]))
    .then((seconds) => console.log(seconds));