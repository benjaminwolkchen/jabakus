var tmp;
var tmp2;
var CTask;
var score = 0;
var beRight;

// vue component that displays the message
var textDisplay = new Vue({
    el: '#text',
    data: {
      message: "Willkommen zu Jabacus, einem simplen Einmaleins Spiel.",
    },
})

// Vue component that provides the input form logic


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
                setTimeout(() => {
                    
                }, 2000);
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