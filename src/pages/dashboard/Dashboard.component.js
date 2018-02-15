/**
 * Created by ivans on 30/01/2018.
 */

class Dashboard extends Polymer.Element {
    constructor() {
        super();
    }

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

    toggle() {
        this.$.collapse.toggle();
    }

    ready() {
        super.ready();
        
        const {
            buttonMenu,
            menuDrawer,
        } = this.$;

        buttonMenu.addEventListener('click', (e) => { menuDrawer.toggle(); })   
    }
}

window.customElements.define(Dashboard.is, Dashboard);
