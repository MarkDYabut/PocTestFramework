import { r as registerInstance, h, H as Host, c as createEvent, g as getAssetPath } from './index-169cdb2d.js';

const marksButtonCss = ":host{display:block}.btn{background:var(--mono-10);color:var(--mono-70);border-radius:4px;border:none;padding:0 12px;height:38px;outline:none;transition:0.1s ease-in-out;cursor:pointer;font-weight:500;display:flex;align-items:center;justify-content:center;font-family:inherit}.btn.primary{background:var(--primary-50);color:var(--white)}.btn.primary:hover{background:var(--primary-70)}.btn.secondary{background:var(--mono-50);color:var(--white)}.btn.secondary:hover{background:var(--mono-70)}.btn.tertiary{background:var(--primary-05);color:var(--primary-50)}.btn.tertiary:hover{color:var(--primary-70);background:var(--primary-10)}.btn.warning{background:var(--warning-50);color:var(--void)}.btn.warning:hover{background:var(--warning-70)}.btn.danger{background:var(--danger-50);color:var(--white)}.btn.danger:hover{background:var(--danger-70)}";

const MarksButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.text = undefined;
        this.appearance = undefined;
        this.loader = undefined;
    }
    render() {
        return (h("button", { class: `btn ${this.appearance}`, type: "button", disabled: this.loader }, this.text, this.loader ? h("marks-spinner", { type: "circle", color: "green" }) : h("div", null)));
    }
};
MarksButton.style = marksButtonCss;

const marksIntegrationCss = ":host{display:block}";

const MarksIntegration = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleNewDriver = () => {
            this.fetchData("/driver/new");
            this.drivers = this.data.allDrivers;
        };
        this.handleGetDrivers = () => {
            this.fetchData("/driver/viewDrivers");
            this.drivers = this.data.allDrivers;
        };
        this.handleDeleteDrivers = () => {
            this.fetchData("/driver/destroyAll");
            this.drivers = this.data.allDrivers;
        };
        this.isLoading = false;
        this.data = undefined;
        this.drivers = [];
    }
    async fetchData(endpoint) {
        const url = "http://localhost:8080/Rest";
        const uri = url + endpoint;
        this.isLoading = true;
        console.log('loading', this.isLoading);
        fetch(uri, {
            method: 'GET',
            // mode: 'no-cors', this breaks responses, handle cors on server side
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
            console.log(res);
            return res.json();
        })
            .then((data) => {
            this.data = data;
            console.log(data);
        })
            .catch(error => console.log('Error:', error))
            .finally(() => {
            this.isLoading = false;
            console.log('loading', this.isLoading);
        });
    }
    render() {
        return (h(Host, null, h("h2", null, "My first integration"), "Loading? ", this.isLoading ? "yes" : "no", this.isLoading ?
            h("marks-button", { text: "Requesting...", color: "secondary", loader: true })
            :
                h("marks-button", { onClick: this.handleNewDriver, text: "Request new driver", appearance: "primary" }), this.data ? h("p", null, "Created: ", this.data.createdDriver) : h("p", null, "Request new driver now!"), "Loading? ", this.isLoading ? "yes" : "no", this.isLoading ?
            h("marks-button", { text: "Requesting...", color: "secondary", loader: true })
            :
                h("marks-button", { onClick: this.handleGetDrivers, text: "Request all drivers", appearance: "warning" }), h("p", null, "All Drivers:"), h("ol", null, this.drivers.map((driver) => h("li", null, driver))), "Loading? ", this.isLoading ? "yes" : "no", this.isLoading ?
            h("marks-button", { text: "Requesting...", color: "secondary", loader: true })
            :
                h("marks-button", { onClick: this.handleDeleteDrivers, text: "Delete all drivers", appearance: "danger" }), h("slot", null)));
    }
};
MarksIntegration.style = marksIntegrationCss;

const marksModalCss = ":host{display:block}.modal-wrapper{position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;visibility:hidden;transition:visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;z-index:1}.modal-overlay{background:rgba(0, 0, 0, 0.6);height:100%;width:100%;position:absolute}.modal-wrapper .modal{background:var(--white);width:600px;height:auto;border-radius:4px;position:absolute;left:50%;transform:translate(-50%, 0px);transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.modal-wrapper .modal .header{padding:16px;font-size:16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--mono-05)}.modal-wrapper .modal .header h6{font-size:16px;margin:0;line-height:1}.modal-wrapper .modal .header .close{height:24px;width:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;cursor:pointer;transition:0.1s ease-in-out}.modal-wrapper .modal .header .close:hover{background:var(--mono-10)}.modal-wrapper .modal .body{padding:16px;font-size:14px;line-height:21px;max-height:320px;height:auto;overflow-y:auto;color:var(--mono-50)}.modal-wrapper .modal .footer{border-top:1px solid var(--mono-05);padding:16px;display:flex;justify-content:flex-end;align-items:center}.modal-wrapper .modal .footer apollo-button{margin:0 6px}.modal-wrapper .modal .footer apollo-button:first-child{margin:0 6px 0px 0px}.modal-wrapper .modal .footer apollo-button:last-child{margin:0 0px 0px 6px}.isopen{opacity:1;visibility:visible;transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.isopen .modal{transform:translate(-50%, 90px)}@media (max-width: 600px){.modal-wrapper .modal{width:100%;bottom:0;transform:translate(-50%, 100%);opacity:1}.isopen .modal{transform:translate(-50%, 0)}}";

const MarksModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
MarksModal.style = marksModalCss;

const marksSpinnerScss = "loading-spinner{\r\n  svg {\r\n      width: 2rem;\r\n      height: 2rem;\r\n      &.spinner-android {\r\n          animation: rotate 2s linear infinite;\r\n          & .path {\r\n              stroke-linecap: round;\r\n              animation: dash 1.5s ease-in-out infinite;\r\n          }\r\n      }\r\n      &.spinner-ios {\r\n          animation: iosIntro .6s;\r\n          path:nth-of-type(1) {\r\n              animation: pulse 1s infinite linear;\r\n          }\r\n          path:nth-of-type(2) {\r\n              animation: pulse 1s -.083s infinite linear;\r\n          }\r\n          path:nth-of-type(3) {\r\n              animation: pulse 1s -.166s infinite linear;\r\n          }\r\n          path:nth-of-type(4) {\r\n              animation: pulse 1s -.249s infinite linear;\r\n          }\r\n          path:nth-of-type(5) {\r\n              animation: pulse 1s -.332s infinite linear;\r\n          }\r\n          path:nth-of-type(6) {\r\n              animation: pulse 1s -.415s infinite linear;\r\n          }\r\n          path:nth-of-type(7) {\r\n              animation: pulse 1s -.498s infinite linear;\r\n          }\r\n          path:nth-of-type(8) {\r\n              animation: pulse 1s -.581s infinite linear;\r\n          }  \r\n          path:nth-of-type(9) {\r\n              animation: pulse 1s -.664s infinite linear;\r\n          }\r\n          path:nth-of-type(10) {\r\n              animation: pulse 1s -.747s infinite linear;\r\n          }\r\n          path:nth-of-type(11) {\r\n              animation: pulse 1s -.83s infinite linear;\r\n          }\r\n          path:nth-of-type(12) {\r\n              animation: pulse 1s -.913s infinite linear;\r\n          }\r\n        }\r\n          \r\n  }\r\n\r\n\r\n  // Keyframes\r\n\r\n  @keyframes rotate {\r\n      100% {\r\n          transform: rotate(360deg);\r\n      }\r\n  }\r\n\r\n  @keyframes dash {\r\n      0% {\r\n          stroke-dasharray: 1, 150;\r\n          stroke-dashoffset: 0;\r\n      }\r\n      50% {\r\n          stroke-dasharray: 90, 150;\r\n          stroke-dashoffset: -35;\r\n      }\r\n      100% {\r\n          stroke-dasharray: 90, 150;\r\n          stroke-dashoffset: -124;\r\n      }\r\n  }\r\n  \r\n\r\n  @keyframes pulse {\r\n      50% { fill-opacity: .2 }\r\n      to { fill-opacity: 1 }\r\n  }\r\n  \r\n  @keyframes iosIntro {\r\n      from {\r\n          transform: scale(0);\r\n          opacity: 0;\r\n      }\r\n      to {\r\n          transform: scale(1);\r\n          opacity: 1;\r\n      }\r\n  }\r\n\r\n}";

const MarksSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
MarksSpinner.style = marksSpinnerScss;

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}.v{font-weight:bold;vertical-align:super;font-size:xx-small}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
MyComponent.style = myComponentCss;

export { MarksButton as marks_button, MarksIntegration as marks_integration, MarksModal as marks_modal, MarksSpinner as marks_spinner, MyComponent as my_component };

//# sourceMappingURL=marks-button_5.entry.js.map