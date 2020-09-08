 console.log("hello we are learning functions");
 //
 //
 ////////////////! chapter 35 starts : functions
 //// * lets create some function
 //// ! TIME TELLING FUNCTION.
 function currentTime(){
     var dateAndTime = new Date();
          console.log(dateAndTime);
     var hours = dateAndTime.getHours();
               console.log(hours);
     var minute = dateAndTime.getMinutes();
            console.log(minute);
     var sec = dateAndTime.getSeconds();
     console.log(hours + " : " + minute + " : " + sec)
     var day = dateAndTime.getDay();                           ////// * tells CURRENT date and time....
          console.log(day);                                              ////////////*
     var date = dateAndTime.getDate()
        console.log(date)
     var year = dateAndTime.getFullYear();
         console.log(year);
     var month = dateAndTime.getMonth();
         console.log(month)
      console.log( "Date : " + date.toString()+ " / " + "Month : "+ (month + 1) + " / " +  "Year : "+ year.toString());
 }
 currentTime()
 ///
 ///
 ////////// !  CHAPTER 35 FINNISHES..
 //
 //
 //////////////////////! CHAPTER 36 STARTS //////////////////////////
 //// * lets create a function
 //// * return
 var naming = function(naming){
     return  naming;
 }
 console.log(naming);  // * returning the full functio
 console.log(naming("joe")) // * if we put parenthesis
                       // * it will work fine.
 console.log(naming("subhan"));

 //////////////////////////*////////////*

 var adding = function(num0){
     return function (num1){
         return +num0 + num1;
     }                                           
 }
 console.log(adding(6)(4));  //* 5

 ////////////*//////////////////////*
 
 function combining(string1){
     return function(string2){
         return string1 + string2
     }
 }
console.log(combining("Subhan") (" Siddiqui"));


//////// ! chapter 37 starts
console.log("chapter of return starts");
 
var howMuch = +prompt("how much u wanna shop for ?");

function total(pricing){
    var shoppingTotal ;

    if (pricing >= 100){
        shoppingTotal = pricing;
    }
    else if (pricing >= 50){
        shoppingTotal = pricing + 4
    }
    else if (pricing > 1 || pricing < 50){
        shoppingTotal = pricing + 5
    }
    

    return ("YOUR TOTAL BILL IS : " +  Number(shoppingTotal) );
    
}

var calculate = total(howMuch);
console.log(calculate);























  ////// ! THIS FUNCTION FINDS THE GREATESGT NUMBER ////////
// var first;
//  function maxFinder(array = []){
//      first = array[0];
//         console.log(first);
//     for (var i = 0 ; i < array.length ; i++){
//         if (first <= array[i]){
//             first = array[i];
//               console.log(first);
//               console.log(i);

//         }
//     }
//  }
//  var number = [20 , 39 , 78 , 65 , 98 , 99 , 99.6 , 99.87];
//  console.log(number);
// maxFinder(number);
// console.log("the greatest number is :" + first);
//!////////////////////////////////////////////////////////////////////!
