// btn to up

let btn = document.querySelector('.btn-up')
let header = document.querySelector('header')

// show btn
window.onscroll = function () {
    if (window.scrollY >= 100) {
        btn.style.display = 'block'
        header.style.backgroundColor = 'rgba(12, 90, 219, 0.7)'

    } else {
        btn.style.display = 'none'
        header.style.backgroundColor = 'transparent'

    }
}

// move to up 
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
