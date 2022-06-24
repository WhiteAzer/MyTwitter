import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"
import { apiService } from "../services/api.service"

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

async function submitHandler( e ) {
    e.preventDefault()

    if ( this.form.isValid() ) {
        const data = this.form.Data
        data.date = new Date().toLocaleString()

        await apiService.createPost( data )

        this.form.clearForm()

        document.body.insertAdjacentHTML("afterbegin", `
        <div class="success-post">
            <h1 class="success-post-text">Пост опубликован</h1>
        </div>
        `)

        setTimeout( () => document.querySelector(".success-post").classList.add("fade"), 500)
    }
}