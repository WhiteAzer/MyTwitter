export class Component {
    constructor(selector) {
        this.$el = document.querySelector( selector )
        this.init()
    }

    init() {}

    hide() {
        this.$el.classList.add( "hide" )
    }

    shaw() {
        this.$el.classList.remove( "hide" )
    }
}