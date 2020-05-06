// vue component that powers the scoreboard
var vueScoreBoard = new Vue({
    el: "#scoreboard",
    data:{
        scoreboard: '',
    } // End data
})

// NOTHING

if(window.location.hash == ""){
    $('#errorModal').modal('show')
}