export default class ScrollService {

    static instance;
    afterScrollHook = null;

    scrollOpt = { block: "start", behavior: "smooth" };

    static getInstance() {
        if (!this.instance) {
            this.instance = new ScrollService();

            addEventListener('scroll', this.instance.scrollEvent);
        }
        return this.instance;
    }

    setAfterScrollHook(hook) {
        this.afterScrollHook = hook;
    }

    registerAnchor(anchor) {
        this.anchors.push(anchor);
    }

    scrollEvent(e) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(function () {
            var scrollService = ScrollService.getInstance();
            if (scrollService.afterScrollHook !== null) {
                scrollService.afterScrollHook.endScroll();
                scrollService.afterScrollHook = null;
            }
        }, 100);
    }
}