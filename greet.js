
//get button reference
var buttonGreetElem = document.querySelector(".but");
var resetGreetElem = document.querySelector(".clear");

var nameValue = document.querySelector(".box");
var displayText = document.querySelector(".displayMessage");
var displayCounterElem = document.querySelector(".displayCounter");
var erroMsgElement = document.querySelector(".errors");
var eriMessageElement = document.querySelector(".eri");


var regex = /^[A-Za-z ]+$/;
//empty array to store greeted names
var names = [];

var listNames;

if (localStorage['name']){
    listNames = JSON.parse(localStorage.getItem('name'));
}

if (localStorage[''])

//declare your counter and assign it to 0
var countingCounter =0;

var instanceGreet = greetExerciseFactory();

if(listNames){

    displayCounterElem.innerHTML = listNames.length
}

 function greetings(){
    var namesGreeted = nameValue.value;

    let countingCounter;

    

    
    //set counter to the value in localStorage if it's already there
    
    if (localStorage['countingCounter']){
        
        //make countingCounter equal to the value already stored in localStorage
    
        countingCounter = localStorage['countingCounter']
    
        //also show the countingCounter on the screen
        displayCounterElem.innerHTML = instanceGreet.countingCounter
    
    
    }
    
    var checkedGreetBtn = document.querySelector("input[name='language']:checked");
    

   
    if (checkedGreetBtn === null && namesGreeted==""){
        
       //please enter your name and select language
      
     erroMsgElement.innerHTML = "Please enter your name and select langauge";
     displayCounterElem.innerHTML = instanceGreet.Counterr();
     localStorage['countingCounter'] = instanceGreet.Counterr();

       setTimeout(function(){
        erroMsgElement.innerHTML = ""  
       }, 2000);
       return;

      

    }else if(!checkedGreetBtn){
       

     erroMsgElement.innerHTML = "Please select langauge" ;
     displayCounterElem.innerHTML = instanceGreet.Counterr();
     localStorage['countingCounter'] = instanceGreet.Counterr();

        setTimeout(function(){
           erroMsgElement.innerHTML = ""  
           }, 2000);
           return;
    }else if(namesGreeted== ""){
        //please enter name
     erroMsgElement.innerHTML = "Please enter your name";
     displayCounterElem.innerHTML = instanceGreet.Counterr();
     localStorage['countingCounter'] = instanceGreet.Counterr();

     setTimeout(function(){
        erroMsgElement.innerHTML = ""  
       }, 2000);

       
     return;
    //  displayText.innerHTML = "";
    // hhhh

       
        
    }

    else if (!regex.test(namesGreeted)){
        erroMsgElement.innerHTML = "Please enter invalid name i.e Amanda"
        displayCounterElem.innerHTML = instanceGreet.Counterr();
        localStorage['countingCounter'] = instanceGreet.Counterr();



        setTimeout(function(){
            erroMsgElement.innerHTML = ""  
           }, 2000);
           return;
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

    

        displayText.innerHTML = instanceGreet.greet_(checkedGreetBtn.value, nameValue.value)
        localStorage.setItem('name', JSON.stringify(instanceGreet.getName()));
         displayCounterElem.innerHTML = instanceGreet.Counterr();
        localStorage['countingCounter'] = instanceGreet.Counterr();
        

        namesGreeted.value = "";
    
        if(checkedGreetBtn.value === "English"){
            displayText.innerHTML = "Hello, " + newName;
            names.push(newName)
            
        }
          
        if (checkedGreetBtn.value === "Isixhosa"){
            displayText.innerHTML = "Molo, " + newName;
            names.push(newName)
            
        }

        if(checkedGreetBtn.value ==="French"){
            displayText.innerHTML = "Bonjour, " + newName;
            names.push(newName)
            
          
        }
       
        // countingCounter++;
        displayCounterElem.innerHTML = instanceGreet.Counterr();
        localStorage['countingCounter'] = instanceGreet.Counterr();

        namesGreeted.value = "";
        
        
        }
        checkedGreetBtn.checked = false 

    //for clearing my text input box

     document.querySelector(".box").value= "";
      console.log( document.querySelector(".box").value)

        //namesGreeted.value = "";
        console.log(namesGreeted.value);
        // displayText.innerHTML = "";

    //for unchecking my buttons

    document.querySelector(".eng").checked= false;
    document.querySelector(".isi").checked= false;
    document.querySelector(".fren").checked= false;
}

  // for resetting my counter

function resetCounter() {
    setTimeout(function(){
        // erroMsgElement.innerHTML = "local storage resetted"
        location.reload()  
       }, 2000);

       setTimeout(function(){
        eriMessageElement.innerHTML = "Local storage has been resetted"
        // location.reload()  
       }, 1000);

    countingCounter = 0;
    // namesValue.value = "";
    displayCounterElem.innerHTML = 0;
    localStorage['countingCounter'] = 0;
    localStorage.removeItem("countingCounter")
    localStorage.clear()
    displayText.innerHTML = "";
   
    document.querySelector(".eng").checked= false;
    document.querySelector(".isi").checked= false;
    document.querySelector(".fren").checked= false;
   



}

resetGreetElem.addEventListener('click', resetCounter)

buttonGreetElem.addEventListener('click', greetings)



