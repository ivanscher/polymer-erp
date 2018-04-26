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
            },
            dataList: {
                type: Array,
                value: [],
            },
            listclass: {
                type: String,
                value: 'show' // init the value to true so it will be hidden on page load
            },
            gridclass: {
                type: String,
                value: 'hide' // init the value to true so it will be hidden on page load
            }

        };

    }
    handleResponse({detail}) {
        const {response} = detail;
        this.dataList = response;
    }
    openBy() {
        this.$.actions.open();
    }
    onChangeValueSearch({detail}) {
        const {value} = detail;
        const data = this.data;

        const filteredData = data.filter((item) => item.name.toLowerCase().includes(value) && item);

        this.dataList = filteredData;
    }
    ready() {
        super.ready();
        this.$.add.addEventListener('click', this.golink.bind(this), false);
        this.$.buttonfilter.addEventListener('click', this.openBy.bind(this), false);
        this.$.viewmodule.addEventListener('click', this.gridView.bind(this), false);
        this.$.viewlist.addEventListener('click', this.listView.bind(this), false);
    }
    listView(){
        this.listclass='show';
        this.gridclass='hide';

    }
    gridView(){
        this.listclass='hide';
        this.gridclass='show';
    }

    golink(el) {
        // Wait for ripple to finish.
        location.href = '/dashboard/vendas';
    }

}

window.customElements.define(Armacao.is, Armacao);