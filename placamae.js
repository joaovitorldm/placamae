let nota = 0
let contador = 0 
function send(){
contador += 1
let valor = document.getElementById("caixa").value
let valorreal = valor.toLowerCase()
switch(contador){
    case 1:
        if(valorreal == "b"){
            nota += 1
        }
    break
}
switch(contador){
    case 1:
        document.getElementById("pergunta").innerHTML = "O que é a placa mãe de um computador?"
        document.getElementById("a").value = " a) Um tipo de memória para o computador."
        document.getElementById("b").value = " b) Um componente que conecta todos os outros componentes do computador.";
        document.getElementById("c").value = "  c) Um dispositivo que armazena arquivos do computador."
    break
    case 2:
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    break
    case 3:
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 4:
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 5:
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 6:
       
    break
    case 7:
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 8:
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 9:
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    default:
        if(nota >= 7){
            document.getElementById("pergunta").innerHTML = "Parabéns sua nota foi " + nota
        }else{
            document.getElementById("pergunta").innerHTML = "Que feio ein, sua nota foi " + nota
        }
    break

}
}