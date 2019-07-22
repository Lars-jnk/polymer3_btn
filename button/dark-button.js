import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import BaseButton from './base-button.js';

export default class DarkButton extends BaseButton {

    static get styleTemplate() {
        return html`
            <style>
                .btn {
                    width: 130px;
                    height: 50px;
                    line-height: 50px;
                    color: white;
                    font-size: 20px; 
                    background-color: black;
                    border: none;
                    border-radius: unset;
                    transform: none;
                    box-shadow: none;

                    cursor: pointer;
                    white-space: nowrap;
                    text-align: center;
                }
                .btn:hover {
                    background-color: lightgrey;
                    color: white;
                }
            </style>
        `;
    }

    constructor(text) {
        super(text);
    }
}
customElements.define('dark-button', DarkButton); 