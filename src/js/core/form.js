export class Form {
    constructor(form, textFields) {
        this.form = form
        this.textFields = textFields
        this.init()
    }

    init() {
        Object.keys( this.textFields ).forEach(
            text => textCustomer( this.form[text] )
        )
    }

    get Data() {
        const data = {}

        Object.keys( this.textFields ).forEach(
            text => data[text] = this.form[text].value
        )

        return data
    }

    isValid() {
        let isValid = true

        Object.keys( this.textFields ).forEach( text => {
            const validators = this.textFields[text]

            let isTextValid = validators.reduce( (prev, validator ) => validator(this.form[text].value) && prev, true)

            isValid = isValid && isTextValid
        })

        return isValid
    }
}

function textCustomer(text) {
    text.style.height = localStorage.getItem( text.name )
    text.style.overflowY = "hidden"

    text.addEventListener("input", textInput)

    function textInput() {
        this.style.height = "auto"
        this.style.height = `${this.scrollHeight}px`
        localStorage.setItem(text.name, `${this.scrollHeight}px`)
    }
}