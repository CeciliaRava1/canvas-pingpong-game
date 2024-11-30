function checkPaddleCollision () {
    if(
        ball.positionX - ball.radius <= paddle.positionX + paddle.width &&
        ball.positionY >= paddle.positionY &&
        ball.positionY <= paddle.positionY + paddle.height
    ){
        ball.reverseDirection('x')
    }
    if(
        ball.positionX + ball.radius >= paddle2.positionX &&
        ball.positionY >= paddle2.positionY &&
        ball.positionY <= paddle2.positionY + paddle.height
    ){
        ball.reverseDirection('x')
    }
}

function setupControls () {
    document.addEventListener('keydown', (e) => { //Callback: anonimous function
    
    if(e.key === 'w') paddle.distanceY = -paddle.speed;
    if(e.key === 's') paddle.distanceY = paddle.speed;

    if(e.key === 'ArrowUp') paddle2.distanceY = -paddle2.speed;
    if(e.key === 'ArrowDown') paddle2.distanceY = paddle2.speed;
    });

    document.addEventListener('keyup', (e) => {
    if(e.key === 'w' || e.key === 's') paddle.distanceY = 0;
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown') paddle2.distanceY = 0;

    });
}

setupControls();

function updateGame(){
    paddle.move();
    paddle2.move();
    ball.updatePosition();
    checkPaddleCollision();
};

function drawGame(){
    paddle.draw();
    paddle2.draw();
    ball.draw();
}