class Question{

    constructor(){
            
        this.title = createElement('h2');
        
        this.question = createElement('h5');
        
        this.option1 = createElement('h5');
        this.option2 = createElement('h5');
        this.option3 = createElement('h5');
        this.option4 = createElement('h5');

        this.button = createButton('Submit');

        this.input1 = createInput("Name");
        this.input2 = createInput("Answer Choice No.");
    
    }
    
    display(){
    
        this.title.html("QUIZ GAME");
        this.title.position(350, 0);
        
        this.question.html("Question: 22+14/2");
        this.question.position(150, 80);

        this.option1.html("1: Eighteen");
        this.option1.position(150, 100);

        this.option2.html("2: Twenty Nine");
        this.option2.position(150, 120);

        this.option3.html("3: Seventeen");
        this.option3.position(150, 140);

        this.option4.html("4: Thirty One");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(500, 230);

        this.button.position(390, 285);
        this.button.mousePressed(()=>{
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.updatePlayerDetails();
            contestant.updatePlayerCount(contestantCount);
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            this.title.hide();
        });
    
    }
    
    }