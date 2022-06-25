export function postRender( post ) {
    const btn = JSON.parse( localStorage.getItem("liked") ).includes( post.id )
        ? `<button class="news-item__likeNdate-btn btn liked" data-id="${post.id}">
                <svg height="40px" width="40px" viewBox="0 0 512 512">
                    <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
                </svg>
            </button>`
        : `<button class="news-item__likeNdate-btn btn unliked" data-id="${post.id}">
                <svg height="40px" width="40px" viewBox="0 0 512 512">
                    <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
                </svg>
            </button>`

    return `
    <div class="news-item">
        <h2 class="news-item__title">
            ${post.title}
        </h2>
        <p class="news-item__text">
            ${post.text}
        </p>
        <div class="news-item__likeNdate">
            ${btn}
            <p class="news-item__likeNdate-date">
                ${post.date}
            </p> 
        </div>
    </div>
    `
}