let num = [5,8,3,9,5]
num.sort()
num.push(10)
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor 5 está na posição ${pos} `)
}
