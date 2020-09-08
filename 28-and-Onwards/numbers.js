////// ! LETS DO SOME REVISION
/*
var random =
  "my name is subhan.You can spell my name subhan as it is .subhan means ==> good boy";
console.log(random);
var index = random.charAt(random.length - 1);
console.log("the last character index number is :" + index);
random = random.replace("subhan", "Subhan");
console.log(random); //// ! this does not change subhan globallyy
var random =
  "my name is subhan.You can spell my name subhan as it is .subhan means ==> good boy ";
console.log("again its back to normal : " + random);
random = random.replace(/subhan/g, "Subhan");
console.log("updated : " + random);

//// * lets roll some dice

var adding = (21 * 3) + (21.34 + 4);
console.log(adding);
console.log(Math.round(adding));
// adding = Math.ceil(adding);
 console.log(Math.ceil(adding));
adding = Math.floor(adding);
console.log(adding);
var randomDice = Math.random();
console.log(randomDice);
randomDice = randomDice * 6; 
console.log(randomDice); //// * here is problem .LETS SOLVE THIS 
randomDice = Math.floor(randomDice) + 1;
console.log(randomDice);
var randomly = Math.random() + 1;
console.log(randomly); 
*/


//
//
//////////////// ! chapter 28 starts //////////

//// * If you want to do addition, you must convert any strings to numbers.
// var askAge = prompt("what is your age");
// var modifiedAge = askAge + 1;
////// * it rathers concatenates than adding
// console.log(askAge);
// console.log(modifiedAge);
////// * this issue is solved by .parsinteger
// modifiedAge = parseInt(askAge) + 1.6;
// modifiedAge = Math.round(modifiedAge); //// * revision
// console.log(modifiedAge);
// var myInteger = parseInt("1.9999"); //// * parseinteger also applies floor operation to the value//
// console.log(myInteger);
//// ?   To preserve any decimal values, use parseFloat . In the following statement
//// ?   myFractional is assigned 1
// var myIntegerWDecimal = "1.339856658";
// myIntegerWDecimal = parseFloat(myIntegerWDecimal); //// * it will keep the decimal values
// console.log(myIntegerWDecimal);
// var sum = prompt("what is your age");
// console.log(sum)
// var sumOFAge = sum + 2;
// console.log(sumOFAge); //// * IT CONCATENATES . LETS SOLVE THIS
// sumOFAge = parseInt(sum) + 2;  //// ! using parse integer() can solve this 
// console.log(sumOFAge);
// console.log(sum + 2); //// * it will concatenate becaudse we have not saved
// sum = parseInt(sum)
// console.log(sum)
// console.log(sum + 2);   ////// ! FOR SERVING VALUE AS IT IS WITH DECIMAL WE WILL USE (PARSE FLOAT)
//  var ageWDecimal = prompt("enter a decimal value of your age");
//  console.log(ageWDecimal);
//  ageWDecimal = parseFloat(ageWDecimal);
//  console.log(ageWDecimal + 2);

///
///
////////// ! chapter 28 finshes   ////////////////
//
//
//
////////////////////////////// ! CHAPTER 29 STARTS ////////
////// * other than using parses(int/float) , we can use number . which is neutral 
var question = prompt("what is 2 into 3");
console.log(question);
var calcu = Number(question) + 2;
console.log(calcu);
console.log(Number(question) + 3); ////// * bcuz it's not saved
question = Number(question) + 3; //// ? same 
console.log(question + 2); // * 11
// console.log("the answer in 11");
//*  Suppose your code has done an arithmetic calculation that yielded a big number. Now you
// * want to present the result of the calculation to your user. But before you display the number,
//*  you want to format it with commas so it's readable. In order to do that, you'll have to convert
//*  the number to a string. This is how you do it.  
console.log("your answer is :" + (question + 2).toString());

//////////// ! //////////////////////////////////////////////////////////////////////
////// * things learned ==>  < number("which number") > ,,, < .toString(); >
//////////// ! //////////////////////////////////////////////////////////////////////

///
///
///
////////////////////////! chpater 29 ends /////////////////////////

///
///
///
////////////////// ! CHPATER 30 BEGINS: CONTROLLING THE LENGTH OF DECIMALS  ////////////
// var priceOfProduct = 25
// var tax =  priceOfProduct / (6.5 * 100) ;
// console.log(priceOfProduct);
// console.log(tax);
var priceOfProduct = 25.599999999 ;
var modifiedTotal = priceOfProduct.toFixed(2);
console.log(priceOfProduct);
console.log(modifiedTotal);
modifiedTotal = priceOfProduct.toFixed();
console.log(modifiedTotal); //// * it rounds as well 
var productPrice = prompt("write price");
console.log(productPrice);
// productPrice = Number(productPrice);
if (productPrice.charAt(productPrice.length -1 === "5")){
  productPrice = productPrice.slice(0 , productPrice.length - 1) + 6;
  console.log(productPrice);
}
productPrice = Number(productPrice);

var pretty = productPrice.toFixed(2);
console.log(pretty);



