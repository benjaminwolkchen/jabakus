var mainGame = new Vue({
    el: '#app',
    data: {
        message: "Starte das Spiel",
        UserInput: 0,
    },
    methods:{
        start: function(){
            // Change Button Text
            mainGame.message = "Nächste Aufgabe"
        } // END start method
    }
})