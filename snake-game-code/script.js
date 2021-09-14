let canvas = document.getElementById("snake");
let context = canvas.getContext("2d") // renderiza o jogo(canvas), passando a tratar o arquivo como 2d 
let box = 32; //32 px === 32 square

// função que inicial o canvas
function criarBG() {
// fillStyle trabalha com o "estilo do canvas" (canvas/contexto)
    context.fillStyle = "lightgreen"; 
// vai desenhar o retângulo, onde vai acontecer o jogo(4 parametros x, y, widght e height)
    context.fillRect(0, 0, 16 * box, 16 * box);  //0, 0, 16, 16px (px === square)
}

criarBG();