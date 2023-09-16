function gerar() {
    var n1 = document.getElementById('in1')
    var nf = document.getElementById('inf')
    var np = document.getElementById('ip')
    var res = document.getElementById('res')
        if (n1.value.length == 0 || nf.value.length == 0 || np.value.length == 0) {
        alert('ERROR, número faltando')
        res.innerHTML = 'número faltando'
        } else {
            res.innerHTML = 'contando: '
            let n = Number(n1.value)
            let f = Number(nf.value)
            let p = Number(np.value)
            if (p <= 0) {
                alert('passo invalido')
                p = 1
            }
        
            if(n < f){
                for(let c = n; c<=f; c += p) {
                    res.innerHTML += `${c} `
                }
            } else {
                for(let c = n; c>=f; c -= p) {
                    res.innerHTML += `${c} `
                }
            }
             
        }
        res.innerHTML +=`.` 
    }
