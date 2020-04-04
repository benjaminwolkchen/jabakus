var message
var tmp
var tmp2
var CTask

// vue component that displays the message
var textDisplay = new Vue({
    el: '#text',
    data: {
      message: message,
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
            tmp =  Math.floor(Math.random() * 11);
            tmp2 =  Math.floor(Math.random() * 11);
            
        } // end start method
    } // End methods
})