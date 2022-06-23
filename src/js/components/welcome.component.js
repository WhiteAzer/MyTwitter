import { Component } from "../core/component"

export class Welcome extends Component {
    constructor( selector ) {
        super( selector )
    }

    init() {
        if ( localStorage.getItem( "isVisited" ) ) {
            document.querySelector(".main").classList.remove( "hide" )
            this.hide()
            return
        }


        document.querySelector(".main").classList.add( "hide" )
        const btn = this.$el.querySelector( ".welcome-btn")
        btn.addEventListener( "click", clickHandler.bind(this) )
    }
}

function clickHandler() {
    localStorage.setItem( "isVisited", true )
    this.hide()
    document.querySelector(".main").classList.remove( "hide" )
}