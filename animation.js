let isScrolling = false

window.addEventListener('scroll', throttleScroll, false)

// HANDLE LIMIT by FPS

function throttleScroll(e) {
    if (isScrolling === false) {
        window.requestAnimationFrame( () => {
            scrolling(e)
            isScrolling = false
        })
    }
    isScrolling = true
}

document.addEventListener('DOMContentLoaded', scrolling, false)

const items = document.querySelectorAll('.animated')
const box1 = document.querySelector('.box1')
const stepItems = document.querySelectorAll('.step-animated')

function scrolling() {
    for (let item of items) {
        if (isPartiallyVisible(item)) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    }

    if (isPartiallyVisible(box1)) {
        let timeout = 100
        for (let step of stepItems) {
            setTimeout(() => step.classList.add('active-scale'), timeout)
            timeout += 300
        }

    } else {
        for (let step of stepItems) step.classList.remove('active-scale')
    }
}

function isFullyVisible(el) {
    const elementBoundary = el.getBoundingClientRect()

    const top = elementBoundary.top
    const bottom = elementBoundary.bottom

    return (( top >= 0 ) && (bottom <= window.innerHeight))
}

function isPartiallyVisible(el) {
    const elementBoundary = el.getBoundingClientRect()

    const top = elementBoundary.top
    const bottom = elementBoundary.bottom
    const height = elementBoundary.height

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
