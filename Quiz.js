class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();
    //write code to change the background color here
     background("orange");
    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(30);
    text("Result of the Quiz",320,40)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){

    //write code to add a note here
    fill("blue");
    textSize(20);
    text("*NOTE: Contestant who anwered correct are heighlighted in green color!",130,230);
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green");
      //textSize(20);
      //text("jvbs j",320,300);
      else
      fill("red");
      //textSize(20);
      //text(allContestants[plr].name + ": " + allCpntestants[plr].answer,320,350);
    }
  }
    
  }

}
