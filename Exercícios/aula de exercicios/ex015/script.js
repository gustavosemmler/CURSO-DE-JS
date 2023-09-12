function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança homem.png')
            } else if (idade <30) {
                //jovem
                img.setAttribute('src', 'flip3.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade <10) {
                //criança
                img.setAttribute ('src', 'criança mulher.png')
            } else if (idade <30) {
                //jovem
                img.setAttribute ('src', 'gabi.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'adulta.png')
            } else {
                //idoso
                img.setAttribute ('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img)
    }
}