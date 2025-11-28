
import { player, initPlayer, drawPlayer } from "./player.js";
import { spawnEnemy, enemies, updateEnemies, drawEnemies } from "./enemies.js";
import { handleCollisions } from "./collision.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");



initPlayer(canvas);

export const bullets = [];
const BULLET_SPEED = -5;

function tryShoot() {
   
    for (let i = 0; i < 5; i++) {

        
        const angle = (Math.random() * 350 -10 ) * (Math.PI / 360);

        // 速さ
        const speed = 5;

        bullets.push({
            x: player.x + player.width / 2 - 5,
            y: player.y,
            width: 15,
            height: 15  ,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * -speed,  
        });
    }
}


function updateScore(){
    const scoreBoard = document.getElementById("scoreBosrd");
    scoreBoard.innerText = `Score:${player.score}`;
    const lifeBoard = document.getElementById("lifeBoard");
    lifeBoard.innerText = `Life:${player.life}`;
}




window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        if (player.x > 10) {
            player.x -= 10;
        }
    } else if (e.key === "ArrowRight") {
        if (player.x < canvas.width - player.width - 10) {
            player.x += 10;
        }
    } else if (e.code === "Space") {
        tryShoot();
    }
});

function update() {
    for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];

   
    bullet.y += bullet.vy;
    bullet.x += bullet.vx;

    
    if (bullet.x < 0) {
        bullet.x = 0;
        bullet.vx *= -1;    
    }
    if (bullet.x + bullet.width > canvas.width) {
        bullet.x = canvas.width - bullet.width;
        bullet.vx *= -1;   
    }

   
    if (bullet.y < -20) {
        bullets.splice(i, 1);
    }
}
    spawnEnemy(canvas);    
    updateEnemies(canvas);
    handleCollisions();
    updateScore();

    for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    bullet.x += bullet.vx;  // ← これを追加！

    if (bullet.y < -20) {
        bullets.splice(i, 1);
    }
}
}

function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPlayer(ctx);

    ctx.fillStyle = "blue";
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

    drawEnemies(ctx);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
