var guessLetterCount = 10;
 var wins = 0;
 var losses = 0;
var guess = "";
var guessLetterArr =[];



var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
document.getElementById("gameInstructions").innerHTML= "Click anywhere to start game";
  

      
       
        // var chosenLetter = letters[randomLetter];
        document.onkeyup = function(event) {
        guess = event.key.toUpperCase();
        console.log(guess);
        
           
             if (guess === randomLetter){
                wins++;
                document.getElementById("wins").innerHTML= wins;
                alert("Congrats, you picked the right letter");
             }
            else if (guess !== randomLetter){
             guessLetterArr.push(guess);
             
             guessLetterCount--;
             document.getElementById("gameInstructions").innerHTML= "Pick another letter";
            
             
             document.getElementById("letterGuess").innerHTML=  guessLetterArr;
            
             document.getElementById("letterCount").innerHTML=  guessLetterCount;
             document.getElementById("losses").innerHTML=  losses;
             }
                
 
                            if (guessLetterCount == 0) {
                            guessLetterCount = 10;
                            guessLetterArr =[];
                         
                            losses++;
                            document.getElementById("myBtn").addEventListener("click", function() {
                                var randomNumber = Math.floor(Math.random() *letters.length);
                                var randomLetter = letters[randomNumber];
                                alert("New Game");
                              
                                 console.log(randomLetter);
                              });
                            
                            document.getElementById("letterGuess").innerHTML = " ";
                            document.getElementById("losses").innerHTML = " ";
                            document.getElementById("LetterGuess").innerHTML = guessLetterCount;

                        }

                                }
                                    
