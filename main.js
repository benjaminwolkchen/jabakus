// Init Sys
var user = 1
var aufgabe = 1
const numA = Array(1,2,3,4,5,6,7,8,9,10);
const numAA = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 );
var score = 0;
var highscore = 0;
var scoredistance = 10;

// Clear console
console.clear();

// Shuffle NumA Function

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// Start Function

function start(){
    aufgabe = "";

// Shuffle Array

shuffle(numA);
console.log("shuffled array.");

// Get ready

aufgabe = numA[0] * numA[1];
alert(numA[0]+" * "+ numA[1]);

loesung = prompt("Was ist die Lösung?");

// Check if 'aufgabe' eqals 'loesung'
    if(aufgabe == loesung){
        alert("Herzlichen Glückwunsch! Die Aufgabe war richtig!");
            score++
            console.log("User got task right. 👍")

            if(score > highscore){highscore = score; console.log("The new highscore is "+highscore+".");};
            if(scoredistance == highscore){alert("Dein neuer Highscore ist "+highscore+"! \n Herzlichen Glückwunsch!"); scoredistance = scoredistance + 10; console.log("Set scoredistance to "+scoredistance+".")};
    }else{
            // Check if user clicked Cancel.
            if (loesung === null) {
                console.log("user clicked cancel.");
                return;
            };

        alert("Schade! Die Aufgabe hast du nicht richtig gelöst!");
        alert("Die richtige Lösung wäre "+aufgabe+".");
        score--;
        console.log("user got task wrong. 👎");
    };

    start();
};

/////////////////
// Hard Mode ////
/////////////////

// Start Function

function hard(){
    aufgabe = "";

// Shuffle Array

shuffle(numAA);
console.log("shuffled array.");

// Get ready

aufgabe = numAA[0] * numAA[1];
alert(numAA[0]+" * "+ numAA[1]);
loesung = prompt("Was ist die Lösung?");

// Check if 'aufgabe' eqals 'loesung'
    if(aufgabe == loesung){
        alert("Herzlichen Glückwunsch! Die Aufgabe war richtig!")
        score++
            console.log("User got task right. 👍")

            if(score > highscore){highscore = score; console.log("The new highscore is "+highscore+".");};
            if(scoredistance == highscore){alert("Dein neuer Highscore ist "+highscore+"! \n Herzlichen Glückwunsch! 👍"); scoredistance = scoredistance + 10; console.log("Set scoredistance to "+scoredistance+".")};

    }else{
            // Check if user clicked Cancel.
            if (loesung === null) {
                return;
            };

        alert("Schade! Die Aufgabe hast du nicht richtig gelöst!")
        alert("Die richtige Lösung wäre "+aufgabe+".");
        score--;
        if(score < 0){console.log("User lost the game! 💔"); alert("Schade! Du hast leider verloren! 💔 \nVersuch es noch einmal!"); return;}
    };

    start();
};
