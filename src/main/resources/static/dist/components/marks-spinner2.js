import { proxyCustomElement, HTMLElement, h, getAssetPath } from '@stencil/core/internal/client';

const marksSpinnerScss = "loading-spinner{\r\n  svg {\r\n      width: 2rem;\r\n      height: 2rem;\r\n      &.spinner-android {\r\n          animation: rotate 2s linear infinite;\r\n          & .path {\r\n              stroke-linecap: round;\r\n              animation: dash 1.5s ease-in-out infinite;\r\n          }\r\n      }\r\n      &.spinner-ios {\r\n          animation: iosIntro .6s;\r\n          path:nth-of-type(1) {\r\n              animation: pulse 1s infinite linear;\r\n          }\r\n          path:nth-of-type(2) {\r\n              animation: pulse 1s -.083s infinite linear;\r\n          }\r\n          path:nth-of-type(3) {\r\n              animation: pulse 1s -.166s infinite linear;\r\n          }\r\n          path:nth-of-type(4) {\r\n              animation: pulse 1s -.249s infinite linear;\r\n          }\r\n          path:nth-of-type(5) {\r\n              animation: pulse 1s -.332s infinite linear;\r\n          }\r\n          path:nth-of-type(6) {\r\n              animation: pulse 1s -.415s infinite linear;\r\n          }\r\n          path:nth-of-type(7) {\r\n              animation: pulse 1s -.498s infinite linear;\r\n          }\r\n          path:nth-of-type(8) {\r\n              animation: pulse 1s -.581s infinite linear;\r\n          }  \r\n          path:nth-of-type(9) {\r\n              animation: pulse 1s -.664s infinite linear;\r\n          }\r\n          path:nth-of-type(10) {\r\n              animation: pulse 1s -.747s infinite linear;\r\n          }\r\n          path:nth-of-type(11) {\r\n              animation: pulse 1s -.83s infinite linear;\r\n          }\r\n          path:nth-of-type(12) {\r\n              animation: pulse 1s -.913s infinite linear;\r\n          }\r\n        }\r\n          \r\n  }\r\n\r\n\r\n  // Keyframes\r\n\r\n  @keyframes rotate {\r\n      100% {\r\n          transform: rotate(360deg);\r\n      }\r\n  }\r\n\r\n  @keyframes dash {\r\n      0% {\r\n          stroke-dasharray: 1, 150;\r\n          stroke-dashoffset: 0;\r\n      }\r\n      50% {\r\n          stroke-dasharray: 90, 150;\r\n          stroke-dashoffset: -35;\r\n      }\r\n      100% {\r\n          stroke-dasharray: 90, 150;\r\n          stroke-dashoffset: -124;\r\n      }\r\n  }\r\n  \r\n\r\n  @keyframes pulse {\r\n      50% { fill-opacity: .2 }\r\n      to { fill-opacity: 1 }\r\n  }\r\n  \r\n  @keyframes iosIntro {\r\n      from {\r\n          transform: scale(0);\r\n          opacity: 0;\r\n      }\r\n      to {\r\n          transform: scale(1);\r\n          opacity: 1;\r\n      }\r\n  }\r\n\r\n}";

const MarksSpinner = /*@__PURE__*/ proxyCustomElement(class MarksSpinner extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get assetsDirs() { return ["assets"]; }
    static get style() { return marksSpinnerScss; }
}, [0, "marks-spinner", {
        "type": [8],
        "color": [8]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["marks-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "marks-spinner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MarksSpinner);
            }
            break;
    } });
}

export { MarksSpinner as M, defineCustomElement as d };

//# sourceMappingURL=marks-spinner2.js.map