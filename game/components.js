// vue component that powers the scoreboard
var vueScoreBoard = new Vue({
    el: "#scoreboard",
    data: {
        scoreboard: "",
    },
})

// NOTHING

if(window.location.hash == ""){

// Simulate a mouse click:
window.location.href = "https://jabakus.netlify.app";

// Simulate an HTTP redirect:
window.location.replace("https://jabakus.netlify.app");}