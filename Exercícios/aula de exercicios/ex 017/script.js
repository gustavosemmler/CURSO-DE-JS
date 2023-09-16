function tabuada() {
    let n1 = document.getElementById('in');
    let tab = document.getElementById('it');

    if (n1.value.length == 0) {
        alert('insira um número');
    } else {
        let n = parseFloat(n1.value);
        tab.innerHTML = '';
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            let resultado = Math.floor(n / c); // Arredonda para o inteiro mais próximo
            item.text = `${n} / ${c} = ${resultado}`;
            tab.appendChild(item);
        }
    }
}