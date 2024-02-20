var number ="";
var sum = 0;
var num = 0;
var numbers = [];
var sign = [];

var setScreen = document.getElementById("screen_input") 




function myNumberFunction(a) {

    number  = number + a + "";

   
    
    setScreen.value = number ;
    
  }




function mySignFunction(b) {


    
    if (b==="P"){

        numbers.push(number);
        sign.push("+");
        console.log(numbers);
        console.log(sign);
    }
    else if (b==="E"){

            numbers.push(number)
            for(i=0; i< numbers.length;i++){

                num= parseInt(numbers[i]);


                sum += num

            
        
            }
            console.log(sum)

        
    }

     number = "" ;
   
  }


// function myOneFunction() {

//     number = 1 ;

//     setScreen.value = number;
//   }


//   function myTwoFunction() {
//     number = 2 ;
//     setScreen.value = number;
//   }


//   function myThreeFunction() {
//     number = 3 ;
//     setScreen.value = number;
//   }


//   function myFourFunction() {

//     number = 4 ;
//     setScreen.value = number;
//   }


//   function myFiveFunction() {
//     number = 5 ;
//     setScreen.value = number;
//   }



//   function mySixFunction() {

//     number = 6 ;
//     setScreen.value = number;
//   }


//   function mySevenFunction() {
//     number = 7 ;
//     setScreen.value = number;
//   }


//   function myEightFunction() {

//     number = 8 ;
//     setScreen.value = number;
//   }


//   function myNineFunction() {
//     number = 9 ;
//     setScreen.value = number;
//   }





































//   function myPlusFunction() {
//     sum += number
     
//   }

//   function mySubtractFunction() {
//     sum -= number
     
//   }

//   function myMultplyFunction() {
//     sum *= number
     
//   }

//   function myDivideFunction() {
//     sum /= number
     
//   }

//   function myEqualFunction() {
//     // myPlusFunction();
//     setScreen.value = sum
     
//   }


