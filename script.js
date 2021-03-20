let heading = document.getElementById('colourValue');
let buttons = document.getElementsByClassName('colourButton');


const setButtonColour = (inputButton, red, blue, green) => {
     return inputButton.setAttribute('style', 'background-color: rgb('+ red +', '+ green +', '+ blue +');')
}

const makeColourValue = () => {
     return Math.round(Math.random() * 255)
}

for (let i = 0; i < buttons.length; i++) {

     let randomRed = makeColourValue();
     let randomGreen = makeColourValue();
     let randomBlue = makeColourValue();
   
     setButtonColour(buttons[i], randomRed, randomGreen, randomBlue);
   
}


setButtonColour(buttons[0], randomRed, randomGreen, randomBlue);
console.log('ok');