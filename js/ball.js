let paddle1 = 5;
let paddlee2 = 5;
// creamos el objeto ball y los metodos que se van a utilizar

const ball = {
  positionX: 100, // posición inicial en el x
  positionY: 50, // posición inicial en el y
  distanceX: 5, // velocidad con la que se va a mover en el eje x
  distanceY: 5, // velocidad con la que se va a mover en el eje y
  radius: 10, // radio de la pelota
  color: "#A6AEBF", // color de la pelota
  
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  },
  updatePosition: function () {
    // sumar 2 px a la posición x e y
    this.positionX += this.distanceX; // incrementar la posición dependiendo de la velocidad
    this.positionY += this.distanceY;
    this.checkCollision();
  },
  checkCollision: function () {
    // // se detecta si hubo colision
    // if (this.positionX + this.radius > canvas.width || this.positionX - this.radius < 0) {
    //   this.reverseDirection("x");
    // }
    // if (this.positionY + this.radius > canvas.height || this.positionY - this.radius < 0) {
    //   this.reverseDirection("y");
    // }

    if (this.positionX - this.radius < 0) {
      paddle1 --;
      resetBall();
    } else if (this.positionX + this.radius > canvas.width) {
      paddlee2 --;
      resetBall();
    }

    if (this.positionY + this.radius > canvas.height || this.positionY - this.radius < 0) {
        this.reverseDirection("y");
      }
  },

  reverseDirection: function (axis) {
    if (axis === "x") {
      // si el eje es x  ( si choco con el eje x, va a cambiar el sentido de la velocidad)
      this.distanceX = -this.distanceX;
    } else if (axis === "y") {
      // si el eje es y  ( si choco con el eje x, va a cambiar el sentido de la velocidad)
      this.distanceY = -this.distanceY;
    }
  },
};


function resetBall() {
  ball.positionX = 100;
  ball.positionY = 50;
  ball.distanceX = 5;
  ball.distanceY = 5;
}

function drawScore() {
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Player 1: ${paddle1}`, 20, 20); // x, y
  ctx.fillText(`Player 2: ${paddlee2}`, canvas.width - 140, 20); // x, y

}