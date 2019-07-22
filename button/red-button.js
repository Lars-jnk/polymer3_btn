import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import BaseButton from './base-button.js';

export default class RedButton extends BaseButton {

    static get styleTemplate() {
        return html`
            <style>
                .btn {
                    width: 130px;
                    height: 50px;
                    line-height: 50px;
                    color: white;
                    font-size: 20px; 
                    background-color: red;
                    border: none;
                    border-radius: 0px 0px 20px 20px;
                    transform: rotate(-90deg);
                    box-shadow: -2px 1px 3px gray;

                    margin-left: 300px;

                    cursor: pointer;
                    white-space: nowrap;
                    text-align: center;
                }
                .btn:hover {
                    background-color: green;
                    color: white;
                }
            </style>
        `;
    }

    constructor(text) {
        super(text);
    }
}
customElements.define('red-button', RedButton); 