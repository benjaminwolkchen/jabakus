var i, ii, iii, ComputerTask, TaskOutput;

function generateTask(){
    i = Math.floor(Math.random() * 11);
    ii = Math.floor(Math.random() * 11);
    

    if(conf.mode == "plus"){
    ComputerTask = i + ii;
    TaskOutput = i+" + "+ii;
    }else 
    if(conf.mode == "minus"){
        ComputerTask = i + ii;
        TaskOutput = i+" + "+ii;
    }else 
    if(conf.mode == "times"){
        ComputerTask = i + ii;
        TaskOutput = i+" + "+ii;
    }else 
    if(conf.mode == "dividing"){
        iii = i * ii;
        ComputerTask = iii / ii;
        TaskOutput = iii+" ÷ "+ii;
    }
}

if(conf.mode == "plus"){
    var mainGame = new Vue({
        el: '#app',
        data: {
            message: "Starte das Spiel",
            TaskText: "Ich glaube, der Knopf könnte hilfreich sein...",
            UserInput: 0,
        },
        methods:{
            start: function(){
                if(mainGame.UserInput == ComputerTask){
                    mainGame.TaskText == "Herzlichen Glückwunsch - du hast die Aufgabe gelöst!"
                    
                }else{

                // Change Button Text
                mainGame.message = "Nächste Aufgabe";
                mainGame.TaskText = "";

                generateTask();
                mainGame.TaskText = "Was ergibt "+TaskOutput+"?"

                }// End else
            } // END start method
        }
    })
}else if(conf.mode == "minus"){
    var mainGame = new Vue({
        el: '#app',
        data: {
            message: "Starte das Spiel",
            UserInput: 0,
        },
        methods:{
            start: function(){
                if(mainGame.UserInput == ComputerTask){
                    mainGame.TaskText == "Herzlichen Glückwunsch - du hast die Aufgabe gelöst!"
                    
                }else{

                // Change Button Text
                mainGame.message = "Nächste Aufgabe";
                mainGame.TaskText = "";

                generateTask();
                mainGame.TaskText = "Was ergibt "+TaskOutput+"?"

                }// End else
            } // END start method
        }
    })
}else if(conf.mode == "times"){
    var mainGame = new Vue({
        el: '#app',
        data: {
            message: "Starte das Spiel",
            UserInput: 0,
        },
        methods:{
            start: function(){
                if(mainGame.UserInput == ComputerTask){
                    mainGame.TaskText == "Herzlichen Glückwunsch - du hast die Aufgabe gelöst!"
                    
                }else{

                // Change Button Text
                mainGame.message = "Nächste Aufgabe";
                mainGame.TaskText = "";

                generateTask();
                mainGame.TaskText = "Was ergibt "+TaskOutput+"?"

                }// End else
            } // END start method
        }
    })
}else if(conf.mode == "dividing"){
    var mainGame = new Vue({
        el: '#app',
        data: {
            message: "Starte das Spiel",
            UserInput: 0,
        },
        methods:{
            start: function(){
                if(mainGame.UserInput == ComputerTask){
                    mainGame.TaskText == "Herzlichen Glückwunsch - du hast die Aufgabe gelöst!"
                    
                }else{

                // Change Button Text
                mainGame.message = "Nächste Aufgabe";
                mainGame.TaskText = "";

                generateTask();
                mainGame.TaskText = "Was ergibt "+TaskOutput+"?"

                }// End else
            } // END start method
        }
    })
}