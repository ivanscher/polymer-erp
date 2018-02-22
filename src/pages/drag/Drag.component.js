/**
 * Created by ivans on 30/01/2018.
 */

let dragSrcEl;
let itens;
class Drag extends Polymer.Element {
    static get is() {
        return 'drag-page';
    }
    static get properties() {
        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String
        };
    }

    handleDragStart(e) {
        // Target (this) element is the source node.
        this.style.opacity = '0.7';

        dragSrcEl = this;

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

    allowDrop(ev) {
        ev.preventDefault();
    }
    handleDrop(ev) {
        ev.preventDefault();
        var data=ev.dataTransfer.getData("Text");
        console.log(data)
        console.log(this)
        ev.target.appendChild(dragSrcEl.cloneNode(true));

        return false;
    }

    handleDragLeave(e) {
        this.style.opacity = '1';
        this.classList.remove('over');  // this / e.target is previous target element.
    }

    handleDragEnd(e) {
        // this/e.target is the source node.

        for(let i=0; i<itens.length; i++){
         itens[i].classList.remove('over');
        };

    }

    ready() {
        super.ready();

        itens = Polymer.dom(this.$.sidenav).children;

        for(let i=0; i<Polymer.dom(this.$.sidenav).children.length; i++){

            Polymer.dom(this.$.sidenav).children[i].addEventListener('dragstart', this.handleDragStart, false);
            Polymer.dom(this.$.sidenav).children[i].addEventListener('dragleave', this.handleDragLeave, false);

        }
        this.$.droparea.addEventListener('drop', this.handleDrop, false);
        this.$.droparea.addEventListener('dragover', this.allowDrop, false);
    }
}

window.customElements.define(Drag.is, Drag);
