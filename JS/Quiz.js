class Quiz{

    constructor(){
    
    
    
    }
    
    getState(){
    
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
            console.log("Gamestate " + gameState);
        });
    
    }
    
    updateState(){
    
        var gameStateRef = database.ref('/');
        gameStateRef.update({
    
            gameState: gameState
    
        });
    
    }
    
    async start(){
    
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");

          if(contestantCountRef.exists()){
              contestantCount = contestantCountRef.val();
              contestant.getPlayerCount();
          }

          question = new Question();
          question.display();
        
      }
    }

    play(){

        background("yellow");
        
        fill("black");
        text("QUIZ RESULTS", 350, 30);

        contestant.getPlayerDetails();

        fill("black");
        text("Note: If you answered correctly, your name is shown in green", 150, 210);
                
        if(contestant.answer === "2"){
            fill("green");
            text(contestant.name+": "+contestant.answer, 150, 230);
        }else{
            fill("red");
            text(contestant.name+": "+contestant.answer, 150, 230);
        }

    }

}