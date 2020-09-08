////////// ! ===================== chapter 15 starts ==========================================
//////////////// * ==================     arrays      ==================
//var countries = ["pakistan", "afghanistan", "china", "india", "africa", "iran", "Australia", "bangladesh"]
//alert(countries[1]);

// *array syntax = var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
////////// *  /////////     //////             ///////    //////////  //////   //////     ///////
 
//// *    Like an ordinary variable, you declare an array only once. If you assign new values to an
//// *    array that has already been declared, you drop the var .

//var countries = ["Atlanta", "Baltimore", "C/home/subhan/Docum/home/subhan/Documents/javaScript/15-and-Onwards/index2.htmlents/javaScript/15-and-Onwards/index2.htmlhicago", "Denver", "Los Angeles", "Seattle"];
//alert(countries[5]);

/// ? this code is uncompleted ///////====
/*
var ask = prompt("write something i will tell you its a integer or a character")
if (ask - ask === 0){
    alert("its a integer");
}
*/

/// 
///
///  * ===========================chapter 16 starts====================
/*
 var pets = [];
pets[0] = "tiger"
pets[1] = "dog"
pets[5] ="cat"
pets[2] = "horse"
pets[3] = "camel"
pets[4] = "sheep"
alert(pets[0]);
pets.pop();/// ! it only pops the last element when used with (parenthesis);
alert(pets[5]);
pets.push("lion", "deer")   //// ! => .push adds elements to the end of array 
alert(pets[5]);
alert(pets[6]);

///
///
////// * ==========================  chapter 17 starts ============================ 
pets.shift();  //// ! .shift removes first element from the beginning.
alert(pets[0]); //// * this alerts dog

pets.unshift("elephant", "peacock"); ////! .unshift adds elements to the beginning /// 

alert(pets[0]); /// * =>this will alert elephant beacause we have added elements to its beginning
*/


/*
var pets = ["lion", "elephant", "deer", "goat", "cow", "cat", "dog"]
pets.splice(5, 0, "sheep", "camel") //// ! .splice add and removes from anywhere in the array !
alert(pets[5]); //// * this will be sheep
pets.splice(5, 2);

alert(pets[5]) ////// * this will be cat
//////////////////////////// ! remeber this //////////////////////////

////?    The first digit inside the parentheses is the index of the position where you want to start
////?    adding if you're adding and deleting if you're deleting. The second digit is the number of
////?    existing elements to remove, starting with the first element that comes after the element(s) that
////?    you're splicing in.
var pets = ["lion", "elephant", "deer", "goat", "cow", "cat", "dog"]
alert(pets[5])
var morePets = pets.slice(2, 5)
alert(morePets[2]);  //// * it must be cow 
*/

//////////////////////////// ! remeber this //////////////////////////
////?       The first digit inside the parentheses is the index of the first element to be copied. The
////?       second digit is the index of the element after the last element to be copied
 ////// ! =>========================== demo of arrays =================================
 var halalMeat = ["cow", "sheep", "tiger", "goat", "pig", "camel", "zebra"];
 ////////* this list has some problems //////////
 halalMeat.pop();
 //alert(halalMeat[6]); ////* ===>undefined
 halalMeat.push("fish","goat");
 //alert(halalMeat[6]); //// * ====> fish
 halalMeat.unshift("elephant");
 //alert(halalMeat[0]);//// * ====> elephant
 halalMeat.shift();
 //alert(halalMeat[0]); //////* =====> cow
 halalMeat.splice(2, 1, "chicken");
 //alert(halalMeat[2]); ////* ==> chicken
 halalMeat.splice(4 ,1);
 //alert(halalMeat[4]);////* ===>camel 
 var halalAnimals = halalMeat;
 alert(halalAnimals[6]);
   
// * .pop=>(last remove), .push=>(adds to end of array)

// * .shift=>(removes the first element) , .unshift=>(adds to the start of array)

// * .splice=>(adds inserts and delete anywhere from array)

// * .slice=>(copies from anywhere of array)
//
//
//////////////   !                  ARRAY FINSHES             ///////////////////////////////
var subhan = ["subhan is going to " , "haseeb is going to ", "muneeb is going to "];
   var places = ["washroom", "club", "work", "shopping", "walking"];
   var all = [];
   for (i = 0 ; i < subhan.length ; i++){
       for (j = 0 ; j < places.length ; j++){
           all.push(subhan[i] + places[j]);
           console.log(all);
           console.log("main loop completed");

           document.write(all + "</br>");
       }
    }
    
