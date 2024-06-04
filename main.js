document.querySelector('.filter').addEventListener('click', function() {
    const menu = document.querySelector('.filter-menu')
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        menu.classList.add('inactive')
    } else {
        menu.classList.remove('inactive')
        menu.classList.add('active')
    }
})
document.querySelector('.inactive-filter').addEventListener('click', function(){
    const menu = document.querySelector('.filter-menu');
    menu.classList.add('inactive')
})
