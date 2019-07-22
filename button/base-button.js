import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

export default class BaseButton extends PolymerElement {
    static get template() {
        return html`
            ${this.styleTemplate}
            
            <div class="btn" on-click="click">
                [[text]]
            </div>
        `;
    }

    static get styleTemplate() {
        return html``;
    }

    static get properties() {
        return {
            text: {
                type: String
            },
            behaviors: {
                type: Array
            }
        };
    }

    constructor(text) {
        super();
        this.text = text;
        this.behaviors = [];
    }

    addBehavior(behavior) {
        this.behaviors.push(behavior);
    }

    async click() {
        console.log("click");
        console.log(this.behaviors);

        for (let behavior of this.behaviors) {
            await behavior.execute();
        }
    }
}