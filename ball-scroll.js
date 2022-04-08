function applyArticleOffset()
{
    let ballHeight = document.getElementById('ball').offsetHeight

    let articles = document.querySelectorAll('#section-3 article')
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i]

        let articleHeight = article.offsetHeight
        let articleOffset = (ballHeight - articleHeight) / 2

        article.style.paddingTop = articleOffset + 'px'
        article.style.paddingBottom = articleOffset + 'px'
    }
}

function initBallScroll()
{

    let ball = document.getElementById('ball')

    const topOffset = 50
    const startRotation = -30
    const travelRotation = 60

    let endBallTop = window.innerHeight - document.querySelector('#section-3 article:last-child').offsetHeight
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    window.onscroll = (event) => {
        let currentRotationDeg = window.scrollY * travelRotation / scrollHeight
        let currentTop = topOffset + (window.scrollY * (endBallTop - topOffset) / scrollHeight)
        ball.style.transform = 'rotate(' + (startRotation + currentRotationDeg) + 'deg)'
        ball.style.top = currentTop + 'px'
    }
}

function run()
{
    if (window.innerWidth < 768) {
        return
    }

    applyArticleOffset()
    initBallScroll()
}

run()
