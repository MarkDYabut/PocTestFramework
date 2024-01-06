import { h } from "@stencil/core";
export class MarksButton {
    constructor() {
        this.text = undefined;
        this.appearance = undefined;
        this.loader = undefined;
    }
    render() {
        return (h("button", { class: `btn ${this.appearance}`, type: "button", disabled: this.loader }, this.text, this.loader ? h("marks-spinner", { type: "circle", color: "green" }) : h("div", null)));
    }
    static get is() { return "marks-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["marks-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["marks-button.css"]
        };
    }
    static get properties() {
        return {
            "text": {
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
                "attribute": "text",
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
            "loader": {
                "type": "boolean",
                "mutable": false,
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
                "attribute": "loader",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=marks-button.js.map
