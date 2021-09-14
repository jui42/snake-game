//cria variável canvas, usando getElementById para ligar ao ID "snake" do HTML
let canvas = document.getElementById("snake");

// renderiza o jogo(canvas), passando a tratar o arquivo como 2d (abaixo)
let context = canvas.getContext("2d") 

// criação e atribuição dos elementos do game
let box = 32;   //32 px === 32 square (tamanho da caixa)
let snake = []; // array snake irá receber valores durante o jogo
snake[0] = {    // conteúdo snake(array)
    x: 8 * box, // eixo x (posição horizontal?) * 32px (tamanho total da box)
    y: 8 * box  // eixo y (posição vertical?) * 32px (tamanho total da box)
}


// função que inicial o canvas
function criarBG() {
// fillStyle trabalha com o "estilo do canvas" (canvas/contexto)
    context.fillStyle = "lightgreen"; 
// vai desenhar o retângulo, onde vai acontecer o jogo(4 parametros x, y, widght e height)
    context.fillRect(0, 0, 16 * box, 16 * box);  //0, 0, 16, 16px (px === square)
}
// como a snake será um array, será usa FOR para construir o laço de repetição
// FOR poderá percorrer todo o conteúdo do array, podenda ainda, incrementar 1px por vez
function criarSnake() {
//contexto relativo(for)
    for(i=0; i <snake.length; i++) {
// passando contexto novamente, mas agora ligado à snake, por tanto não precisa setar novamente 
        context.fillStyle = "green";
// tamanho da snake; x e y passados dentro da let box
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
    
}

criarBG();
criarSnake();