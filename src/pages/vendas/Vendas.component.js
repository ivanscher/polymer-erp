class Vendas extends Polymer.Element {
    static get is() {
        return 'vendas-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
            selected: {
                type: Number,
                value: 0,
            },selected2: {
                type: Number,
                value: 0,
            }

        };

    }
    ready() {
        super.ready();
        this.$.addP.addEventListener('click', this.openBy.bind(this), false);
        this.$.addM.addEventListener('click', this.openBy.bind(this), false);
        this.$.searchP.addEventListener('click', this.openBy.bind(this), false);
        this.$.searchM.addEventListener('click', this.openBy.bind(this), false);
    }
    openBy() {
        this.$.actions.open();
    }
}

window.customElements.define(Vendas.is, Vendas);