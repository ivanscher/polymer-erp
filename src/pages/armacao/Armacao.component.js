/**
 * Created by ivans on 08/03/2018.
 */

class Armacao extends Polymer.Element {
    static get is() {
        return 'armacao-page';
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
        this.$.add.addEventListener('click', this.golink.bind(this), false);
    }

    golink(el) {
        // Wait for ripple to finish.
        location.href = '/dashboard/vendas';
    }

}

window.customElements.define(Armacao.is, Armacao);