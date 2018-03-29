/**
 * Created by ivans on 28/03/2018.
 */

class LentesPart extends Polymer.Element {
    static get is() {
        return 'lentespart-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
            selected3:{
                type: Number,
                value: 0
            }

        };

    }

    ready() {
        super.ready();
    }


}

window.customElements.define(LentesPart.is, LentesPart);