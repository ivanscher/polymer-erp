/**
 * Created by ivans on 08/03/2018.
 */

class Oculosdegrau extends Polymer.Element {
    static get is() {
        return 'oculosdegrau-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String

        };

    }
}

window.customElements.define(Oculosdegrau.is, Oculosdegrau);