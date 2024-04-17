const btnAdd=document.getElementById("btnAdd")
const btnVisu=document.getElementById("btnVisu")
const container=document.getElementById("container")
const header=document.getElementById("header")
const telaAdd=document.getElementById("telaAdd")
const btnConfirma=document.getElementById("btnConfirma")
const btnVoltar=document.getElementById("btnVoltar")

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
    },3000)  
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
    },3000)
})
