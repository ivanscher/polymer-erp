/**
 * Created by ivans on 30/01/2018.
 */

class ListsGrid extends Polymer.Element {
    static get is() {
        return 'listsgrid-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
            selected: {
                type: Number,
                value: 0,
            },
            selected2: {
                type: Number,
                value: 0,
            },
            dataList: {
                type: Array,
                value: [],
            },
        };
    }

    handleResponse({detail}) {
        const {response} = detail;
        this.dataList = response;
    }

    onChangeValueSearch({detail}) {
        const {value} = detail;
        const data = this.data;

        const filteredData = data.filter((item) => item.name.toLowerCase().includes(value) && item);

        this.dataList = filteredData;
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
        location.href = '/dashboard/itens';
    }
}

window.customElements.define(ListsGrid.is, ListsGrid);
