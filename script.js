// Create variables that will grab the DOM elemtns getElementID
var myTimer;
// determine the time based on the questions array
var theTime = 16
var questionSector = document.getElementById("question_area")
var answers = document.getElementById("answers")
var questions = document.getElementById("questions")
// create variable that will start at the first index
var starterPoint = 0
var theClock = document.getElementById("demo")
var endGame = document.getElementById("game_done")
// create an array[] of quiz objects{} - questions and answers -
var theQuestions = [
  {
    aQuestion: "What is JavaScript",
    choices: ["blah", "scripting Language", "blah"] ,
    theAnswer: "scripting Language"
  },
  {
    aQuestion: "What is HTML",
    choices: ["blah", "blah", "Hypertext Markup Language"] ,
    theAnswer: "Hypertext Markup Language" 
  },
  {
    aQuestion: "What is CSS",
    choices: ["blah", "blah", "Cascading Style Sheet"] ,
    theAnswer: "Cascading Style Sheet"
  },
  {
    aQuestion: "What is A",
    choices: ["Application Programming Interface", "blah", "blah"] ,
    theAnswer: "Application Programming Interface"
  }
 ];

//  create a timer that ticks and substracts 
function TicTok (){ 
  console.log("starting the clocker ticker")
  console.log("this is the time" +theTime)
  var theClock = document.getElementById("demo")

  console.log("this is the clock= " + theClock)

   theTime--;
  //  placing the desired time within the id of demo 

   theClock.innerText = theTime;
// check to assure the user has time to complete the quiz - if not execute end game method 

   if(theTime <= 0){
    //end the game
   QuizStopped()
   }

}

function startQuiz() {
  console.log("Starting quiz...")
    //  myTimer = setInterval(myClock, 1000);
     var c = 15;

    //  begin the count down 
    myTimer = setInterval(TicTok, 1000)

    //  function myClock() {
    //    document.getElementById("demo").innerHTML = --c;
    //    if (c == 0) {
    //      clearInterval(myTimer);
    //    }
    //  }
     grabTheQuestions()
   }

  //  render the questions above on to the DOM 
  // create a render Questions method (function)
  function grabTheQuestions () {
    console.log("Grabbing the questions.. ") 
    // grab the current question 
    // create an index (starting at 0)
    // start at 0 and grab the first question available in the questions array
var currentQuizQuestion = theQuestions[starterPoint]

    // change the textContent of id questions to be the actual question from your array
questions.textContent = currentQuizQuestion.aQuestion
    // render the choices inside of the id answers
// loops
// clear out old choices 
answers.innerHTML = "";
currentQuizQuestion.choices.forEach(function(choice, i){
  // create/ change each choice to be a functioning button
  var theChoiceButton = document.createElement("button");
  theChoiceButton.setAttribute("class", "theChoice")

  // <button class="theChoice"> </button>
  // each button willhave it's own value - the value will come from the choices availabe in the currentQuestion
  theChoiceButton.setAttribute("value", choice)

  // by using textContent actual content will be placed on the HTML 
  theChoiceButton.textContent = i +". " + choice
// <button class="theChoice"> blah</button>
// <button class="theChoice">scripting Language  </button>
theChoiceButton.onclick = userClicked;

// render the buttons
answers.appendChild(theChoiceButton)
})
  
  }


// provides function to the choices button 
function  userClicked (event) { 
  // assure the user did not click the wrong answer & if the wrong answer was click
console.log(event)
 console.log("this is the event choice:  " + event.target.getAttribute("value"))
  if(theQuestions[starterPoint].theAnswer = event.target.getAttribute("value")){
    console.log("choice is correct")
  
  }else {
    console.log("what is the time now")
    // theTime = currentTimeLeft -5
    theTime = theTime - 5;
  }
    // substract time 
  
    // indicate the new time on the document 

    // move to the next question 
starterPoint++;
if(starterPoint === theQuestions.length){
 QuizStopped()
}else {
  grabTheQuestions()
}
console.log("test");


}

function QuizStopped () {
  clearInterval(myTimer)
}


  //  hide the question TILL start is clicked 

  //  Quiz render = complete
  // timer = complete
  // start button = renders questions = complete
  // end game 
  // calacute score 
  // save intials 
  // substract time if answer is wrong 
  // move to next question if answer is correct = complete




  // "a" == a : true
  // "a" === a : false
  // 1 === 1 : true
  // "1" === 1 : false 
  // "1" == 1 : true 