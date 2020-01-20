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

const start = async () => {
    const files = await readdir(__dirname);
    console.log(files);
};

start();