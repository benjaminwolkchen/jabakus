
    // Speech
    if (annyang) {
        // Let's define our first command. First the text we expect, and then the function it should call
        var commands = {
        'einfach': function() {
            vueButton.start
              },
        'schwer': function() {
            hardButton.startHard
                            },
          'eins': function() {
            textBox.textBox1 += "1"
          },
          'zwei': function() {
            textBox.textBox1 += "2"
          },
          'drei': function() {
            textBox.textBox1 += "3"
          },
          'vier': function() {
            textBox.textBox1 += "4"
          },
          'fünf': function() {
            textBox.textBox1 += "5"
          },
          'sechs': function() {
            textBox.textBox1 += "6"
          },
          'sieben': function() {
            textBox.textBox1 += "7"
          },
          'acht': function() {
            textBox.textBox1 += "8"
          },
          'neun': function() {
            textBox.textBox1 += "9"
          },
          'null': function() {
            textBox.textBox1 += "0"
          },
          'fertig': function() {
            if(currentMode == "easy"){
                vueButton.start
            }else if(currentMode == "hard"){
                hardButton.startHard
            }
          },
          
        };
      
        // Add our commands to annyang
        annyang.addCommands(commands);
      
        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start();
      }

if(annyang !== true && Vue.$cookies.get("voice") == true){
  $('#voiceModal').modal('show')
}
