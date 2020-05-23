// vue component that powers the scoreboard
var vueScoreBoard = new Vue({
    el: "#scoreboard",
    data: {
        scoreboard: "",
    },
})

// NOTHING

if(window.location.hash == ""){
    $('#errorModal').modal('show')
}