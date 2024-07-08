const btnAdd=document.getElementById("btnAdd")
const btnVisu=document.getElementById("btnVisu")
const container=document.getElementById("container")
const header=document.getElementById("header")
const telaAdd=document.getElementById("telaAdd")
const btnConfirma=document.getElementById("btnConfirma")
const btnVoltar=document.getElementById("btnVoltar")
const btnVolta=document.getElementById("btnVolta")
const btnSelecionar=document.getElementById("btnSelecionar")
const dadosSalvos=document.getElementById("dadosSalvos")

let visuDados=document.getElementById("visuDados")
let selectData=document.getElementById("selectData")
let data=document.getElementById("data")
let nomeDespesa=document.getElementById("nomeDespesa")
let valorDespesa=document.getElementById("valorDespesa")

btnAdd.addEventListener("click", ()=>{
    header.style.display="none"
    btnAdd.style.display="none"
    btnVisu.style.display="none"
    let carregando=document.createElement("div")
    carregando.classList.add("carregando")
    carregando.textContent="Carregando..."
    container.appendChild(carregando)
    setTimeout(function(){
        carregando.style.display="none"
        telaAdd.style.display="flex"
        btnConfirma.style.display="flex"
        btnVoltar.style.display="flex"
        container.appendChild(telaAdd)
    },1000)  
})

btnVoltar.addEventListener("click", ()=>{
    btnConfirma.style.display="none"
    btnVoltar.style.display="none"
    telaAdd.style.display="none"
    let carregando2=document.createElement("div")
    carregando2.classList.add("carregando")
    carregando2.textContent="Carregando..."
    container.appendChild(carregando2)
    setTimeout(function(){
        carregando2.style.display="none"
        header.style.display="flex"
        btnAdd.style.display="flex"
        btnVisu.style.display="flex"
    },1000)
})

btnVisu.addEventListener("click",()=>{
    header.style.display="none"
    btnAdd.style.display="none"
    btnVisu.style.display="none"
    let carregando3=document.createElement("div")
    carregando3.classList.add("carregando")
    carregando3.textContent="Carregando..."
    container.appendChild(carregando3)
    setTimeout(function(){
        carregando3.style.display="none"
        telaVisu.style.display="flex"
        btnSelecionar.style.display="flex"
        btnVolta.style.display="flex"
    },1000)
})

btnVolta.addEventListener("click", ()=>{
    btnSelecionar.style.display="none"
    btnVolta.style.display="none"
    telaVisu.style.display="none"
    let carregando4=document.createElement("div")
    carregando4.classList.add("carregando")
    carregando4.textContent="Carregando..."
    container.appendChild(carregando4)
    setTimeout(function(){
        carregando4.style.display="none"
        header.style.display="flex"
        btnAdd.style.display="flex"
        btnVisu.style.display="flex"
    },1000)
})
