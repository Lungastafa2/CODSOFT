
var display = document.getElementById("screen_input") 


// Displaying numbers on screen function

function myNumberFunction(a) {

      display.value += a ;

  }

  //Evaluate the sum in the screen and display answer
  function myEqualFunction(){

    display.value = eval(display.value);

  }

// delete the  last number on the screen
function myDelFunction(){

  display.value = display.value.toString().slice(0,-1);

}

//clear everything on the screen
function myClearFunction() {

  display.value = ""

  }









