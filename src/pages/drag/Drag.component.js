/**
 * Created by ivans on 30/01/2018.
 */

class Drag extends Polymer.Element {
    static get is() {
        return 'drag-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
            itens: Array,
            dragSrcEl: Object
        };
    }

    handleDragStart(e) {
        // Target (this) element is the source node.
        this.style.opacity = '0.4';

        this.dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }

        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

        return false;
    }

    handleDragEnter(e) {
        // this / e.target is the current hover target.
        this.classList.add('over');
    }

    handleDrop(e) {
        // this/e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

console.log(this)
console.log(this.dragSrcEl)
        // Don't do anything if dropping the same column we're dragging.
        if (this.dragSrcEl != this) {
            // Set the source column's HTML to the HTML of the columnwe dropped on.
            this.dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }

    handleDragLeave(e) {
        this.style.opacity = '1';
        this.classList.remove('over');  // this / e.target is previous target element.
    }
    handleDragEnd(e) {
        // this/e.target is the source node.
        /*
        for(let i=0; i<this.itens.length; i++){
         this.itens[i].classList.remove('over');
        };
        */
        for(let i=0; i<Polymer.dom(this.$.sidenav).children.length; i++){
            Polymer.dom(this.$.sidenav).children[i].classList.remove('over');
        };
    }

    ready() {
        super.ready();

        this.itens = Polymer.dom(this.$.sidenav).children;

        for(let i=0; i<Polymer.dom(this.$.sidenav).children.length; i++){
            console.log(i)

            Polymer.dom(this.$.sidenav).children[i].addEventListener('dragstart', this.handleDragStart, false);
            Polymer.dom(this.$.sidenav).children[i].addEventListener('dragenter', this.handleDragEnter, false);
            Polymer.dom(this.$.sidenav).children[i].addEventListener('dragover', this.handleDragOver, false);
            Polymer.dom(this.$.sidenav).children[i].addEventListener('dragleave', this.handleDragLeave, false);
            Polymer.dom(this.$.sidenav).children[i].addEventListener('drop', this.handleDrop, false);
            Polymer.dom(this.$.sidenav).children[i].addEventListener('dragend', this.handleDragEnd, false);

        }
    }
}

window.customElements.define(Drag.is, Drag);
