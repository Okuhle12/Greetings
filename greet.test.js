
// describe('The greetings exercise unit tests', function(){
    

        describe('Languages', function(){
    
            


        it('Should be able to greet people in English', function(){

            let greets = greetExerciseFactory();

       
        
        assert.equal("Hello, Amanda", greets.greet_('English', 'AmanDa'));
    
             

    });


    
    it('Should be able to greet people in English', function(){

        let greets = greetExerciseFactory();

    
    
    assert.equal("Hello, Qaqamba", greets.greet_('English', 'qaqamba'));
   });
   it('Should be able to greet people in English', function(){

    let greets = greetExerciseFactory();



assert.equal("Hello, Zusiphe", greets.greet_('English', 'zUSIPhe'));
});



   it('Should be able to greet people in Isixhosa', function(){

    let greets = greetExerciseFactory();


  assert.equal("Molo, Kungawo", greets.greet_('Isixhosa', 'KuNGAwo'));

  });
  it('Should be able to greet people in Isixhosa', function(){

    let greets = greetExerciseFactory();


  assert.equal("Molo, Sisamkelo", greets.greet_('Isixhosa', 'Sisamkelo'));

  });
  it('Should be able to greet people in Isixhosa', function(){

    let greets = greetExerciseFactory();


  assert.equal("Molo, Olwethu", greets.greet_('Isixhosa', 'OlweTHU'));

  });
  it('Should be able to greet people in French', function(){

    let greets = greetExerciseFactory();



  assert.equal("Bonjour, Sakhiwo", greets.greet_('French', 'SaKHiwo'));
  });
  it('Should be able to greet people in French', function(){

    let greets = greetExerciseFactory();



  assert.equal("Bonjour, Lihle", greets.greet_('French', 'LihlE'));
  });
  it('Should be able to greet people in French', function(){

    let greets = greetExerciseFactory();



  assert.equal("Bonjour, Leeeh", greets.greet_('French', 'LeeeH'));
  });
  it('Should return "invalid name" when a character greeted contains numbers and string', function(){

    let greets = greetExerciseFactory();



assert.equal("invalid name", greets.greet_("English", "amanda2222"));

     

});

it('Should return "invalid name" when a character greeted contains numbers and strings', function(){

    let greets = greetExerciseFactory();



assert.equal("invalid name", greets.greet_("English", "kulo5555222255222!!!!!1*"));

});

it('Should return "invalid name" when a character greeted contains numbers and string', function(){

    let greets = greetExerciseFactory();



assert.equal("invalid name", greets.greet_("English", "Noloyiso897&&&%"));

});





  });
  
  describe('Counter', function(){
    
            


    it('Should be able to count the number of people greeted', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda");
        greets.storedNames("Amish")

        assert.equal(2, greets.Counterr());
    });

    it('Should be able to count the number of people greeted', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda");
        greets.storedNames("AmAnDA");

        assert.equal(1, greets.Counterr());
    });
    it('Should be able to count the number of people greeted', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda");
        greets.storedNames("Amish");
        greets.storedNames("KungA");


        assert.equal(3, greets.Counterr());
    });


    it('Should not count when the character contains numbers and strings', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda22");
        greets.storedNames("AmAnDA!");

        assert.equal(0, greets.Counterr());
    });
    it('Should not count when the character contains numbers and strings', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda22");
        greets.storedNames("AmAnDA!");
        greets.storedNames("AmAnDA");

        assert.equal(1, greets.Counterr());
    });
});

describe('Error Messages', function(){
    

    it('Should be able to return an error message that says "Please enter your name and select langauge" when no name is typed in the text box and no language is selected', function(){

        let greets = greetExerciseFactory();

   
    
    assert.equal("Please enter your name and select langauge", greets.errorMessage(null, ""));
    
})
it('Should be able to return an error message that says "Please select langauge" When no language is selected and name is entered in the text box', function(){

    let greets = greetExerciseFactory();



assert.equal("Please select langauge", greets.errorMessage(null, "Amanda"));
})
it('Should be able to return an error message that says "Please enter your name" When language is selected and  no name is entered in the text box', function(){

    let greets = greetExerciseFactory();



assert.equal("Please enter your name", greets.errorMessage("English", ""));
})
})

    



    
    