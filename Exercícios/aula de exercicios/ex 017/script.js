function gerar() {
    let num = document.getElementById('in')
    let tab = document.getElementById('it')
    if (num.value.length == 0) {
        alert('por favor, digite um numero')
    } else {
        let n = Number(num.value)
        let c = 0 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}