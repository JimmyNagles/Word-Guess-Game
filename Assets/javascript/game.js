//for text on screen 
var webletters = document.getElementById("letras");
var webword = document.getElementById("palabra");
var webLifes = document.getElementById("vidas");
//IF they click 'okay ' then -if line- of code will run
// if they clikc "cancel" -else line- of code will run
// Okay means theres 2 players
// Cancel means 1 vs pc
var twoPlayers = confirm("Click ' Okay ' for two players or ' Cancel ' for one");

//if they click okey then two players code will run
if (twoPlayers) {
    // creates two varibles with a question
    //gets the name of the players and turns them into variables
    var playerOne = prompt('whats the name of the player Writing the word?');
    var playerTwo = prompt("Whats name of the player guessing the word ?");
    //gets the word player one types
    var word = prompt(playerOne + " what word would you like " + playerTwo + " to guess?");
    //takes 'guessword' and turns the string into lower case
    var lowerCaseWord = word.toLowerCase();
    //TURNS THE string INTO AN ARRAY
    var arrayWord = lowerCaseWord.split("");
    //ask player two for a letter
    //  console.log(element)'
   
    var hp = 0;
    var answerArray = [];
    for (var i = 0; i < arrayWord.length; i++) {
    answerArray[i] = "_";
   }
 
   webword.innerHTML += answerArray;
    document.onkeyup = function (presskey) {

        if (hp < 11) {
            var guessedletters = prompt(playerTwo + " what letter would you like to guess?")
            //guessed letters to lower case
            var letters = guessedletters.toLowerCase();

            if (arrayWord.indexOf(letters) === -1) {

                webletters.innerHTML += letters + " ";
                hp = hp + 1;
                webLifes.innerHTML = hp + "/10";



            }
             else {
                 
                
                   ////goes throught the whole word
                   for (var z = 0; z < arrayWord.length; z++) {
                   
                   //looks where the guess is
                    if (arrayWord[z] === letters) {
                        answerArray[z] = letters;
                     //displays word to guess on screen   
                      webword.innerHTML = answerArray;
                        }
                       }
            
                  
                
        



            }

        }

    }
}

//PC BOT VS HUMAN
else {

    var premadeWords = ["javascript", "google", "amazon", "uber", "bloomberg", "microsoft","ibm","samsung","apple","tesla","spacex"];
    
    var damage = 0;
    var computerGuess = premadeWords[Math.floor(Math.random() * premadeWords.length)];

    var word = computerGuess.split("");
//creates the word to display in the game
    var answerArray = [];
    //makes it the same leght as the word
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
   }
   //displays it on the screen
   webword.innerHTML += answerArray;
   //
    //gets plauers name
    var playerName = prompt("whats your name?");
    //lets player now hes ready to sarts
    alert(playerName + " type the letter you would like to guess!");
    //keys start working

   

    document.onkeyup = function (event) {

        // Determines which key was pressed.

        // var stringletters= userGuess.split();

        //loop


        //this code will run until the player runs out of guesses
        if (damage < 10) {
            var letters = prompt("what letter would you like to guess?");
            var lowerLetters = letters.toLowerCase();

            //if userguess is not on the word then  gets 1 damage
            if (word.indexOf(lowerLetters) === -1) {

                damage = damage + 1;
                webLifes.innerHTML = damage + "/10";

                webletters.innerHTML += lowerLetters + " ";

                alert('Wrong guess! ')
            }

            //if they get it right then 
            else {
                    
                for (var j = 0; j < word.length; j++) {
                 if (word[j] === lowerLetters) {
                     answerArray[j] = lowerLetters;
                     webword.innerHTML = answerArray;
                     }
                    }
                }
            }
        }
    }

