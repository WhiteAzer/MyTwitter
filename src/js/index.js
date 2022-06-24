import "../styles/index.scss"
import { Welcome } from "./components/welcome.component"
import { Navigation } from "./components/navigation.component"
import { News } from "./components/news.component"
import { Create } from "./components/create.component"
import { Liked } from "./components/liked.component"
import { Loader } from "./components/loader.component"

new Welcome( ".welcome" )

const loader = new Loader( ".loader" )

const nav = new Navigation( ".navigation" )

const news = new News( ".news", loader )
const create = new Create( ".create" )
const liked = new Liked( ".liked" )

nav.setButtons( [
    {
        name: "news",
        item: news
    },
    {
        name: "create",
        item: create
    },
    {
        name: "liked",
        item: liked
    }
] )


