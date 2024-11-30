const paddle = {
    positionX : 10,
    positionY : canvas.height / 2 - 40,
    width : 10,
    height : 80,
    color : 'pink',
    speed: 5,
    distanceY : 0,

    draw: function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    },

    move: function () {
        this.positionY += this.distanceY;

        if (this.positionY < 0) this.positionY = 0;
        if (this.positionY + this.height > canvas.height) this.positionY = canvas.height - this.height;
    },
};

const paddle2 = {
    ...paddle,
    positionX: canvas.width - 20,
    distanceY: 0,
};