/**
 * Created by ivans on 30/01/2018.
 */

class Lists extends Polymer.Element {
    static get is() {
        return 'lists-page';
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
    colorForItem(item) {
        return item ? (item.status == 0 ? 'blue' : 'red') : '';
    }
    iconForItem(item) {
        return item ? (item.status == 0 ? 'check' : 'clear') : '';
    }

    ready() {
        super.ready();
        this.$.add.addEventListener('click', this.golink.bind(this), false);
    }
    openBy() {
        this.$.actions.open();
    }
    golink(el) {
        // Wait for ripple to finish.
        location.href = '/dashboard/contatos';
    }
}

window.customElements.define(Lists.is, Lists);
