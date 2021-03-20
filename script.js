

const setButtonColour = (inputButton, red, green, blue) => {
     inputButton.setAttribute('style', 'background-color: rgb('+ red +', '+ green +', '+ blue +');')
}

const makeColourValue = () => {
     return Math.round(Math.random() * 255)
}

let heading = document.getElementById('colourValue');
let buttons = document.getElementsByClassName('colourButton');
let answerMessage = document.getElementById('answer');
let reset = document.getElementById('resetButton');


const startGame = () => {
     answerMessage.innerHTML = "";
     
     let answerButton = Math.round(Math.random() * (buttons.length - 1));
     
     for (let i = 0; i <= buttons.length; i++) {
          
          let randomRed = makeColourValue();
          let randomGreen = makeColourValue();
          let randomBlue = makeColourValue();
          
          setButtonColour(buttons[i], randomRed, randomGreen, randomBlue);
          
          if(i === answerButton){
               heading.innerHTML = `(${randomRed}, ${randomGreen}, ${randomBlue})`;
          }
          
          buttons[i].addEventListener('click', function(){
               if(this === buttons[answerButton]){
                    answerMessage.innerHTML = 'Правильно!'
               } else {
                    answerMessage.innerHTML = 'Колір вгадано не правильно'
               }
          });
     }
}

reset.addEventListener('click', startGame);
startGame();