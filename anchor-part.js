import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/iron-pages';


export default class AnchorPart extends PolymerElement {

    static get template() {
        return html`
        <style>
            .dialog {
                margin: 0px;
                width: 600px;
                height: 400px;
                border-radius: 25px;
                background-color: grey;
            }
            .tabs {
                width: 600px;
                background-color: transparent;
            }
            .tab {
                color: white;
                background-color: #90CEC8;
                font-size: 14px;
                border-radius: 20px 20px 0px 0px;
                white-space: nowrap;
            }
            .pages {
                width: 600px;
            }
            .page {
                background-color: #87B6B2;
            }
        </style>

        <div id="container" style="margin-bottom: 200px; background-color: lightgreen">
            <h3>Part with name: [[name]]</h3>
            <button on-click="openDialog">Open</button>
        
            <paper-dialog id="dialog" class="dialog" with-backdrop>
                <div style="margin: 20px; padding: 0px; background-color: lightcoral">
                    <h2 style="margin: 0px;">Content</h2>
                    <button on-click="openDialog2">Open 2</button>
                    <paper-dialog id="dialog2" class="dialog">
                        <div style="margin: 20px; padding: 0px; background-color: lightcoral">
                            <h2 style="margin: 0px;">Content 2222</h2>
                        </div>
                    </paper-dialog>
                </div>
            </paper-dialog>

            <paper-tabs id="tabs" selected="{{selected}}" class="tabs">
                <paper-tab class="tab" style="margin-right: 5px;">Tab 0</paper-tab>
                <paper-tab class="tab" style="margin-left: 5px; margin-right: 5px;">Tab 1</paper-tab>
                <paper-tab class="tab" style="margin-left: 5px; margin-right: 5px;">Tab 2</paper-tab>
                <paper-tab class="tab" style="margin-left: 5px;">Tab 3</paper-tab>
            </paper-tabs>

            <iron-pages class="pages" selected="{{selected}}">
                <div class="page">Page 1</div>
                <div class="page">Page 2</div>
                <div class="page">
                    <h2 style="margin-top: 0px;">Page 3</h2>
                    <button on-click="openDialog3">Open 3</button>
                    <paper-dialog id="dialog3" class="dialog" with-backdrop>
                        <div style="margin: 20px; padding: 0px; background-color: lightcoral">
                            <h2 style="margin: 0px;">Dialog Page 3</h2>
                        </div>
                    </paper-dialog>
                </div>
                <div class="page">Page 4</div>
            </iron-pages>
        </div>
    `;
    }
    static get properties() {
        return {
            name: {
                type: String
            },
            selected: {
                type: Number,
                value: 0
            }
        };
    }
    constructor(name) {
        super();
        this.name = name;
    }

    getDialog() {
        return this.$["dialog"];
    }
    openDialog() {
        console.log("open Dialog");
        this.getDialog().open();
    }

    getDialog2() {
        return this.$["dialog2"];
    }
    openDialog2() {
        console.log("open Dialog 2");
        this.getDialog2().open();
    }

    getDialog3() {
        return this.$["dialog3"];
    }
    openDialog3() {
        console.log("open Dialog 3");
        this.getDialog3().open();
    }

    scrollIntoView(e) {
        this.$["container"].scrollIntoView(e);
    }
}
customElements.define('anchor-part', AnchorPart); 