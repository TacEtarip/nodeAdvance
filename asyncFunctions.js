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

const doStuffSequentially = async () => {
    console.log('Starting');
    await delay(1);
    console.log('Waiting');
    await delay(2);
    try {
        await writeFile('file.txt', 'Sample text');
        beep();
    } catch (error) {
        console.log(error);
    }

    console.log('File.txt created');
    await delay(3);
    await unlink('file.txt');
    beep();
    console.log('Now deleted');

    return Promise.resolve();
};

doStuffSequentially()
    .then(() => console.log('okey'));