const hideString = (textToHide = '', passValue = f => f) => {
    process.nextTick(() => {
        passValue(textToHide.replace(/[a-zA-Z]/g, 'x'));
    });
};


hideString('Hi how are YOU', (hidden) => {
    console.log(hidden);
});

process.stdout.write(`hola\n`);