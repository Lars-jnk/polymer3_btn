import Behavior from './behavior.js';

export default class SleepBehavior extends Behavior {

    constructor(time) {
        super();
        this.time = time;
    }

    async execute() {
        console.log("sleep");
        await this.Sleep(this.time);
        console.log("sleeped");
    }

    Sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
}