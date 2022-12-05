let nums = [77, 44, 22, 33, 99, 100, 55, 88, 0, 66, 11]
let comparacoes, trocas

function bublesort (vetor){
    let trocou
    comparacoes = 0
    trocas = 0
    
    do{
        trocou = false 
        for(let i=0; i < vetor.length; i++){
            comparacoes++
            if (vetor[i] > vetor[i+1]){
            [vetor[i],vetor[i+1]]  = [vetor[i+1],vetor[i]]
            trocou = true
            trocas++
            }  
        }
    }
    while (trocou);


}
bublesort(nums)
console.log('ordem', nums)
console.log('Tocas', trocas,  'comparaçoes', comparacoes)