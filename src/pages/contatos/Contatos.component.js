class ContatosPage extends Polymer.Element {
    constructor() {
        super();
    }

    static get is() {
        return 'contatos-page';
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
            },

        };
    }

    ready() {
        super.ready();

        this.$.avatar.addEventListener('click', this.openBy.bind(this), false);
    }
    openBy() {
        this.$.actions.open();
    }
}

window.customElements.define(ContatosPage.is, ContatosPage);
