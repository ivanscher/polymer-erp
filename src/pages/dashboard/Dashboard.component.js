/**
 * Created by ivans on 30/01/2018.
 */

class Dashboard extends Polymer.Element {
    static get is() {
        return 'dashboard-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
        };
    }
}

window.customElements.define(Dashboard.is, Dashboard);
