import Behavior from './behavior.js';

export default class OpenTabBehavior extends Behavior {

    constructor(tabs, tabNr) {
        super();
        this.tabs = tabs;
        this.tabNr = tabNr;
    }

    async execute() {
        console.log("open tab");
        this.tabs.selected = this.tabNr;
    }
}