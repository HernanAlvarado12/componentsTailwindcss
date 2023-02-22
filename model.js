const dropdownMenuNavigation = document.getElementById('dropdownMenuNavigation')
const dropdownMenuButton = document.querySelector('#dropdownMenuNavigation > nav > div + div')


document.addEventListener('click', event => {
    if(event.target.matches('#dropdownMenuNavigation > nav div:nth-child(2) :is(div.w-3, span)')) {
        dropdownMenuNavigation.classList.toggle('active')
    }
})