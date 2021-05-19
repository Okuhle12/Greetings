var buttonSetting = document.querySelector(".buttonSetting");

var buttonGreetElem = document.querySelector(".but");


var namesGreeted = document.querySelector(".box");
var displayText = document.querySelector(".displayMessage");





  function greetings(){
    var checkedGreetBtn = document.querySelector("input[name='language']:checked");
    

   
    if(checkedGreetBtn){
    
        if(checkedGreetBtn.value === "English"){
            displayText.innerHTML = "Hello, " + namesGreeted.value;
        }
          
            if (checkedGreetBtn.value === "Isixhosa"){
                displayText.innerHTML = "Molo, " + namesGreeted.value;
            }

            if(checkedGreetBtn.value ==="French"){
                displayText.innerHTML = "Bonjour," + namesGreeted.value
            }
       

        
        }


}

buttonGreetElem.addEventListener('click', greetings)



