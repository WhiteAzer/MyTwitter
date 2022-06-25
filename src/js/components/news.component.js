import { Component } from "../core/component"
import { apiService } from "../services/api.service"
import { transformService } from "../services/transform.service"
import { postRender } from "../templates/post.template"

export class News extends Component {
    constructor( selector, loader ) {
        super( selector )
        this.loader = loader
    }

    init() {
        this.onShaw()

        this.$el.addEventListener( "click", likedHandler.bind( this ) )
    }

    async onShaw() {
        this.loader?.shaw()

        const fbData = await apiService.getPosts()
        const data = transformService.fbPostsTransform( fbData )
        const HTMLData = data.map( post => postRender( post ) )

        this.loader?.hide()

        this.$el.innerHTML = HTMLData.reverse().join("")
    }
}

function likedHandler( e ) {
    const btn = e.target.closest(".btn")

    if ( btn ) {
        let liked = JSON.parse( localStorage.getItem( "liked" ) ) || []

        if ( btn.classList.contains("liked" ) ) {
            btn.classList.add( "unliked" )
            btn.classList.remove( "liked" )
            liked = liked.filter( item => item !== btn.dataset.id)
        } else {
            btn.classList.add( "liked" )
            btn.classList.remove( "unliked" )
            liked.push( btn.dataset.id )
        }

        localStorage.setItem( "liked", JSON.stringify( liked ) )
    }
}