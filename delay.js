const delay = (secondsToDelay, cbAfter) => {
    setTimeout(cbAfter, secondsToDelay * 1000);
};

console.log('Starting delay');

delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
            console.log('four seconds');
        });
    });
});

process.on('exit', () => {
    console.log('All of the delays are finished');
});