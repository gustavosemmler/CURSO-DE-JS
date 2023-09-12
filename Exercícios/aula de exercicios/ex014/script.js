function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if(hora >= 4 && hora < 12){
        img.src = 'manhã.png'
        document.body.style.background = '#d2cecd'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#d15306'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#071c1f'
    }

}


