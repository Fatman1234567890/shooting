const playerImage = new Image();
playerImage.src = "https://kanji.reader.bz/images/og/1200x630/38530a48ba5768c8a999d3b88e0f212e.png";

export const player = {
    x: 0,
    y: 0,
    width: 80,
    height: 50,
    color: "yellow",
    life: 3,
    score: 0,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx) {
    ctx.fillStyle = player.color;
   ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}