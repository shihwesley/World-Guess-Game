var dictionary = ["Riddikulus",
                  "Obliviate", 
                  "Sectumsempra", 
                  "Crucio", 
                  "Alohomora", 
                  "Lumos", 
                  "Expelliarmus", 
                  "Oblivate", 
                  "Accio", 
                  "Stupefy" ];

var triesNum = 20;
var guesses = document.getElementById("guesses");

//This function returns a random spell from the the dicitonary. Works!
const spellSelection = function() {
    var randomNumber = Math.floor(Math.random() * dictionary.length);
    var spell = dictionary[randomNumber];
    return spell.toUpperCase(); 
}

const chosenSpell = spellSelection();
console.log(chosenSpell)

//This function returns _ on the screen
const spaces = function() {
    var spellArray = chosenSpell.split('');
    console.log(spellArray);
    for (var i = 0; i < spellArray.length; i++) {
        const $letters = document.getElementById("spellLetters");
        var col = document.createElement("span");
        col.setAttribute("class", "");
        col.setAttribute("id", i);
        col.textContent = "_   ";
        $letters.appendChild(col);
    }
}

spaces();

//Resetting the game
const reset = () => {
    triesNum = 20;
    spaces();
}


//Main function

    const main = () => {
        document.onkeyup = function(event) {
        const inputKey = event.key;
        console.log(inputKey);
        var array = chosenSpell.split("");
        for (var i = 0; i < array.length; i++) {
            if  (inputKey.toUpperCase() === array[i]) {
                //change the _ to the inputKey
                var change = document.getElementById(i);
                change.textContent = inputKey.toUpperCase() + "  ";

            } else {
                var miss = document.getElementById("missed-spelled");
                miss.textContent = inputKey.toUpperCase() + " is not in the spell!";
            }
        }
        triesNum = triesNum - 1;
        guesses.textContent = triesNum;
        if (triesNum === 0) {
            alert("Game Over!!!");
            //reset
            reset();
            main();
        }   
    }
    }
    main();
  

    //reset function



    //check if there is any _ left. if not then Player Wins.




