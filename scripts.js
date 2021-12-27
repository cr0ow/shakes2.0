function switchView(name) {
    const content = document.getElementById('content')
    content.innerHTML = null
    switch(name) {
        case 'karczma':
            content.setAttribute('style','background-image:url(img/tavern.png)')
            break
        case 'arena':
            content.setAttribute('style','background-image:url(img/arena.png)')
            break
        case 'zbrojownia':
            content.setAttribute('style','background-image:url(img/weapon_shop.png)')
            break
        case 'gabinet':
            content.setAttribute('style','background-image:url(img/magic_shop.png)')
            break
        case 'stajnia':
            content.setAttribute('style','background-image:url(img/stable.png)')
            break
        case 'lochy':
            content.setAttribute('style','background-image:url(img/dungeon.png)')
            break
        case 'twierdza':
            content.setAttribute('style','background-image:url(img/fortress.png)')
            break
        case 'gildia':
            content.setAttribute('style','background-image:url(img/guild.png)')
            break
        case 'poczta':
            content.setAttribute('style','background-image:url(img/post.png)')
            break
        case 'sala chwały':
            content.setAttribute('style','background-image:url(img/fame.png)')
            break
    }
}

function options() {
    body = document.getElementsByTagName('body')
    body.setAttribute()
}