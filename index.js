var tmp;
var tmp2;
var CTask;
var score = 0;
var scoreTolerance = 10;
var beRight;

// import score
if($cookies.get("cookie-score") !== null){
score = $cookies.get("cookie-score");
console.log(score);
} // end import cookie if

// vue component that displays the message
var textDisplay = new Vue({
    el: '#text',
    data: {
      message: "Willkommen zu Jabacus, einem simplen Einmaleins Spiel.",
    },
})

// vue component that makes the button to what it is
var vueButton = new Vue({
    el: '#startBtn',
    data: {
        message: "Starte das Spiel!",
    },
    methods: {
        start: function (){
            // check if user entered the correct answer
            if(textBox.textBox1 == CTask && beRight == true){
                console.log("gut.")

                textDisplay.message = "Herzlichen Glückwunsch, du hast die Aufgabe richtig gelöst!"
                score++;
                beRight = false;

                // export score to cookie

                Vue.$cookies.set('cookie-score',score);

                // set scoreboard
                vueScoreBoard.scoreboard = "Du hast die Aufgabe \""+tmp+" mal "+tmp2+" = "+CTask+"\" richtig gelöst! \n" + "\nDein Score ist "+score+"";

                // set highscore
                if(scoreTolerance == score){
                    vueScoreBoard.scoreboard = "Du hast einen neuen Highscore! Dein Highscore ist: "+score+".";
                    scoreTolerance+10;
                    console.log("New ScoreTolerance: "+scoreTolerance+".")
                }
            }else{

            tmp =  Math.floor(Math.random() * 11);
            tmp2 =  Math.floor(Math.random() * 11);
            CTask = tmp * tmp2

            this.message = "Nächste Aufgabe!"
            textDisplay.message = "Was ist "+tmp+" * "+tmp2+"?"
            
            beRight = true;
            } // end if
        } // end start method
    } // End methods
})

// vue component that powers the textbox
var textBox = new Vue({
    el: '#TextBox',
    data: {
      textBox1: 0,
    },
})

// vue component that powers the scoreboard
var vueScoreBoard = new Vue({
    el: "#scoreboard",
    data:{
        scoreboard: '',
    } // End data
})

// Reset function
var vueResetBtn = new Vue({
    el:"#resetBtn",
    data:{
        message: 'Zurücksetzen',
    },
    methods: {
        reset: function (){
            // Reset
            Vue.$cookies.set('cookie-score',score);
            score = 0
            console.log("cookies deleted")
        } // End reset function
    } // end vueResetBtn methods
}) // End vueResetBtn

// Focus Btn method
function focusBtn(){
    document.getElementById("startBtn").focus();
}