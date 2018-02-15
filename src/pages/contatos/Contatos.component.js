/**
 * Created by ivans on 30/01/2018.
 */

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
            console.log(paperRadioValue.selected); // actually value

            // here you can get the value every when value is changed.
            // values on child elements are created by `name` property
            // to get the value of the radio group, you get the property called `selected`, see the example above.
        })
    }
}

window.customElements.define(Contatos.is, Contatos);
