function switchView(name) {
    const content = document.getElementById('content')
    content.innerHTML = null

    const back = document.createElement('button')
    back.classList = 'exitButton'
    back.setAttribute('onclick','back()')


    switch(name) {
        case 'karczma':
            content.style.backgroundImage = 'url(img/tavern.png)'
            break
        case 'arena':
            content.style.backgroundImage = 'url(img/arena.png)'
            break
        case 'zbrojownia':
            content.style.backgroundImage = 'url(img/weapon_shop.png)'
            break
        case 'gabinet':
            content.style.backgroundImage = 'url(img/magic_shop.png)'
            break
        case 'stajnia':
            content.style.backgroundImage = 'url(img/stable.png)'
            break
        case 'lochy':
            content.style.backgroundImage = 'url(img/dungeon.png)'
            break
        case 'twierdza':
            content.style.backgroundImage = 'url(img/fortress.png)'
            break
        case 'gildia':
            content.style.backgroundImage = 'url(img/guild.png)'
            break
        case 'poczta':
            content.style.backgroundImage = 'url(img/post.png)'
            break
        case 'sala chwały':
            content.style.backgroundImage = 'url(img/fame.png)'
            break
    }
    content.append(back);
}

function back() {
    const content = document.getElementById('content')
    content.innerHTML = null
    content.style.backgroundImage = 'url(img/town.png)'
}

function options() {
    body = document.getElementsByTagName('body')
    body.setAttribute()
}