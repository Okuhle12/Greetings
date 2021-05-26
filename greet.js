
//get button reference
var buttonGreetElem = document.querySelector(".but");
var resetGreetElem = document.querySelector(".clear");

var nameValue = document.querySelector(".box");
var displayText = document.querySelector(".displayMessage");
var displayCounterElem = document.querySelector(".displayCounter");
var erroMsgElement = document.querySelector(".errors")


//empty array to store greeted names
var names = [];

//declare your counter and assign it to 0
var countingCounter = 0;

 function greetings(){
    var namesGreeted = nameValue.value;

    

    
    //set counter to the value in localStorage if it's already there
    
    if (localStorage['countingCounter']){
        //make countingCounter equal to the value already stored in localStorage
    
        countingCounter = localStorage['countingCounter']
    
        //also show the countingCounter on the screen
        displayCounterElem.innerHTML = countingCounter
    
    
    }
    
    var checkedGreetBtn = document.querySelector("input[name='language']:checked");
    

   
    if (checkedGreetBtn === null && namesGreeted==""){
       //please enter your name and select language
     
     erroMsgElement.innerHTML = "Please enter your name and select langauge";

       setTimeout(function(){
        erroMsgElement.innerHTML = ""  
       }, 2000);
       return;

    }else if(!checkedGreetBtn){

     erroMsgElement.innerHTML = "Please select langauge" ;

        setTimeout(function(){
           erroMsgElement.innerHTML = ""  
           }, 2000);
           return;
    }else if(!namesGreeted){
        //please enter name
     erroMsgElement.innerHTML = "Please enter your name";

     setTimeout(function(){
        erroMsgElement.innerHTML = ""  
       }, 2000);


     return;
    //  displayText.innerHTML = "";
    // hhhh

       
        
    }
    // else if(!namesGreeted==""){
    //     alert("not")
    //     return
    // }
    if(checkedGreetBtn){

        //this help the app not to count one name twice when the name is greeted more than once

        var lowerCase = namesGreeted.toLowerCase();
        var upperCase = lowerCase.charAt(0).toUpperCase();
        var deleteCharacter = lowerCase.slice(1);
        var newName = upperCase + deleteCharacter;

        if(names.includes(newName)){

            if(checkedGreetBtn.value === "English"){
                displayText.innerHTML = "Hello, " + newName;
            }
              
            if (checkedGreetBtn.value === "Isixhosa"){
                displayText.innerHTML = "Molo, " + newName;
            }
    
            if(checkedGreetBtn.value ==="French"){
                displayText.innerHTML = "Bonjour," + newName;
              
            }

            return;
        }

        
        //write it on the factory function
        

     

    
        if(checkedGreetBtn.value === "English"){
            displayText.innerHTML = "Hello, " + newName;
            names.push(newName)
            
        }
          
        if (checkedGreetBtn.value === "Isixhosa"){
            displayText.innerHTML = "Molo, " + newName;
            names.push(namesGreeted)
            
        }

        if(checkedGreetBtn.value ==="French"){
            displayText.innerHTML = "Bonjour," + newName;
            names.push(namesGreeted)
            
          
        }
       
        countingCounter++;
        displayCounterElem.innerHTML = countingCounter;
        localStorage['countingCounter'] = countingCounter;

        namesGreeted.value = "";
        
        
        }

    //for clearing my text input box

     document.querySelector(".box").value= "";
      console.log( document.querySelector(".box").value)

        //namesGreeted.value = "";
        console.log(namesGreeted.value);
        // displayText.innerHTML = "";

    //for unchecking my button

    document.querySelector(".eng").checked= false;
}

function resetCounter() {

   

    countingCounter = 0;
    // namesValue.value = "";
    displayCounterElem.innerHTML = 0;
    localStorage['countingCounter'] = 0;
    displayText.innerHTML = "";

}

resetGreetElem.addEventListener('click', resetCounter)

buttonGreetElem.addEventListener('click', greetings)



