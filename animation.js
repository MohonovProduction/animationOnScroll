class Element {
    constructor(html, rect) {
        this.html = html
        this.rect = html.getClientRects()[0]
    }
}

const title = new Element(
    document.querySelector('.title'),
)
console.log(title)

document.addEventListener('scroll', () => {
    //console.log(`el ${title.rect.top}, window ${window.scrollY}`)

    if (Math.round(title.rect.top) === Math.round(window.scrollY)) {
        console.log('hi')
    }
})

function observe(style, stepDelay = 0) {
    const styleVisible = `${style}--visible`
    const styleClass = `.${style}`
    const styleClassVisible = `.${style}--visible`

    //remove visible classes
    const elements = document.querySelectorAll(styleClass)
    elements.forEach( el => el.classList.remove(styleVisible))

    if (stepDelay === 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styleVisible)
                } else {
                    //entry.target.classList.remove(styleVisible)
                }
            })
        })

        elements.forEach(el => observer.observe(el))
    } else {
        const observer = new IntersectionObserver(entries => {
            let step = 0
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add(styleVisible), step)
                } else {
                    //entry.target.classList.remove(styleVisible)
                }
                step += stepDelay
            })
        })

        elements.forEach(el => observer.observe(el))
    }
}

observe('opacity')
observe('right')
observe('left')
observe('top')
observe('increase', 300)
observe('jump')
