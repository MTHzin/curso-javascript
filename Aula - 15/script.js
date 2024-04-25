let num = [5, 8, 2, 4]
num.sort()
console.log(num)
console.log(`O vetor tem: ${num.length} elementos`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
let pos = num.indexOf(1)
if (pos == -1){
    console.log(`Este valor não existe no vetor`)
}else
console.log(`O valor 8 está na posição ${pos}`)