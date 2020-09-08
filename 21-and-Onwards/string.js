////////! revision

/*
 let  arr = ['john',"herry"];
console.log(arr.length)
var place = ["is going to club", "is going to party", "is going to work", "is going to die"];
var all = [];
for (var i = 0 ; i < arr.length; i++ ){
  

    for (var j = 0 ; j < place.length ; j++){

    all.push(arr[i] + place[j]);
    // console.log(i);
    // console.log(j);
    // console.log("main loop completed")
    // document.write(all + "<br>")

} }

console.log(all);

var sub = ""
console.log(name)
// console.log(i);


var names = [

         "hello",
         "bye",
         "hi"
     
             ];

             alert(names[0])

var places = [
             "is going to office.",
             "is going to club.",
             "is going to party.",
             "is going to play."
              ];
var all = [];
// var nameLength = names.length;
// var placesLength = places.length;
// console.log(nameLength);
// console.log(placesLength);

for (var i = 0 ; i < names.length ; i++){
    for (var j = 0 ; j < places.length ; j++){
        all.push(names[i] + places[j]);
        console.log(all);
        console.log(i);
        console.log(j);
        document.write(all + "</br>");
    }
}

*/

//////////// *           chapter 21 begins          ///////////////////////////
// var cities = ["karachi", "islamabad", "pindi", "lahore", "hyderabad"];
// console.log(cities);
// var ask = prompt("in which city do u live in in");
// console.log(ask);
// ask = ask.toLowerCase(); //// ! we can do .uppercase() as well
// console.log(ask);

// for (var i = 0 ; i < cities.length ; i++){
//         if (ask === cities[i]){
//             alert("pass");
//             console.log(true);
//             console.log(i);
//             break;
//          }
// }
// if (ask !== cities[i]){
//     alert("not pass");
//     console.log(false);
// }
////////// !   chapter 21 ends ////////////////

//////// !   chapter 22 begins //////////

//// * now we want to normalize the output of user to captilize
//
// var cities = ["Karachi", "Islamabad", "Pindi", "Lahore", "Hyderabad"];
// console.log(cities);
// var ask = prompt("in which city do u live in in");
// console.log(ask);
// ask = ask.toLowerCase(); //// ! we can do .uppercase() as well
// console.log(ask);
//
// var firstCharacter = ask.slice(0, 1);
// firstCharacter = firstCharacter.toUpperCase();           //// * we captilize the first word
// console.log(firstCharacter);
//
// var remaining = ask.slice(1);
// remaining = remaining.toLowerCase();       ////// * we lowercase the remaing character
// console.log(remaining)
// ! remember
// ?      If you omit the second number inside the parentheses, JavaScript includes all the
// ?      characters to the end of the string.
//
// ask = firstCharacter + remaining;
// console.log(ask);
//
// for (var i = 0 ; i < cities.length ; i++){
// if (ask === cities[i]){
// alert("pass");
// console.log(true);
// console.log(i);
// break;
//  }
// }
//
// if (ask !== cities[i]){
// alert("not pass");
// console.log(false);
// }
////// * now suppose u want to slice the first three characters
// var month = prompt("which month you were born in");
// var abbr;
// console.log(month);
//
// if (month.length > 3){
// abbr = month.slice(0 , 3);
// console.log(abbr);
// }
//// ! this program check double spacers
//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {

// if (str.slice(i, i + 2) === " ") {

// alert("No double spaces!");

// break;
// }
// }
////// ! assignment //////////////////
// var table = +prompt("write the number of tables u want")
// for (var i = 1 ; i <= table ; i++){
//     for (var t = 1 ; t <= 10 ; t++){
//       console.log((i + "  x  " + t + "  =  " ) + (i * t))

//     }
// }

////////// ! chpater 23 begins    ////////////////
var text =
  "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. World War II";
console.log(text);

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    break;
  }
}
console.log(text);
//// ! But JavaScript has a more efficient way to accomplish this, using the indexOf method.
//// * If the segment exists, the method finds the index of the first character of the segment and
//// * assigns it to the variable firstChar . If the segment doesn't exist, the method assigns -1 to the
//// * variable, so you know it's not there.
//// ? this is a example of indexof();
// var indexofBan = text.indexOf("World War II");
// var newText;
// console.log(indexofBan);
// if (indexofBan !== -1){
//      newText = text.slice(0 , indexofBan) + "the Second World War";
// }
// console.log(newText);
////  * solved with less coding
var text =
  "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. World War II";
console.log(text); //// * text value updated
var indexofban = text.indexOf("World War II");
console.log(indexofban);
if (indexofban !== -1) {
  var newText;
  newText =
    text.slice(0, indexofban) +
    "the Second World War" +
    text.slice(indexofban + 12);
}
console.log(newText);
// var random = "my name is subhan i am 12 years old and 17 years old"
// var  find = random.lastIndexOf("years old");
// var find2 = random.indexOf("years old");
// console.log(random);     ////// ! we can use .lastIndexOF(); to find the last instance of it in our data//
// console.log(find);
// console.log(find2);
////// ! demo

// for (var i = 0 ; i < text.length ; i ++){
//     if (indexofban !== -1 ){
//         withoutBan = text.slice(0 , indexofban) + 'the Second World War' + text.slice(indexofban + 12);
//     }
//     console.log(withoutBan);

// }
var text =
  "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. World War II";
console.log(text);
////// ! there is a problem that in text var there is two times world war II
////// * lets solve this by looping
var indexofban = text.indexOf("World War II");
console.log(indexofban);
//  var withoutBan ;
//  for (var i = 0 ; i < text.length ; i++){
//      if (indexofban !== -1){
//// ! come back to solve this
//          console.log(text);
//          console.log(withoutBan);
//      }

//  }

// var animals = ["me", "you" , "nobody"];
// console.log(animals);
// animals.splice(0 , 1);
// console.log(animals);
// var myName = "subhan"
// console.log(myName);

// myName.splice(0, 2 , "bu");
// console.log(myName);           ////// ! splice method is used only for arrays

//////// ! chapter 23 ends
var ask = +prompt("write the number of tables u want");
for (var i = 1; i <= ask; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}
