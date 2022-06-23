import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"

export class Create extends Component {
    constructor( selector ) {
        super( selector )
    }

    init() {
        this.form = new Form(this.$el, {
            title: [Validators.isEmpty],
            text: [Validators.isEmpty, Validators.minLength( 3 )]
        })

        this.$el.addEventListener( "submit", submitHandler.bind( this ) )
    }
}

function submitHandler( e ) {
    e.preventDefault()

    if ( this.form.isValid() ) {
        const data = this.form.Data
        console.log( data )
    }
}