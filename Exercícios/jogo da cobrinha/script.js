const snake = document.getElementById('snake');
const food = document.getElementById('food');
let snakeX = 2;
let snakeY = 2;
let foodX = 5;
let foodY = 5;
let score = 0;
let direction = 'right';
const gridSize = 15; // Tamanho da grade do jogo
const snakeSegments = []; // Array para armazenar os segmentos da cobrinha

function updateGameArea() {
    if (direction === 'right') snakeX++;
    else if (direction === 'left') snakeX--;
    else if (direction === 'up') snakeY--;
    else if (direction === 'down') snakeY++;

    // Verificar se a cobrinha saiu da área do jogo
    if (snakeX < 0) snakeX = gridSize - 1;
    else if (snakeX >= gridSize) snakeX = 0;
    if (snakeY < 0) snakeY = gridSize - 1;
    else if (snakeY >= gridSize) snakeY = 0;

    // Verificar se a cobrinha comeu a comida
    if (snakeX === foodX && snakeY === foodY) {
        // Adicionar um novo segmento à cobrinha
        score++;
        addSnakeSegment();

        // Gerar nova posição para a comida
        foodX = Math.floor(Math.random() * gridSize);
        foodY = Math.floor(Math.random() * gridSize);
    }

    // Atualizar a posição da cabeça da cobrinha
    snake.style.left = snakeX * 20 + 'px';
    snake.style.top = snakeY * 20 + 'px';

    food.style.left = foodX * 20 + 'px';
    food.style.top = foodY * 20 + 'px';

    // Atualizar a posição e o tamanho dos segmentos da cobrinha
    updateSnakeSegments();
}
function addSnakeSegment() {
    const tailX = snakeSegments[snakeSegments.length - 1].x;
    const tailY = snakeSegments[snakeSegments.length - 1].y;
    const newSegment = createSnakeSegment(tailX, tailY);
    snakeSegments.push({ x: tailX, y: tailY });
    snake.appendChild(newSegment);
}

function updateGameArea() {
    if (direction === 'right') snakeX++;
    else if (direction === 'left') snakeX--;
    else if (direction === 'up') snakeY--;
    else if (direction === 'down') snakeY++;

    // Verificar se a cobrinha saiu da área do jogo
    if (snakeX < 0) snakeX = gridSize - 1;
    else if (snakeX >= gridSize) snakeX = 0;
    if (snakeY < 0) snakeY = gridSize - 1;
    else if (snakeY >= gridSize) snakeY = 0;

    // Verificar se a cobrinha comeu a comida
    if (snakeX === foodX && snakeY === foodY) {
        // Gerar nova posição para a comida
        foodX = Math.floor(Math.random() * gridSize);
        foodY = Math.floor(Math.random() * gridSize);

        // Adicionar um novo segmento à cobrinha
        addSnakeSegment();

        // Atualizar a pontuação
        score++;
        updateScore(); // Chame a função para atualizar a pontuação
    }

    // Atualizar a posição da cabeça da cobrinha
    snake.style.left = snakeX * 20 + 'px';
    snake.style.top = snakeY * 20 + 'px';

    food.style.left = foodX * 20 + 'px';
    food.style.top = foodY * 20 + 'px';

    // Atualizar a posição e o tamanho dos segmentos da cobrinha
    updateSnakeSegments();
}
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Pontuação: ' + score;
}

function resetGame() {
    // Remover todos os segmentos da cobrinha
    while (snake.firstChild) {
        snake.removeChild(snake.firstChild);
    }

    // Redefinir a posição inicial da cobrinha
    snakeX = 2;
    snakeY = 2;
    direction = 'right';
    snakeSegments.length = 0; // Limpar o array de segmentos

    // Redefinir a pontuação
    score = 0;

    // Inicializar o jogo com um segmento de cobrinha
    snakeSegments.push({ x: snakeX, y: snakeY });
    snake.appendChild(createSnakeSegment(snakeX, snakeY)); // Adicione essa linha
}

function createSnakeSegment(x, y) {
    const segment = document.createElement('div');
    segment.className = 'snake-segment';
    segment.style.width = '20px';
    segment.style.height = '20px';
    segment.style.left = x * 20 + 'px';
    segment.style.top = y * 20 + 'px';
    return segment;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    else if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    else if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    else if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
});

// Inicializar o jogo com um segmento de cobrinha
snakeSegments.push({ x: snakeX, y: snakeY });
snake.appendChild(createSnakeSegment());

setInterval(updateGameArea, 100);