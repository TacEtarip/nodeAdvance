const logUpdate = require('log-update');
const toX = () => 'X';
const delay = (seconds = 1) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(seconds);
    }, seconds * 1000);
});

const tasks = [
    delay(),
    delay(5),
    delay(4),
    delay(8),
    delay(3),
    delay(2)
];

class PromiseQueue {
    constructor(promises = [], concurrentCount = 1) {
        this.concurrentCount = concurrentCount;
        this.total = promises.length;
        this.todo = promises;
        this.complete = [];
        this.running = [];
    }

    get runAnother() {
        return this.todo.length && (this.concurrentCount > this.running.length);
    }

    graphTask() {
        const {
            todo,
            running,
            complete
        } = this;

        logUpdate(`
        
        todo: [${todo.map(toX)}]
        running: [${running.map(toX)}]
        complete: [${complete.map(toX)}]
        
        `);
    }

    run() {
        while (this.runAnother) {
            const promise = this.todo.shift();
            promise.then(() => {
                this.complete.push(this.running.shift());
                this.graphTask();
                this.run();
            });
            this.running.push(promise);
            this.graphTask();
        }
    }
}


const delayQueue = new PromiseQueue(tasks, 2);

delayQueue.run();