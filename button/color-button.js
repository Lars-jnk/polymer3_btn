import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import BaseButton from './base-button.js';

export default class ColorButton extends BaseButton {

    static get styleTemplate() {
        return html`
            <style>
                .btn {
                    width: 130px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 20px;
                    border: 2px solid red;
                    border-radius: 3px;
                    background-color: yellow;
                    color: red;

                    cursor: pointer;
                    white-space: nowrap;
                    text-align: center;
                }
                .btn:hover {
                    color: darkorange;
                }
            </style>
        `;
    }
    static get properties() {
        return {
            color: {
                type: String
            }
        };
    }

    constructor(text) {
        super(text);
    }
}
customElements.define('color-button', ColorButton); 