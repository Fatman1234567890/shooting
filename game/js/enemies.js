export const enemies=[];
const SIZE=26;

function pushEnemy(canvas){
    const w=SIZE;
    const h=SIZE;
    const x=Math.random()*(canvas.width - w);
    const y=-;
    const vy=5

    enemies.push({x,y,width,w,height,h,vy});
}

export function spawnEnemy(canvas){
    if(enemies.length<5){
     SpawnEnemy(canvas);
    }   
}
   //export function UpdateEnemies(canvas){
   // for(let i=enemies.length-1;i>=0;i--){
     //   const enemy=enemies[i];
       // enemy.y+=enemy.vy;
    //if(e.y>canvas.height){
          //enemies.splice(i,1);
       // }
    //}
     