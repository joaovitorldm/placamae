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
    case 2:
        if(valorreal == "b"){
            nota += 1
        }
    break
}
switch(contador){
    case 1:
        let pergunta1 = document.getElementById("pergunta")
        pergunta1.innerHTML = "O que a placa mãe distribui para os componentes do computador?"
        
        document.getElementById("a").innerHTML = " a) Som."
        document.getElementById("b").innerHTML = " b) Energia e sinais de comunicação."
        document.getElementById("c").innerHTML = " c) Apenas dados de vídeo."
    break
    case 2:
        let pergunta2 = document.getElementById("pergunta")
        pergunta2.innerHTML = "Qual é o componente que é instalado no soquete da CPU da placa mãe?"

        document.getElementById("a").value = " a) Placa de vídeo."
        document.getElementById("b").value = " b) Memória RAM."
        document.getElementById("c").value = " c) Processador (CPU)."
    break
    case 3:
        let pergunta3 = document.getElementById("pergunta")
        pergunta3.innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 4:
        let pergunta4 = document.getElementById("pergunta")
        pergunta4.innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 5:
        let pergunta5 = document.getElementById("pergunta")
        pergunta5.innerHTML = "O que são os slots de RAM na placa mãe?"
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 6:
        let pergunta6 = document.getElementById("pergunta")
        pergunta1.innerHTML = "Qual é a função do chipset na placa mãe?"
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 7:
        let pergunta7 = document.getElementById("pergunta")
        pergunta1.innerHTML = "O que são as portas SATA na placa mãe usadas para conectar?"
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 8:
        let pergunta8 = document.getElementById("pergunta")
        pergunta8.innerHTML = " O que são as portas USB da placa mãe usadas para?"
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 9:
        let pergunta9 = document.getElementById("pergunta")
        pergunta9.innerHTML = ""
        document.getElementById("pergunta").innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    case 10:
        let pergunta10 = document.getElementById("pergunta")
        pergunta10.innerHTML = ""
        document.getElementById("a").value = ""
        document.getElementById("b").value = ""
        document.getElementById("c").value = ""
    break
    default:
        if(nota >= 6){
            document.getElementById("pergunta").innerHTML = "Parabéns sua nota foi " + nota
        }else{
            document.getElementById("pergunta").innerHTML = "Que feio ein, sua nota foi " + nota
        }
    break

}
}