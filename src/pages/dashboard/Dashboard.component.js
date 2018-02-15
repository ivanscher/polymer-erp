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
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged',
            },
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

    _routePageChanged(page) {
        // If no page was found in the route data, page will be an empty string.
        // Default to 'view1' in that case.
        this.page = page || 'contatos';

    }
    _pageChanged(page) {
        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl(page + '.html');
        Polymer.importHref(
            resolvedPageUrl,
            null,
            null,
            true);
    }
}

window.customElements.define(Dashboard.is, Dashboard);
