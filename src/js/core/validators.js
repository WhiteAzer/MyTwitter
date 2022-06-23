export class Validators {
    static isEmpty( value = "" ) {
        return value && value.trim()
    }

    static minLength( length ) {
        return value => {
            return value.length >= length
        }
    }
}