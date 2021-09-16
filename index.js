var readlineSync = require('readline-sync');
var score = 0
var userName = readlineSync.question("Namaste!, What is your Name?:")
console.log("Namaste " + userName + " To How Well Do You Know India?!?")


var questions = [{
  question:"What is the capital of India? ",
  answer: "Delhi"},
   {
    question:"What is the national sport?",
    answer: "Hockey"},
    {
      question:"What is the national animal?",
      answer:"Tiger"},
         {
    question:"What is the national bird?",
    answer: "peacock"},
       {
    question:"How many states in India",
    answer: "29"},]

 var highScores =[{
   name: "Harshith",
   score: 3
 },{
   name:"Pawan",
   score:2
 }]


function run(question,answer){
  userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct Answer!")
    score++
  } else {
    console.log("Oops!")
    score--
  }
  console.log("Your current score is:" +score)
  console.log("---------")
}

for (var i = 0; i<questions.length; i++){
 var  currentQuestion = questions[i]
 run(currentQuestion.question,currentQuestion.answer)
}


 function leaderboard(){
   console.log("---------")
   console.log("Your final score is:" +score)
   console.log("Did you beat the highscore?, if yes send me a screenshot :)")
   highScores.map( scores => console.log(scores.name, ":", scores.score ))
 } 

 leaderboard()

