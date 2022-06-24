class ApiService {
    constructor( URL ) {
        this.URL = URL
    }

    async createPost( post ) {
        try {
            const request = new Request( this.URL + "/posts.json", {
                method: "post",
                body: JSON.stringify( post )
            })

            const response = await fetch( request )
        }
        catch (e) {
            console.error( e )
        }
    }

    async getPosts() {
        try {
            const request = new Request( this.URL + "/posts.json" )

            const response = await fetch( request )
            return await response.json()
        }
        catch (e) {
            console.error( e )
        }
    }
}


export const apiService = new ApiService( "https://mytwitter-a26d7-default-rtdb.europe-west1.firebasedatabase.app" )