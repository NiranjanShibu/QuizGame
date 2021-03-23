var canvas, database;
var gameState = 0; 
var contestantCount;
var quiz, contestant, question;
var allContestants;

function setup(){
  
  database = firebase.database();
  console.log("connected to database");
  
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");

  if(contestantCount === 4){
    gameState = 1;
  }

  if(gameState === 1){
    quiz.play();
  }

}
