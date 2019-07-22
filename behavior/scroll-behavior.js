import Behavior from './behavior.js';
import ScrollService from '../service/scroll-service.js';

export default class ScrollBehavior extends Behavior {

    scrollOpt = { block: "start", behavior: "smooth" };

    constructor(anchor) {
        super();
        this.anchor = anchor;
        this.scrolling = false;
    }

    async execute() {
        console.log("ScrollBehavior.execute start");
        
        var scrollService = ScrollService.getInstance();
        scrollService.afterScrollHook = this;

        this.scrolling = true;
        this.anchor.scrollIntoView(this.scrollOpt);

        while (this.scrolling) {
            await this.Sleep(50);
        }
        console.log("ScrollBehavior.execute end");
    }

    endScroll() {
        this.scrolling = false;
    }

    Sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
}