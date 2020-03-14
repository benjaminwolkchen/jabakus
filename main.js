// Init Sys
var user = 1
var aufgabe = 1
const numA = Array(1,2,3,4,5,6,7,8,9,10);
const numB = Array(1,2,3,4,5,6,7,8,9,10);
const numAA = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 );
const numBB = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 );
var score = 0
var highscore = 0


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
shuffle(numB);

// Get ready

aufgabe = numA[1] * numB[1];
alert(numA[1]+" * "+ numB[1]);
loesung = prompt("Was ist die Lösung?");

// Check if 'aufgabe' eqals 'loesung'
    if(aufgabe == loesung){
        alert("Herzlichen Glückwunsch! Die Aufgabe war richtig!")
    }else{
            // Check if user clicked Cancel.
            if (loesung === null) {
                return;
            };

        alert("Schade! Die Aufgabe hast du nicht richtig gelöst!")
        alert("Die richtige Lösung wäre "+aufgabe+".");
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
shuffle(numBB);

// Get ready

aufgabe = numAA[1] * numBB[1];
alert(numAA[1]+" * "+ numBB[1]);
loesung = prompt("Was ist die Lösung?");

// Check if 'aufgabe' eqals 'loesung'
    if(aufgabe == loesung){
        alert("Herzlichen Glückwunsch! Die Aufgabe war richtig!")
    }else{
            // Check if user clicked Cancel.
            if (loesung === null) {
                return;
            };

        alert("Schade! Die Aufgabe hast du nicht richtig gelöst!")
        alert("Die richtige Lösung wäre "+aufgabe+".");
    };

    start();
};
