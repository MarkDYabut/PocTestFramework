import { proxyCustomElement, HTMLElement, createEvent, h, getAssetPath } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './marks-button2.js';
import { d as defineCustomElement$2 } from './marks-spinner2.js';

const marksModalCss = ":host{display:block}.modal-wrapper{position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;visibility:hidden;transition:visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;z-index:1}.modal-overlay{background:rgba(0, 0, 0, 0.6);height:100%;width:100%;position:absolute}.modal-wrapper .modal{background:var(--white);width:600px;height:auto;border-radius:4px;position:absolute;left:50%;transform:translate(-50%, 0px);transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.modal-wrapper .modal .header{padding:16px;font-size:16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--mono-05)}.modal-wrapper .modal .header h6{font-size:16px;margin:0;line-height:1}.modal-wrapper .modal .header .close{height:24px;width:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;cursor:pointer;transition:0.1s ease-in-out}.modal-wrapper .modal .header .close:hover{background:var(--mono-10)}.modal-wrapper .modal .body{padding:16px;font-size:14px;line-height:21px;max-height:320px;height:auto;overflow-y:auto;color:var(--mono-50)}.modal-wrapper .modal .footer{border-top:1px solid var(--mono-05);padding:16px;display:flex;justify-content:flex-end;align-items:center}.modal-wrapper .modal .footer apollo-button{margin:0 6px}.modal-wrapper .modal .footer apollo-button:first-child{margin:0 6px 0px 0px}.modal-wrapper .modal .footer apollo-button:last-child{margin:0 0px 0px 6px}.isopen{opacity:1;visibility:visible;transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.isopen .modal{transform:translate(-50%, 90px)}@media (max-width: 600px){.modal-wrapper .modal{width:100%;bottom:0;transform:translate(-50%, 100%);opacity:1}.isopen .modal{transform:translate(-50%, 0)}}";

const MarksModal$1 = /*@__PURE__*/ proxyCustomElement(class MarksModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.action = createEvent(this, "action", 7);
        this.handleCancel = () => {
            this.isopen = false;
        };
        this.handleAction = () => {
            this.action.emit();
            alert('Request');
            console.log('press from marks-modal.tsx');
        };
        this.isopen = undefined;
        this.closeIcon = 'x.svg';
        this.header = undefined;
        this.appearance = undefined;
        this.buttons = undefined;
        this._buttons = undefined;
    }
    arrayDataWatcher(buttons) {
        if (typeof buttons === 'string') {
            this._buttons = JSON.parse(buttons);
        }
        else {
            this._buttons = buttons;
        }
    }
    componentWillLoad() {
        this.arrayDataWatcher(this.buttons);
    }
    render() {
        return (h("div", { class: this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper' }, h("div", { class: "modal-overlay", onClick: this.handleCancel }), h("div", { class: "modal" }, h("div", { class: "header" }, h("h6", null, this.header), h("div", { class: "close", onClick: this.handleCancel }, h("img", { src: getAssetPath(`./assets/${this.closeIcon}`), alt: "close icon" }))), h("div", { class: "body" }, h("slot", null)), h("div", { class: "footer" }, this._buttons.map((button, index) => (h("marks-button", { onClick: index === 0 ? this.handleAction : this.handleCancel, text: button.text, appearance: index === 0 && this.appearance })))))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return marksModalCss; }
}, [1, "marks-modal", {
        "isopen": [1540],
        "closeIcon": [1, "close-icon"],
        "header": [1],
        "appearance": [1],
        "buttons": [1],
        "_buttons": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["marks-modal", "marks-button", "marks-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "marks-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MarksModal$1);
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

const MarksModal = MarksModal$1;
const defineCustomElement = defineCustomElement$1;

export { MarksModal, defineCustomElement };

//# sourceMappingURL=marks-modal.js.map