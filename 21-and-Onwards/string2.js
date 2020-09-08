alert("hello world");
//// !  ===================== repeat the thing in previous chapter with the chapter you are learning  ================

//////// ! chapter 24 starts //////
// var  sumofAll = (1 * 2) + (2 % 143) + (12 + 21)
// console.log(sumofAll);
// var sum = sumofAll++;
// console.log(sum);
// console.log(sumofAll++);
// console.log(sumofAll);

// var firstName = prompt("write your first name");
// for (var i = 0 ; i < firstName.length ; i++){
//     if (firstName.charAt(i) === "!"){
//         alert("no special characters allowed");
//         console.log(i);     ////// ! this program finds and replaces and "!" mark
//         console.log(firstName);
//         var firstName = firstName.slice(0 , i) + firstName.slice(i + 1);
//         console.log(firstName);
//         break;
//     }
// }

// console.log(firstName);
// var index = firstName.charAt(0);
////// * character at copies the character at a certain location u give
// console.log(index);
// index = index.toUpperCase();
// console.log(index);

// var index2 = firstName.charAt(firstName.length - 1);
// console.log(index2);          ////// * we can find our last character by subtracting -1 with .length
// index2 = index2.toUpperCase();
// console.log(index2);
////// ?  things learned ;;===>      charAt()      ===================;;;;;;;

//
//
////////// * chapter 24 ends ///////////////////

//
//
////////////// ! chapter 25 starts => replacing strings   //////////////

//// * there is more straightforward way to replace the a particular string   ///

// var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand.World War II the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. World War II"
// console.log(text);
// var modifiedText = text.replace("World War II", "The Second World War");
// console.log(modifiedText);
// modifiedText = text.replace(/World War II/g , "The Second World War");
// console.log(modifiedText);

////// ! this again has a problem bcuz it doesn't change it globally
////// ? problem solved
//// * In a global replace, you enclose the segment to be replaced by slashes instead of
////* quotation marks, and follow the closing slash with "g" for "global." The segment to be inserted
////* is enclosed by quotation marks, as in a one-time replace.

//////// ?   things learned .replace()
//
//////////////// ! chapter 25 finishes  /////////////////////
//// * assignment
// var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand.World War II the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his. World War II"
// var modifiedText;
// var index = text.indexOf("World War II");
// console.log(text)
// console.log(index);
// for (var i = 0 ; i < text.length ; i++){
//     if ( text.slice(i, i + 12) === "World War II" ){
//         modifiedText = text.slice(0 , i) + ("The Second World War") + text.slice(i + 12);
//         console.log(modifiedText);
//     }
// }

//////// * assignment done

//
//
////////////////// ! chapter 26 starts => ROUNDING NUMBERS /////////

// var  sum = (2 % 323) + 1.3 + (20.4 + 40.4);
// console.log(sum);
// sum = sum + 2.45;
// console.log(sum);   ////// * we can round the number logically with
// var modified = Math.round(sum)
// console.log(modified);

//////// ? ====> Instead of a variable, you can enclose a literal number in the parentheses.

//// *   To force JavaScript to round up to the nearest integer, no matter how small the fraction,
//// *  use .ceil instead of .round

// var modified2 = Math.ceil(sum - 4.4);
// console.log(modified2);

//// * To force JavaScript to round down to the nearest integer, no matter how large the
//// * fraction, use .floor instead of .round .
// console.log(sum - 4);

// var modified3 = Math.floor(sum - 4 );
// console.log(modified3);
///
//////////// ! chapter 26 ends
///
//
//
////////////////////////////////// ! chapter 27 starts ==> generating random numbers
var dice = Math.random();
// console.log(dice * 100000000000000000);
console.log(dice);
////// ! suppose we want to generate random number between 1 to 6
dice = Math.random() * 6;
console.log(dice);
////// * at this point round will not work as sometime it can generate 0
////// * we can solve this by adding 1 but still it wont work becuze sometimes it can generate 7
////// ? we can use .floor for this
dice = Math.floor(dice + 1);
console.log(dice);

//////// ! chapter 27 finishes  ////////////////
