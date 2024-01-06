import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './marks-button2.js';
import { d as defineCustomElement$2 } from './marks-spinner2.js';

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}.v{font-weight:bold;vertical-align:super;font-size:xx-small}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.handleAction = () => {
            this.attack();
        };
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
        this.data = undefined;
        this.verseRef = undefined;
        this.verse = undefined;
        this.isLoading = true;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    getVerse() {
        const VERSES = [
            `JER.29.11`,
            `PSA.23`,
            `1COR.4.4-8`,
            `PHP.4.13`,
            `JHN.3.16`,
            `ROM.8.28`,
            `ISA.41.10`,
            `PSA.46.1`,
            `GAL.5.22-23`,
            `HEB.11.1`,
            `2TI.1.7`,
            `1COR.10.13`,
            `PRO.22.6`,
            `ISA.40.31`,
            `JOS.1.9`,
            `HEB.12.2`,
            `MAT.11.28`,
            `ROM.10.9-10`,
            `PHP.2.3-4`,
            `MAT.5.43-44`,
        ];
        const verseIndex = Math.floor(Math.random() * VERSES.length);
        const verseID = VERSES[verseIndex];
        return verseID;
    }
    attack() {
        const API_KEY = `f9ae003dfa0ee152613fcb7e981f7cb0`; // Fill in with your own key.
        const BIBLE_ID = `9879dbb7cfe39e4d-02`;
        const verseID = this.getVerse();
        const url = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`;
        this.isLoading = true;
        fetch(url, {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Api-Key': API_KEY
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((data) => {
            this.data = data.data;
            this.verse = data.data.passages[0].content;
            this.verseRef = data.data.passages[0].reference;
            this.isLoading = false;
            // console.log(this.verse);
            // console.log(this.verseRef);
        });
    }
    componentWillLoad() {
        this.attack();
    }
    render() {
        return (h("div", null, h("p", null, "Hello, World! I'm ", this.getText()), h("h3", null, "Enjoy this bible passage below"), h("div", null, "Loading? ", this.isLoading ? "yes" : "no", this.isLoading ?
            h("marks-button", { text: "Requesting...", color: "secondary", loader: true })
            :
                h("marks-button", { onClick: this.handleAction, text: "Request new passage", appearance: "primary" })), h("h4", null, this.data && this.verseRef), h("p", null, h("span", { innerHTML: this.verse }))));
    }
    static get style() { return myComponentCss; }
}, [1, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1],
        "data": [32],
        "verseRef": [32],
        "verse": [32],
        "isLoading": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component", "marks-button", "marks-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
        case "marks-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "marks-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };

//# sourceMappingURL=my-component.js.map