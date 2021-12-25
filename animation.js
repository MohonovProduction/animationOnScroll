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
