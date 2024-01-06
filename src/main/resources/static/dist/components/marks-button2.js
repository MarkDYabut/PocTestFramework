import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './marks-spinner2.js';

const marksButtonCss = ":host{display:block}.btn{background:var(--mono-10);color:var(--mono-70);border-radius:4px;border:none;padding:0 12px;height:38px;outline:none;transition:0.1s ease-in-out;cursor:pointer;font-weight:500;display:flex;align-items:center;justify-content:center;font-family:inherit}.btn.primary{background:var(--primary-50);color:var(--white)}.btn.primary:hover{background:var(--primary-70)}.btn.secondary{background:var(--mono-50);color:var(--white)}.btn.secondary:hover{background:var(--mono-70)}.btn.tertiary{background:var(--primary-05);color:var(--primary-50)}.btn.tertiary:hover{color:var(--primary-70);background:var(--primary-10)}.btn.warning{background:var(--warning-50);color:var(--void)}.btn.warning:hover{background:var(--warning-70)}.btn.danger{background:var(--danger-50);color:var(--white)}.btn.danger:hover{background:var(--danger-70)}";

const MarksButton = /*@__PURE__*/ proxyCustomElement(class MarksButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.text = undefined;
        this.appearance = undefined;
        this.loader = undefined;
    }
    render() {
        return (h("button", { class: `btn ${this.appearance}`, type: "button", disabled: this.loader }, this.text, this.loader ? h("marks-spinner", { type: "circle", color: "green" }) : h("div", null)));
    }
    static get style() { return marksButtonCss; }
}, [1, "marks-button", {
        "text": [1],
        "appearance": [1],
        "loader": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["marks-button", "marks-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "marks-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MarksButton);
            }
            break;
        case "marks-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { MarksButton as M, defineCustomElement as d };

//# sourceMappingURL=marks-button2.js.map