function tabuada() {
    n1 = document.getElementById('in')
    item = document.getElementById('it')

    if (n1.value.length == 0)  {
        alert('insira um número')
    } else {
        let n = Number(n1.value)
        for(let c=1; c<=10; c++) {
           let item = document.createElement('option')
           item.text = `${n} * ${c} = ${n*c}`
            
        }
    }
}