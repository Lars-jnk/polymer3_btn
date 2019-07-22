import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import MenuButton from './button/menu-button.js';
import DarkButton from './button/dark-button.js';
import ColorButton from './button/color-button.js';
import RedButton from './button/red-button.js';
import AnchorPart from './anchor-part.js';
import ScrollBehavior from './behavior/scroll-behavior.js';
import SleepBehavior from './behavior/sleep-behavior.js';
import OpenDialogBehavior from './behavior/open-dialog-behavior.js';
import OpenTabBehavior from './behavior/open-tab-behavior.js';

class MainLayout extends PolymerElement {

    static get template() {
        return html`
        <style>
        </style>

        <h3>Ein Test mit den Anchor links</h3>

        
        <div id="links"></div>

        <h1>My First Heading</h1>
        <anchor-link text="hallo" sectionid="asdf"></anchor-link>

        <p style="margin-bottom: 100px">My first paragraph.</p>

        <div id="test">
            <h1 style="margin-bottom: 50px">Eine zweite Überschrift</h1>
        </div>

        <div id="parts"></div>
    `;
    }
    ready() {
        super.ready();

        var elink1 = new DarkButton("Part One!");
        this.$["links"].append(elink1);

        var anchor1 = new AnchorPart("partOne");
        this.$["parts"].append(anchor1);

        var elink2 = new MenuButton("asdf Link");
        this.$["links"].append(elink2);

        var anchor2 = new AnchorPart("asdf gg");
        this.$["parts"].append(anchor2);
        
        var elink3 = new ColorButton("Color Link");
        this.$["links"].append(elink3);
        
        var elink4 = new RedButton("Spenden");
        this.$["links"].append(elink4);

        elink1.addBehavior(new ScrollBehavior(anchor1));
        elink1.addBehavior(new SleepBehavior(500));
        elink1.addBehavior(new OpenDialogBehavior(anchor1.getDialog()));

        elink2.addBehavior(new ScrollBehavior(anchor2));
        elink2.addBehavior(new SleepBehavior(500));
        elink2.addBehavior(new OpenTabBehavior(anchor2, 2));
        elink2.addBehavior(new SleepBehavior(1000));
        elink2.addBehavior(new OpenDialogBehavior(anchor2.getDialog3()));
    }
}
customElements.define('main-layout', MainLayout); 