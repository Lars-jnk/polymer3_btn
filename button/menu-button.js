import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import BaseButton from './base-button.js';

export default class MenuButton extends BaseButton {

    static get styleTemplate() {
        return html`
            <style>
                .btn {
                    cursor: pointer;
                    width: 130px;
                    font-size: 27px;    /* für alle devices */
                    color: gray;        /* einma */
                    padding: 16px;      /* für alle devices */
                }
                .btn:hover {
                    color: black;       /* einma */
                }
            </style>
        `;
    }

    constructor(text) {
        super(text);
    }
}
customElements.define('menu-button', MenuButton); 