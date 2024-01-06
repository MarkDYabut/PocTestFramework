import { getAssetPath, h } from "@stencil/core";
export class MarksSpinner {
    constructor() {
        this.type = 'android';
        this.color = 'grey';
    }
    render() {
        switch (this.type) {
            case 'circle':
                return (h("img", { src: getAssetPath("./assets/12-dots-scale-rotate.svg"), alt: "circle icon" }));
            case 'bars':
                return (h("img", { src: getAssetPath("./assets/tadpole.svg"), alt: "bars icon" }));
            case 'android':
                return (h("img", { src: getAssetPath("./assets/wifi.svg"), alt: "bars icon" }));
            case 'ios':
                return (h("img", { src: getAssetPath("./assets/wind-toy.svg"), alt: "bars icon" }));
            default:
                return (null);
        }
    }
    static get is() { return "marks-spinner"; }
    static get originalStyleUrls() {
        return {
            "$": ["marks-spinner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["marks-spinner.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "type": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'android'"
            },
            "color": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "color",
                "reflect": false,
                "defaultValue": "'grey'"
            }
        };
    }
}
//# sourceMappingURL=marks-spinner.js.map
