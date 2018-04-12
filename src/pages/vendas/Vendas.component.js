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
            },selected3: {
                type: Number,
                value: 0,
            },selected4: {
                type: Number,
                value: 0,
            },selected5: {
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
       this.$.addProd.addEventListener('click', this.golink.bind(this), false);
    }
    openBy() {
        this.$.actions.open();
    }

    golink(el) {
        // Wait for ripple to finish.
        location.href = '/dashboard/listsgridinfo';
    }
}

window.customElements.define(Vendas.is, Vendas);