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
    var board = ["-"];
    var hp = 0;
    
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
                 
                 webword.innerHTML += letters;
                
                // for (let x = 0; x < arrayWord.length; x++) {
                //     const element = arrayWord[x];
                //     board[x] = "";

                //     webword.innerHTML += board;
               
                //     console.log(element)
                    
                // }




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

                //prints guess on screen
                webword.innerHTML += lowerLetters;
                
                correctGuesses.push(letters);
                var wordToDisplay = '';
                for (let i = 0; i < word.length; i++) {
                    const element = word[i];
                    


                


                }

            }



        }
    }

}