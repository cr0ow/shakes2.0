function switchView(name) {
    const where = document.getElementById('where')
    if(where.innerText == name) return
    where.innerText = name

    const content = document.getElementById('content')
    content.innerHTML = null

    const back = document.createElement('button')
    back.classList = 'exitButton'
    back.setAttribute('onclick','back()')
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
                photo.style.backgroundImage = 'url("img/traveller' + random(4).toString() + '.png")'
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
}

function options() {
    body = document.getElementsByTagName('body')
    body.setAttribute()
}

function random(max) {
    number = Math.ceil(Math.random()*max)
    console.log(number)
    return number
}
