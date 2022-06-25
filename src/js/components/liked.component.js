import { Component } from "../core/component"
import { apiService } from "../services/api.service"
import { transformService } from "../services/transform.service"
import { postRender } from "../templates/post.template"

export class Liked extends Component {
    constructor( selector, loader ) {
        super( selector )
        this.loader = loader
    }

    init() {
        this.onShaw()

        this.$el.addEventListener( "click", unlikedHandler.bind( this ) )
    }

    async onShaw() {
        const liked = JSON.parse( localStorage.getItem("liked") ) || []
        console.log( liked.length )
        if ( liked.length ) {
            this.loader?.shaw()
            const fbData = await apiService.getPostsById(liked)
            const data = transformService.fbPostsTransform(fbData)
            const HTMLData = data.map(post => postRender(post))

            this.loader?.hide()

            this.$el.innerHTML = HTMLData.reverse().join("")
        } else {
            this.$el.innerHTML = `<h1 class="liked-is-empty">Список пуст</h1>`
        }
    }
}

function unlikedHandler( e ) {
    const btn = e.target.closest(".btn")

    if ( btn ) {
        let liked = JSON.parse( localStorage.getItem( "liked" ) ) || []
        liked = liked.filter( item => item !== btn.dataset.id)

        let post = btn.closest( ".news-item" )
        post.classList.add("fade")
        setTimeout(() => {
            post.remove();

            if ( !liked.length ) this.$el.innerHTML = `<h1 class="liked-is-empty">Список пуст</h1>`
        }, 500);

        localStorage.setItem( "liked", JSON.stringify( liked ) )
    }
}