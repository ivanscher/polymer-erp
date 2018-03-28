/**
 * Created by ivans on 30/01/2018.
 */

class Chat extends Polymer.Element {
    static get is() {
        return 'chat-page';
    }
    static get properties() {

        return {
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
            items: {
                type: Array,
                value: function() {
                    return [
                        {
                            "index": 1,
                            "name": "Isabel",
                            "text": "Maecenas eget neque id velit egestas aliquam a mattis elit. ",
                            "image": "https://t3.ftcdn.net/jpg/00/86/53/60/500_F_86536022_lKr2vgGM7HgOiRqjipkMKZkdt1mlJMqu.jpg",
                        },
                        {
                            "index": 2,
                            "name": "Conrad",
                            "text": "Maecenas eget neque id velit egestas aliquam a mattis elit. Maecenas eget neque id velit egestas aliquam a mattis elit. Curabitur pharetra ut leo a pretium. Aliquam tempor id erat et ultrices. Aenean blandit ultricies enim vel bibendum. In vitae condimentum lacus. ",
                            "image": "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png",
                        },
                        {
                            "index": 3,
                            "name": "Isabel",
                            "text": "Maecenas eget neque id velit egestas aliquam a mattis elit. Curabitur pharetra ut leo a pretium. Aliquam tempor id erat et ultrices. Aenean blandit ultricies enim vel bibendum. In vitae condimentum lacus. ",
                            "image": "https://t3.ftcdn.net/jpg/00/86/53/60/500_F_86536022_lKr2vgGM7HgOiRqjipkMKZkdt1mlJMqu.jpg",
                        },
                        {
                            "index": 4,
                            "name": "Conrad",
                            "text": "OK.",
                            "image": "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png",
                        },
                        {
                            "index": 1,
                            "name": "Isabel",
                            "text": "Maecenas eget neque id velit egestas aliquam a mattis elit. ",
                            "image": "https://t3.ftcdn.net/jpg/00/86/53/60/500_F_86536022_lKr2vgGM7HgOiRqjipkMKZkdt1mlJMqu.jpg",
                        },
                        {
                            "index": 2,
                            "name": "Conrad",
                            "text": "Maecenas eget neque id velit egestas aliquam a mattis elit. Maecenas eget neque id velit egestas aliquam a mattis elit. Curabitur pharetra ut leo a pretium. Aliquam tempor id erat et ultrices. Aenean blandit ultricies enim vel bibendum. In vitae condimentum lacus. ",
                            "image": "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png",
                        },

                    ];
                }
            }
        };

    }
    attached() {
        // Use the document element
        this.$.list.scrollTarget = this.ownerDocument.documentElement;
    }
}

window.customElements.define(Chat.is, Chat);
