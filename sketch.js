var gamestate = 0;
var playercount = 0;
var database;
var form,game,player;

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
    
}



function draw(){
    background("white");
   
}