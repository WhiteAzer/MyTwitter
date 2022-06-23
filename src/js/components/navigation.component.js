import { Component } from "../core/component"

export class Navigation extends Component {
    constructor( selector ) {
        super( selector )
        this.buttons = []
    }

    init() {
        this.$el.addEventListener( "click", clickHandler.bind(this) )
    }

    setButtons( buttons ) {
        this.buttons = buttons
    }
}

function clickHandler( e ) {
    e.preventDefault()

    if ( e.target.classList.contains( "navigation-list__item-link" ) ) {
        Array.from( this.$el.querySelectorAll( ".navigation-list__item-link" ) ).forEach(
            item => item.classList.remove( "active" )
        )

        e.target.classList.add( "active" )

        this.buttons.forEach( btn =>
            btn.name !== e.target.dataset.name
                ? btn.item.hide()
                : btn.item.shaw()
        )
    }
}