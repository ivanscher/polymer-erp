/**
 * Created by ivans on 28/03/2018.
 */

class Lentes extends Polymer.Element {
    static get is() {
        return 'lentes-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
            selected: {
                type: Number,
                value: 0
            },
            selected2:{
                type: Number,
                value: 0
            }

        };

    }

    ready() {
        super.ready();
    }


}

window.customElements.define(Lentes.is, Lentes);