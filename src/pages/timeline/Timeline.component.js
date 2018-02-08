/**
 * Created by ivans on 30/01/2018.
 */

class Timeline extends Polymer.Element {
    static get is() {
        return 'timeline-page';
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

window.customElements.define(Timeline.is, Timeline);
