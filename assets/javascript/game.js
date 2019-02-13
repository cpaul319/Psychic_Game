var guessLetterCount = 10;
 var wins = 0;
 var losses = 0;
var guess = "";
var guessLetterArr =[];



var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        var randomNumber = Math.floor(Math.random() *letters.length);
        var randomLetter = letters[randomNumber];
        console.log(randomLetter);
        // var chosenLetter = letters[randomLetter];
        document.onkeyup = function(event) {
        guess = event.key.toUpperCase();
        console.log(guess);
        for (var i =0; i< 10; i++) {
            guessLetterArr.push(guess);
             if (guess === randomLetter){
                 i = 10;
             }
            alert("Congrats, you are right");
            wins++;
            document.getElementById("wins").innerHTML= wins;
            } else {
                 
                alert("Guess again");
                guessLetterCount--;
                document.getElementById("gameInstructions").innerHTML= "Pick another letter";
                document.getElementById("letterGuess").innerHTML=  guessLetterArr;
                guessLetterCount--;
                document.getElementById("letterCount").innerHTML=  guessLetterCount;
                document.getElementById("losses").innerHTML=  losses;

                    }
                    }

                    $("#first-number, #second-number, #operator, #result").empty();{}
                }
          
          
                
            

   //game reset
   if (guessLetterCount == 0) {
    guessLetterCount = 10;
    losses++;
    
    document.getElementById("letterGuess").textContent = " ";
    document.getElementById("losses").textContent = " ";
    document.getElementById("LetterGuess").textContent = "10";
    randomLetter = computerGuess();
    // psychicGame();

                                }
                                                     
