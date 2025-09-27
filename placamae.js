let nota = 0
let contador = 0
function send(){
contador += 1
let valor = document.getElementById("caixa")
valor = valor.value
let valorreal = valor.toLowerCase()
switch(contador){
    case 1:
        if(valorreal == "b"){
            nota += 1
            console.log(nota)
        }
        let box1 = document.getElementById("caixa")
        box1.value = ""
    break
    case 2:
        if(valorreal == "c"){
            nota += 1
            console.log(nota)
        }
        let box2 = document.getElementById("caixa")
        box2.value = ""
    break
    case 3:
        if(valorreal == "b"){
            nota += 1
            console.log(nota)
        }
        let box3 = document.getElementById("caixa")
        box3.value = ""
    break
    case 4:
        if(valorreal == "a"){
            nota += 1
        }
        let box4 = document.getElementById("caixa")
        box4.value = ""
    break
    case 5:
        if(valorreal == "a"){
            nota += 1
        }
        let box5 = document.getElementById("caixa")
        box5.value = ""
    break
    case 6:
        if(valorreal == "b"){
            nota += 1
        }
        let box6 = document.getElementById("caixa")
        box6.value = ""
    break
    case 7:
        if(valorreal == "c"){
            nota += 1
        }
        let box7 = document.getElementById("caixa")
        box7.value = ""
    break
    case 8:
        if(valorreal == "b"){
            nota += 1
        }
        let box8 = document.getElementById("caixa")
        box8.value = ""
    break
    case 9:
        if(valorreal == "a"){
            nota += 1
        }
        let box9 = document.getElementById("caixa")
        box9.value = ""
    break
    case 10:
        if(valorreal == "c"){
            nota += 1
        }
        let box10 = document.getElementById("caixa")
            box10.value = ""
    break
    default:

}
switch(contador){
    case 1:
        document.getElementById("pergunta").innerHTML = "O que a placa mãe distribui para os componentes do computador?"
        document.getElementById("a").innerHTML = " a) Som."
        document.getElementById("b").innerHTML = " b) Apenas dados de vídeo."
        document.getElementById("c").innerHTML = " c) Energia e sinais de comunicação."
    break
    case 2:
        document.getElementById("pergunta").innerHTML = "Onde a memória RAM é instalada?"
        document.getElementById("a").innerHTML= " a) No gabinete  "
        document.getElementById("b").innerHTML= " b) Na placa-mãe  "
        document.getElementById("c").innerHTML= " c) No monitor  "
    break
    case 3:
        document.getElementById("pergunta").innerHTML = "Qual peça é encaixada no soquete da placa-mãe?"
        document.getElementById("a").innerHTML = " a) Processador (CPU)"
        document.getElementById("b").innerHTML = " b) HD"
        document.getElementById("c").innerHTML = " c) Fonte de alimentação  "
    break
    case 4:
        document.getElementById("pergunta").innerHTML = "Qual componente **não** se conecta diretamente à placa-mãe?"
        document.getElementById("a").innerHTML = " a) Mouse  "
        document.getElementById("b").innerHTML = " b) Processador  "
        document.getElementById("c").innerHTML = " c) Memória RAM  "
    break
    case 5:
        document.getElementById("pergunta").innerHTML = "A placa-mãe distribui o quê para os componentes?"
        document.getElementById("a").innerHTML = " a) Vídeos "
        document.getElementById("b").innerHTML = " b) Energia e informações  "
        document.getElementById("c").innerHTML = " c) Músicas  "
    break
    case 6:
        document.getElementById("pergunta").innerHTML = "Qual destas opções representa um tipo de slot de expansão na placa-mãe?"
        document.getElementById("a").innerHTML = " a) HDMI  "
        document.getElementById("b").innerHTML = " b) USB  "
        document.getElementById("c").innerHTML = " c) PCIe "
    break
    case 7:
        document.getElementById("pergunta").innerHTML = "O que é um soquete (socket) na placa-mãe?"
        document.getElementById("a").innerHTML = " a) Um tipo de memória interna"
        document.getElementById("b").innerHTML = " b) O conector onde se instala o processador"
        document.getElementById("c").innerHTML = " c) Um slot para instalar placas de vídeo"
    break
    case 8:
        document.getElementById("pergunta").innerHTML = " O que é o barramento (bus) numa placa mãe?"
        document.getElementById("a").innerHTML = " a) Canal de comunicação que transporta dados e sinais entre componentes"
        document.getElementById("b").innerHTML = " b) Um circuito especializado em refrigeração"
        document.getElementById("c").innerHTML = " c) Uma interface de vídeo"
    break
    case 9:
        document.getElementById("pergunta").innerHTML = "Um recurso comum em placas mãe modernas é o “ARGB” ou “RGB”. Isso serve para:"
        document.getElementById("a").innerHTML = " a) Aumentar desempenho do processador"
        document.getElementById("b").innerHTML = " b) Melhorar refrigeração"
        document.getElementById("c").innerHTML = " c) Iluminação personalizada (luzes)"
    break
    default:
        if(nota >= 7){
            document.getElementById("pergunta").innerHTML = "Parabéns sua nota foi " + nota
            document.getElementById("a").innerHTML = ""
            document.getElementById("b").innerHTML = ""
            document.getElementById("c").innerHTML = ""
        }else{
            document.getElementById("pergunta").innerHTML = "Que pena, sua nota foi " + nota
            document.getElementById("a").innerHTML = ""
            document.getElementById("b").innerHTML = ""
            document.getElementById("c").innerHTML = ""
        }
    break
}
}