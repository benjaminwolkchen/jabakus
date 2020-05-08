/////////////////////////
/// MINUS ///////////////
/////////////////////////
if(window.location.hash == "#minus"){

    var tmp;
    var tmp2;
    var CTask;
    
    var score = 0;
    var scoreTolerance = 1;
    
    var beRight;
    var currentMode = "";
    
    var wrongAnswersTmp = [];
    var wrongAnswersTmp2 = [];
    var round = 0
    var roundTolerance = 5;
    var randomNumber = Math.floor(Math.random() * wrongAnswersTmp.length)
    
    // import score
    if($cookies.get("minus-score") !== null){
    score = $cookies.get("minus-score");
    console.log(score);
    } // end import cookie if
    
    // vue component that displays the message
    var textDisplay = new Vue({
        el: '#text',
        data: {
          message: "Willkommen zu Jabakus, einem simplen Minus Spiel.",
        },
    })
    
    // vue component that makes the button to what it is
    var vueButton = new Vue({
        el: '#startBtn',
        data: {
            message: "Starte das Spiel!",
        },
        methods: {
            start: function (){if (currentMode == "" || currentMode == "easy"){
                // set current mode
                currentMode = "easy";
    
                // check if user entered the correct answer
                if(textBox.textBox1 == CTask && beRight == true){
                    console.log("gut.")
    
                    textDisplay.message = "Herzlichen Glückwunsch, du hast die Aufgabe richtig gelöst!"
                    score++;
                    beRight = false;
    
                    // export score to cookie
    
                    Vue.$cookies.set('minus-score',score);
    
                    // set scoreboard
                    vueScoreBoard.scoreboard = "Du hast die Aufgabe \""+tmp+" mal "+tmp2+" = "+CTask+"\" richtig gelöst! \n" + "\nDein Score ist "+score+"";
    
                    // set highscore
                    if(scoreTolerance == score){
                        vueScoreBoard.scoreboard = "Du hast einen neuen Highscore! Dein Highscore ist: "+score+".";
                        scoreTolerance+10;
                        console.log("New ScoreTolerance: "+scoreTolerance+".")
                    }
                }else if(beRight == true && CTask !== textBox.textBox1){
                    vueScoreBoard.scoreboard = "Du hast die Aufgabe falsch gelöst. Die richtige Antwort wäre "+CTask+"."
                    console.log(textBox.textBox1)
                    beRight = false;

                    // write to array
                    wrongAnswersTmp.push(tmp)
                    wrongAnswersTmp2.push(tmp2)

                    round++
    
                }else{
                    if(beRight !== true){
                        if(round == roundTolerance){
                            tmp = wrongAnswersTmp[randomNumber]
                            tmp2 = wrongAnswersTmp2[randomNumber]

                            CTask = tmp - tmp2;
                            
                            this.message = "Nächste Aufgabe!"
                            textDisplay.message = "Was ist "+tmp+" minus "+tmp2+"?"

                            beRight = true;

                            round = 0
                        } // end if pt1
                        
                        tmp =  Math.floor(Math.random() * 11);
                        tmp2 =  Math.floor(Math.random() * 11);
                        CTask = tmp - tmp2
    
                        this.message = "Nächste Aufgabe!"
                        textDisplay.message = "Was ist "+tmp+" minus "+tmp2+"?"
                        
                        beRight = true;
                    } // END if
                } // end if
            }} // end start method
        } // End methods
    })
    ///////////////////
    //-- HARD MODE --//
    ///////////////////
    
    // Hard mode button
    var vueButton = new Vue({
        el: '#hardBtn',
        data: {
            message: "Hard Mode",
        },
        methods: {
            startHard: function (){
                if (currentMode == "" || currentMode == "hard"){
                currentMode = "hard";
                // check if user entered the correct answer
                if(textBox.textBox1 == CTask && beRight == true){
                    console.log("gut.")
    
                    textDisplay.message = "Herzlichen Glückwunsch, du hast die Aufgabe richtig gelöst!"
                    score++;
                    beRight = false;
    
                    // export score to cookie
    
                    Vue.$cookies.set('minus-score',score);
    
                    // set scoreboard
                    vueScoreBoard.scoreboard = "Du hast die Aufgabe \""+tmp+" mal "+tmp2+" = "+CTask+"\" richtig gelöst! \n" + "\nDein Score ist "+score+"";
    
                    // set highscore
                    if(scoreTolerance == score){
                        vueScoreBoard.scoreboard = "Du hast einen neuen Highscore! Dein Highscore ist: "+score+".";
                        scoreTolerance+10;
                        console.log("New ScoreTolerance: "+scoreTolerance+".")
                    }
                }else if(beRight == true && CTask !== textBox.textBox1){
                    vueScoreBoard.scoreboard = "Du hast die Aufgabe falsch gelöst. Die richtige Antwort wäre "+CTask+"."
                    console.log(textBox.textBox1)
                    beRight = false;

                    // write to array
                    wrongAnswersTmp.push(tmp)
                    wrongAnswersTmp2.push(tmp2)

                    round++
    
                }else{
                    if(beRight !== true){
                        if(round == roundTolerance){
                            tmp = wrongAnswersTmp[randomNumber]
                            tmp2 = wrongAnswersTmp2[randomNumber]

                            CTask = tmp + tmp2;
                            
                            this.message = "Nächste Aufgabe!"
                            textDisplay.message = "Was ist "+tmp+" plus "+tmp2+"?"

                            beRight = true;

                            round = 0
                        } // end if pt1
                        
                        tmp =  Math.floor(Math.random() * 110);
                        tmp2 =  Math.floor(Math.random() * 110);
                        CTask = tmp - tmp2
    
                        this.message = "Nächste Aufgabe!"
                        textDisplay.message = "Was ist "+tmp+" minus "+tmp2+"?"
                        
                        beRight = true;
                    } // END if
                } // end if
            }
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
                score = 0;
                scoreTolerance = 5;
                
                beRight = true;
                currentMode = "";
                
                wrongAnswersTmp = [];
                wrongAnswersTmp2 = [];
                round = 0
                roundTolerance = 5;
                randomNumber = Math.floor(Math.random() * wrongAnswersTmp.length)

                location.reload();
            } // End reset function
        } // end vueResetBtn methods
    }) // End vueResetBtn
}