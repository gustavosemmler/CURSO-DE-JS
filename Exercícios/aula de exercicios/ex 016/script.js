function somar() {
    var n1 = document.getElementById('in1')
    var nf = document.getElementById('inf')
    var np = document.getElementById('inp')
    var res = document.querySelector('.res')
    
    if(in1.value.length == 0 || inf.value.length == 0 || inp.value.length == 0) {
        alert("ERRO, faltam dados")
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = "contando: </br>"
        let i = Number(in1.value)
        let f = Number(inf.value)
        let p = Number(inp.value)
        
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c+=p) {
            res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            for(let c = i; c >= f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
         res.innerHTML += `\u{1F3C1}`
    }
    
}