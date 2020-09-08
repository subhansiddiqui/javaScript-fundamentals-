////////////////////// !   LOOPS STARTED //////////////////////////////////

// 
////////////////////////         * chapter 18 starts        /////////////////////////

//////////////// !                 for loops syntax                      ///////////////////////

//////!  revision   ///////
/*
var animals = []
animals = ["subhan", "muneeb", "haseeb", "moiz"]
console.log(animals[0]);
animals [4] = "ubaid";
alert(animals[4]);
console.log(animals[4]);
animals.pop();
console.log(animals[4])
animals.push("ali", "aman");
console.log(animals[5]);
animals.shift();                             ////! alll arrrays revision /////
console.log(animals[0]);                            ////////////////////!
animals.unshift("subhan", "hassan");
console.log(animals[0]);
animals.splice(0, 1,)
console.log(animals[0]);
animals.splice(0, 1, "subhan");
console.log(animals[0]);
animals.splice(6, 0, "azeem", "kamran");
console.log(animals[6]);
console.log(animals[7]);
var human = []
human = animals.slice(0,7);
console.log(human[6]);
*/
        
//*        for ([initialization]; [condition]; [final-expression])
//*        statement
/*

var pakistanBorders = ["india", "bangladesh", "afghanistan", "iran", "china"]
var neighbourCheck =prompt("write any one country that is neighbour of pakistan");

var answer = false
var numborders = pakistanBorders.length;
console.log(numborders);

for (var i = 0 ; i < numborders ; i++){
    console.log(i + ":checking" + pakistanBorders[i])
    if (neighbourCheck === pakistanBorders[i]){
        alert("its one of the neighbours of pakistan");
        answer = true;
        console.log(i + "checking" + pakistanBorders[i]);
        break;
    //// ! Now the loop keeps going as long as i is less than the number of elements. (Since the
    ////  ! length number is 1-based and the i number is 0-based, we need to stop 1 short of the length.)
        
    }
    
}
if (answer === false){
    alert("its not a neighbour");
}
*/

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++){
for (var j = 0; j < lastNames.length; j++){
fullNames.unshift(firstNames[i] + lastNames[j]);
console.log("main loop completed");
console.log(fullNames);
var subhan = fullNames.length
console.log(subhan);
console.log(i);
console.log(j);
}


    }
    
   var subhan = ["subhan is going to " , "haseeb is going to ", "muneeb is going to "];
   var places = ["washroom", "club", "work", "shopping", "walking"];
   var all = [];
   for (i = 0 ; i < subhan.length ; i++){
       for (j = 0 ; j < places.length ; j++){
           all.push(subhan[i] + places[j]);
           console.log(all);
           console.log("main loop completed");
           console.log(j);
           console.log(i);

           document.write(all + "</br>");

       }
   }


   var our = [];
   for ( var i = 0 ; i < 5 ; i ++ ){
    console.log("subhan" , i);

       if (i > 2){
           break;
       }
       our.push(i);

   }
  console.log(our);
  /*
  var sub = [
      [1 , 2] , [3, 4], [5, 6]
  ];
  var total = []
  for ( var i = 0 ; i < sub.length ; i++ ){
      for (var k = 0 ; i < sub[i].length ; i++){
      total.push([i] [k]);
      console.log(total)  ;
    }

  }
  */
 for (var elephant = 1; elephant < 10; elephant+=2) {
    if (elephant === 10) {
        break;
    }
    console.log('elephant is ' + elephant);
}      



////////! remember this //////////////
 // *The inner loop runs a complete cycle of iterations on each iteration of the outer loop. If
// *the outer loop counter is i and the inner loop counter is j , j will loop through 0, 1, 2, and
// *all the way to the end while i is on 0. Then i will increment to 1, and j will loop through
//* all of its values again. 
//!  The outer loop is the minute hand of a clock. The inner loop is the
// ! second hand.
        
//// ! LOOPS DONE FOR NOW 
////!  MORE PRACTICES SHOULD BE DONE BELOW; 
////// * lets create a function that tell u your birth years
// var askAge = +prompt("what is your age , i will tell u your birth year")
// console.log(askAge);
// var sort = 2020 - askAge;
// console.log(sort);



