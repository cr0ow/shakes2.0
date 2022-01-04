function switchView(name) {
    const where = document.getElementById('where')
    if(where.innerText == name) return
    where.innerText = name

    const content = document.getElementById('content')
    content.innerHTML = null

    if(name == 'miasto') {
        townView(content)
        return
    }

    const back = document.createElement('button')
    back.classList = 'exitButton'
    back.setAttribute('onclick','switchView("miasto")')
    content.append(back)

    const container = document.createElement('div')
    container.style.height = '91%'
    container.style.width = '100%'
    container.style.textAlign = 'center'
    content.append(container)

    switch(name) {
        case 'karczma':
            tavernView(container)
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
}

function townView(content) {
    content.style.backgroundImage = 'url(img/town.png)'
    const title = document.createElement('span')
    title.innerHTML = '<h3>Witaj w mieście S&F!</h3>'
    title.style.textShadow = '2px 2px 2px #000'
    title.style.color = 'rgb(247, 213, 169)'
    content.append(title)

    const wartaBack = document.createElement('div')
    wartaBack.classList = 'cardBack'
    const warta = document.createElement('button')
    warta.classList = 'card'
    const photo = document.createElement('div')
    photo.classList = 'window'
    photo.style.backgroundImage = 'url("img/tower.png")'

    warta.style.position = 'relative'
    warta.style.top = '80px'
    warta.style.left = '240px'

    wartaBack.style.position = 'relative'
    wartaBack.style.top = '159px'
    wartaBack.style.left = '467px'

    warta.append(photo)
    warta.append('warta')
    content.append(wartaBack)
    content.append(warta)
}

function tavernView(content) {
    for(i=0; i<4; i++) {
        const windowBack = document.createElement('div')
        windowBack.classList = 'cardBack'
        content.append(windowBack)
    }

    for(i=0; i<4; i++) {
        const window = document.createElement('button')
        window.classList = 'card'
        const photo = document.createElement('div')
        photo.classList = 'window'
        switch(i) {
            case 0:
                photo.style.backgroundImage = 'url("img/innkeeper.png")'
                window.append(photo)
                window.append('karczmarz')
                break;
            case 1:
                photo.style.backgroundImage = 'url("img/traveller' + random(1, 4).toString() + '.png")'
                window.append(photo)
                window.append('podróżnik')
                break;
            case 2:
                photo.style.backgroundImage = 'url("img/gambler.png")'
                window.append(photo)
                window.append('hazardzista')
                break;
            case 3:
                photo.style.backgroundImage = 'url("img/toilet.png")'
                window.append(photo)
                window.append('toaleta')
                break;
        }
        content.append(window)
    }

    const progress = document.createElement('progress')
    const progressBack = document.createElement('progress')
    progress.classList = 'progress'
    progressBack.classList = 'progressBack'
    progress.max = '100'
    progress.value = '70'
    const span = document.createElement('span')
    span.classList = 'header'
    span.innerHTML = '<h6>AWANTURNICZOŚĆ:  ' + progress.value.toString() +  '</h6>'
    content.append(span)
    content.append(progress)
    content.append(progressBack)
}

function back() {
    const content = document.getElementById('content')
    content.innerHTML = null
    content.style.backgroundImage = 'url(img/town.png)'
    const where = document.getElementById('where')
    where.innerText = 'town'
}

function options() {
    body = document.getElementsByTagName('body')
    body.setAttribute()
}

function random(min, max) {
    return Math.ceil(Math.random()*max)
}
