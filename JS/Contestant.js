class Contestant{

    constructor(){
    
        this.name = null;
        this.index = null;
        this.answer = null;
    
    }
    
    display(){
    
    
        
    }

    getPlayerCount(){

        var playerCountRef = database.ref('contestantCount')

        playerCountRef.on("value", function(data){
        contestantCount = data.val();   
        })
    }

    updatePlayerCount(count){

        database.ref('/').update({
            contestantCount: count
        })

    }

    updatePlayerDetails(){

        var playerIndex = "contestants/contestant"+this.index;
        var playerDetailRef = database.ref(playerIndex)

        playerDetailRef.set({
            name: this.name,
            answer: this.answer
        })
    }

    getPlayerDetails(){

        var playerDetail = database.ref('/');
        playerDetail.on("value", (data)=>{
            allContestants = data.val();
        })

    }
    
    }