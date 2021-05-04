var knight, knightIMG, orc, orcIMG;

var gameState, PLAY, END;
var lives;
var enemyGroup;
function preload(){

}

function setup(){
createCanvas(300, 300);
knight = new Knight(100,100,5,5);
orc = new Orc(200,200,5,5);
}

function draw(){
background("light blue");

if(keyPressed("S")){
    knight.x = knight.x -1;
}
if(keyPressed("D")){
    knight.x = knight.x +1;
}
if(keyPressed("W")){
    knight.y = knight.x -1;
}
if(keyPressed("S")){
    knight.y = knight.x +1;
}

drawSprites();
}