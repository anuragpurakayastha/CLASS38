var canvas, backgroundImage;
var car1,car2,car3,car4,cars;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1img;
var car2img;
var car3img,car4img,trackimg;

var form, player, game;

function preload(){
car1img=loadImage("car1.png");
car2img=loadImage("car2.png");
car3img=loadImage("car3.png");
car4img=loadImage("car4.png");
trackimg=loadImage("track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){game.end()
  }
}
