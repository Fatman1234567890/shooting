
import {player,initPlayer,drawPlayer} from"./player.js";
import {enemies,spawnEnemy} from"./enemies.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);
spawnEnemy(canvas);


const bullets=[];
const BULLETS_SPEED=-10;

function tryShoot(now){
    bullets.push({
        x:player.x,
        y:player.y,
        width:10,
        height:10,
        vy:BULLETS_SPEED,
    })
}



// fillRect(x座標(横), y座標(縦), 横幅, 縦幅)

//自分のキャラクターに見立てた四角形をとりあえず作ってみてください。

// width="480" height="640"

let tama = 0;
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      if( player. x >10){
    player.x-=10; 
      } 
    } else if (e.key === "ArrowRight") {
        if(player.x < canvas.width - player.width - 10){
      player.x += 10;
        }
    } else if (e.code === "Space") {
     tryShoot();
    }
});
function update(){
 for(let i=bullets.length-1;i>=0;i--){
        const bullet=bullets[i];
         bullet.y+=bullet.vy;
         if(bullet.y<0){
    bullets.splice(i,1);
    }
   }
}

function draw(){
ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPlayer(ctx);

     ctx.fillStyle = "white";
     for(let i=0;i<enemies.length;i++){
        const bullet=enemies[i];
      ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
}
}





function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();