import { h, getAssetPath } from "@stencil/core";
export class MarksModal {
    constructor() {
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
    static get is() { return "marks-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["marks-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["marks-modal.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "isopen": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "isopen",
                "reflect": true
            },
            "closeIcon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "close-icon",
                "reflect": false,
                "defaultValue": "'x.svg'"
            },
            "header": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "header",
                "reflect": false
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "appearance",
                "reflect": false
            },
            "buttons": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "buttons",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "_buttons": {}
        };
    }
    static get events() {
        return [{
                "method": "action",
                "name": "action",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=marks-modal.js.map
