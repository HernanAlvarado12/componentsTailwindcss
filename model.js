const dropdownMenuNavigation = document.getElementById('dropdownMenuNavigation')
const dropdownMenuButton = document.querySelector('#dropdownMenuNavigation > nav > div + div')


document.addEventListener('click', event => {
    if(event.target.matches('#dropdownMenuNavigation > nav div:nth-child(2) :is(div.w-3, span)')) {
        dropdownMenuNavigation.classList.toggle('active')
    }else if(event.target.matches('#navigationMenuIndication > li > ion-icon')) {
        const indicator = document.querySelector('#navigationMenuIndication li.indicator')
        indicator.classList.remove('indicator')
        event.target.parentElement.classList.add('indicator')
    }
})