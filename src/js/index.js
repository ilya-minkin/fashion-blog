const main = document.querySelector('.main')

const instagramSection = document.querySelector('.our-instagram')

const mainColumn = main.querySelector('.main__column')
const mainAside = main.querySelector('.main__aside')

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= main.offsetTop - 600) {
        mainColumn.style.animationName = `fadeIn`
        mainColumn.style.animationDuration = `.5s`
        mainColumn.style.animationTimingFunction = `ease-in-out`
        mainColumn.style.animationFillMode = `forwards`
        mainColumn.style.animationDelay = `.3s`
        
        mainAside.style.animationName = `fadeIn`
        mainAside.style.animationDuration = `.5s`
        mainAside.style.animationTimingFunction = `ease-in-out`
        mainAside.style.animationFillMode = `forwards`
        mainAside.style.animationDelay = `.7s`
    }

    if (window.pageYOffset >= instagramSection.offsetTop - 650) {
        instagramSection.querySelectorAll('img').forEach(el => el.classList.add('animated-img'))

        instagramSection.querySelector('[data-image-index="1"]').style.animationDelay = `.3s`
        instagramSection.querySelector('[data-image-index="2"]').style.animationDelay = `.4s`
        instagramSection.querySelector('[data-image-index="3"]').style.animationDelay = `.5s`
        instagramSection.querySelector('[data-image-index="4"]').style.animationDelay = `.6s`
        instagramSection.querySelector('[data-image-index="5"]').style.animationDelay = `.7s`
        instagramSection.querySelector('[data-image-index="6"]').style.animationDelay = `.8s`
    }
})