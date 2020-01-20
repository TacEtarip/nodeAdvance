const delay = (seconds) => new Promise((resolves, rejects) => {

    if (seconds > 3) {
        rejects(new Error(`${seconds} is too long`));
    }

    // throw new Error('argh');

    const message = 'The long wait has ended';
    setTimeout(() => {
        resolves(message);
    }, seconds * 1000);
});

console.log('Starting delay');

delay(4)
    .then((message) => console.log(message))
    .then(() => 42)
    .then((number) => console.log(`Ultimate Message: ${number}`))
    .catch((error) => console.log(`error: ${error}`));

console.log('End first tick');