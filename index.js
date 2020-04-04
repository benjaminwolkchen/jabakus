var tmp
var tmp2
var CTask

// vue component that displays the message
var textDisplay = new Vue({
    el: '#text',
    data: {
      message: "Willkommen zu 1o1, einem simplen Einmaleins Spiel.",
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
            if(textBox.textBox1 == CTask){console.log("success")}

            tmp =  Math.floor(Math.random() * 11);
            tmp2 =  Math.floor(Math.random() * 11);
            CTask = tmp * tmp2

            this.message = "Nächste Aufgabe!"
            textDisplay.message = "Was ist "+tmp+" * "+tmp2+"?"
            if(textBox.textBox1 == CTask){
                textDisplay.message = "Gut gemacht, du hast die Aufgabe richtig gelöst!"
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