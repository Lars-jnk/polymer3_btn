import Behavior from './behavior.js';

export default class OpenDialogBehavior extends Behavior {

    constructor(dialog) {
        super();
        this.dialog = dialog;
    }

    async execute() {
        console.log("open dialog");
        this.dialog.open();
    }
}