const playerImage = new Image();
playerImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnDazCI8Ngc03VUyyurpHW-9JWnRCyGsNZIrnnoZjQLf48epWPBo6jL8lCsoD_ZRuSt9MTK0OJUNIQDTIGVOQPuMPslbP1Gt8ijRxkVhZdYDZLJ48qKuiANdWrDnvmGmBeGJagtL-J4sxZ/s690/banner_onepiece_big.png";

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
   ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}