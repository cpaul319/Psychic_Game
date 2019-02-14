var guessLetterCount = 10;
 var wins = 0;
 var losses = 0;
var guess = "";
var guessLetterArr =[];






function resetGame(){
   guessLetterArr =[];
   document.getElementById("LetterGuess").innerHTML = guessLetterCount;
   document.getElementById("losses").innerHTML=  losses;
   document.getElementById("letterGuess").innerHTML=  guessLetterArr;
   randomLetter = getRandomLetter();

}


function getRandomLetter(){
   var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var randomNumber = Math.floor(Math.random() *letters.length);
var randomLetter = letters[randomNumber];
return randomLetter;

}

function lostGame(){
   alert("I'm sorry. You are out of guesses. You lose.");
   losses++;
   document.getElementById("losses").innerHTML=  losses;
   alert("Want to try again");
   guessLetterCount = 10;
   resetGame();
}


   
   document.onkeyup = function(event) {
      document.getElementById("gameInstructions").innerHTML= "Click anywhere to start game";
      guess = event.key.toUpperCase();
      console.log(guess);
    randomLetter=getRandomLetter();
   
      
   if (guess === randomLetter){
               
      wins++;
      document.getElementById("wins").innerHTML= wins;
      alert("Congrats, you picked the right letter. You win");
      resetGame();
   }
  else {
   guessLetterArr.push(guess);
   guessLetterCount--;
   document.getElementById("gameInstructions").innerHTML= "Pick another letter";
   document.getElementById("letterGuess").innerHTML=  guessLetterArr;
   document.getElementById("letterCount").innerHTML=  guessLetterCount;
   }
      
   if (guessLetterCount === 0) {
   lostGame();
   
   }
   


 
} 
