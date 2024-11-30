// Esta variable es del boton para incializar el juego
let on = false;
const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => {
    on = !on;
    if (on) {
        startButton.textContent = 'Stop';
        drawFrame();
   } else {
    startButton.textContent = 'Start';
   }
})

// ball.draw();

function drawFrame(){
    if(!on) return; // 
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
    drawGridSystem(); // dibujar la cuadricula 
    // ball.draw();  // Se dibuja la pelota
    // ball.updatePosition();  // Se actualiza la posición de la pelota
    updateGame();
    drawGame();
    drawScore();
    requestAnimationFrame(drawFrame);
}


// Bucle principal
drawFrame();