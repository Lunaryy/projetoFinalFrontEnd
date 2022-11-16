var add= document.querySelectorAll('.add')
var lanche = document.getElementById('lanche')
var misto = document.getElementById(`misto`)
var xsal = document.getElementById(`xsal`)
var xFra = document.getElementById(`xFra`)
var brocado = document.getElementById(`brocado`)
var cerva = document.getElementById(`cerva`)
var refri = document.getElementById(`refri`)
var suco = document.getElementById(`suco`)
var addCarrinho = document.getElementById('add-carrinho')
var carrinho = document.getElementById('carrinho')
var txtquantidade = document.getElementById('quantidade')
var valor = document.getElementById('valor')
var valorTotal = document.getElementById('valorTotal')
var qtdlanche = document.getElementById('qtd-lanche')
var soma  = 0
var totalLanche = 0

var lanches = [
    {nome: 'Misto Quente', valor: 7.99},
    {nome: 'XSalada Artesanal', valor: 12.99},
    {nome: 'Frango Artesanal', valor: 13.99},
    {nome: 'Brocado', valor: 19.00},
    {nome: 'Heineken', valor: 8.00},
    {nome: 'Refrigerante', valor: 5.00},
    {nome: 'Suco', valor: 6.00},
]

misto.addEventListener(`click`, ()=>{
     valorp= 7.99
    lanche.value = lanches[0].nome
    
})

xsal.addEventListener(`click`, ()=>{
    lanche.value = lanches[1].nome
    valorp= 12.99
})

xFra.addEventListener(`click`, ()=>{
    lanche.value = lanches[2].nome
    valorp= 13.99
})

brocado.addEventListener(`click`, ()=>{
    lanche.value = lanches[3].nome
    valorp= 19.00
})

cerva.addEventListener(`click`, ()=>{
    lanche.value = lanches[4].nome
    valorp= 8.00
})

refri.addEventListener(`click`, ()=>{
    lanche.value = lanches[5].nome
    valorp= 5.00
})

suco.addEventListener(`click`, ()=>{
    lanche.value = lanches[6].nome
    valorp= 6.00
})

addCarrinho.addEventListener('click', ()=>{
    var qtd = Number(qtdlanche.value)
    var opcao = lanche.value
     totalLanche = qtd * valorp
    carrinho.innerHTML += `<div class="total" > <h4 class= "itemtxt"> * ${opcao} ---------- ${qtd} unidade(s): R$${totalLanche}</h1> </div>` 
    
    soma += totalLanche
    valorTotal.innerHTML = `<div class="total1" > <h3 class= "totaltxt"> Valor total: R$ ${soma},00 </div> </h3>`
})


