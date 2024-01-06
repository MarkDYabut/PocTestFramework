import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './marks-button2.js';
import { d as defineCustomElement$2 } from './marks-spinner2.js';

const marksIntegrationCss = ":host{display:block}";

const MarksIntegration$1 = /*@__PURE__*/ proxyCustomElement(class MarksIntegration extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return marksIntegrationCss; }
}, [1, "marks-integration", {
        "isLoading": [32],
        "data": [32],
        "drivers": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["marks-integration", "marks-button", "marks-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "marks-integration":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MarksIntegration$1);
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

const MarksIntegration = MarksIntegration$1;
const defineCustomElement = defineCustomElement$1;

export { MarksIntegration, defineCustomElement };

//# sourceMappingURL=marks-integration.js.map