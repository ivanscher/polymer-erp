/**
 * Created by ivans on 08/03/2018.
 */

class ArmacaoPart extends Polymer.Element {
    static get is() {
        return 'armacaopart-page';
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

}

window.customElements.define(ArmacaoPart.is, ArmacaoPart);