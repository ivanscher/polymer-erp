class Contatos extends Polymer.Element {
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
            // the paper-dropdown value is get using properties, inside de component is setup like {{dropdownValue}},
            // the same name declared on properties here, the value is the value what will be list item value.
            dropdownValue: {
                type: String,
                value: 'Masculino'
            }
        };
    }

    ready() {
        super.ready();
        const {
            paperRadioValue,
            paperSelect,
        } = this.$;

        paperRadioValue.addEventListener('click', (e) => {
            console.log(paperRadioValue.selected);
        })
    }
}

window.customElements.define(Contatos.is, Contatos);
