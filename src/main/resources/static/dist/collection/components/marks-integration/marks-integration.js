import { Host, h } from "@stencil/core";
export class MarksIntegration {
    constructor() {
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
    static get is() { return "marks-integration"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["marks-integration.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["marks-integration.css"]
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "data": {},
            "drivers": {}
        };
    }
}
//# sourceMappingURL=marks-integration.js.map
