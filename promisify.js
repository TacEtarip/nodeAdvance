const {
    promisify
} = require('util');

const delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds its too long!`));
    } else {
        setTimeout(() => {
            callback(null, `the ${seconds} seconds delay is over`)
        }, seconds * 1000);
    }
};

const promisedDelay = promisify(delay);

promisedDelay(5)
    .then(console.log)
    .catch((error) => console.log(error.message));