////// ! 9 chapter starts ////////////////////////////////////
//// *revision code ///
/* *prompt("what is your name?");
var subhan = 22 + 22 ;
alert(subhan);
var haseeb = ++subhan;  
alert(haseeb);
alert(subhan);
subhan = subhan;
alert(subhan);
*/
// !emojis 🙃 😜 💪 📝 🤩 😊 😛 🧠 🤯 🤣 🤭 🙄 🙁 🤨 😪 ✊ /////////////
 
//var race = prompt("what is your species?", (40 + 40 + "human"));
// ! we can add to pre-defined value as well
/*alert(race);  
var question = "Are u polite or angry?"
var defaultAnswer = "polite" /// *📝 we can use variables intead of strings as well
var answer = prompt(question, defaultAnswer);
alert("response sumbitted , you are " + answer);
var no_of_siblings = prompt("how many sibling do u have?", "don't count yourself");
alert("you have " + (no_of_siblings - 2 )); */
// ! 🧠 when i use (+)sign with pre-increment and put a value to add into it it works ..
/// ! but when i use it without the pre-increment it does not work 🧠/////////
// revision //

// *var kind =+prompt("Add a number and i will tell u whether it's odd or even","2");
// *kind = kind % 2;
//alert(kind);
//*if (kind === 0){
//*    alert("even");
//* }
// *else{
//*    alert("odd");
//* }

/// * 9 chapter fininshes 🤩 /////////////////////////////////
   
//
//
// ////////! 10 chapter starts ✊:(if statements) //////////////////////////////
/*
var sort = prompt("What are the qualties u perfer;intelligence or loyalty?");
var house1 = "Grfffindooooooooooooooor 🤩";
var house2 = "Raveeeeeeeeeeeenclaw 🤩";
var house3 = "Slytherin 🙄"
 
if (sort === ""){
    alert("Please enter a quality to continue");
    sort = prompt("What are the qualties u perfer;intelligence or loyalty?", "enter one to continue");
    
}
if (sort === "loyalty"){
    alert(house1);
}
if (sort === "intelligence"){
    alert(house2);
}
sort = prompt("what are the qualities u prefer;arrogant or wise ");
if (sort === ""){
    alert("Please enter a quality");
    sort = prompt("what are the qualities u prefer;arrogant or wise ");
}
if (sort === "arrogant") {
    alert(house3);
} 
*/
/// ! Do with a broad understanding  ===📝 ==== 📝//////////////////////////////

//
///! chapter 11 starts 💪:(comparision operators) ////////////////////////////////////
// *if (fullName === "Mark" + " " + "Myers") 
// *if (fullName === firstName + " " + "Myers") 
// *if (fullName === firstName + " " + "Myers")  ////
// *if (fullName === "firstName + " " + lastName)   ///
// *if (totalCost === 81.50 + 135)                   ////////   conditions
// *if (totalCost === materialsCost + 135)               //
// *if (totalCost === materialsCost + laborCost)           /// 
// *if (x + y === a - b)
//////////////////////////////////!       "> is greater than"                    /////////////
////////////////////////////////////!     "< is less than"                       ////////
//////////////////////////////////////!   ">= is greater than or equal to"            //////
//////////////////////////////////////!    "<= is less than or equal to"            ///////////


/// * chapter 11 finishes  🤯///////////////////////////////////////////////////////////////
/*
var find =+prompt("write a number the program will tell u whether its a odd or even");
if (find % 2 === 0){
    alert("even");
}
if (find % 2 !== 0){
    alert("odd");
}
var materialCost = +100;
var labourCost = +50;
var profit = +100
var chair = materialCost + labourCost + profit;
alert("the price for chair is " + chair);
var ship =prompt("Do u want to ship the chair as well", "Yes,No");
if (ship === "Yes"){
    alert(chair + 50);
}
*/

//
//
//////////// !                  chapter 12 starts             ////////////////////////////////////

// ? lets build a quiz game ///
/*
alert ("wELCOME TO THE QUIZ OF HTML AND CSS")
var score = 0;
var userIQ
var correct = "CORRECT" 
var incorrect = "INCORRECT"
var question1 = prompt("div is a block element or inline", "block,inline");
if (question1 === "block"){
    alert(correct);
    score++;
}
else {
    alert(incorrect);
}
var question2 = prompt("ul element create a ___ list", "type your answer here");
if (question2 === "unordered"){
    alert(correct);
    score++;
}
else {
    alert(incorrect);

}
var question3 = prompt("HTML 5 version is declared by ____ element", "write your answer here" )
if (question3 === "<!Doctype html>"){
    alert(correct);
    score++;
}
else{
    alert(incorrect);
}
var question4 = prompt("write a propert which changes the font size")
if (question4 === "font-size"){
    alert (correct);
    score++;
}
else{
    alert(incorrect);
}
var question5 = prompt("background-color property allows to change the background color of a container", "yes or no")
if (question5 === "yes"){
    alert(correct);
    score++;
}
else{
    alert(incorrect);

}
alert("your total score is " + score);
if (score <= 3){
    userIQ = "problematic";
    alert("your iq about html and css is " + userIQ);
}
else if (score === 4){
    userIQ = "good but can do better";
    alert("your iq about html and css is " + userIQ);
}
else if (score === 5){
    userIQ = "excellent"
    alert("your iq about html and css is " + userIQ);
}
*/

 // ! 12 chapter finishes ////////////////////////////////
 
//
//
//
//
////////////////////////// * chapter 13 starts //////////////////////

/// ! /////////            Testing sets of conditions    ///////////////////

// For example, if a guy weighs more than 300 pounds, he's just a great big guy. But if he
//weighs more than 300 pounds and runs 40 yards in under 6 seconds? You're going to invite
//him to try out for the NLF as a lineman. You can test for a combination of conditions in
//JavaScript by using...
//?                       &&

/// demo book

/* 
var city = prompt("where do you live ?", "karachi and hyderabad applicants are allowed !")
var age =+prompt("what is your age?");
var fscResult =+prompt("write your percentage in fsc")
if ((city === "karachi" || city === "hyderabad") && age < 30 && fscResult > 65 ){
    alert("thanks we recieved your application");
}
else{
    alert("Sorry u didn't match the criteria!")
}

*/
      //////// !     It's the same problem you face when you combine mathematical expressions. And you
      //////// !     solve it the same way: with parentheses.

//// ?   demo ////////
/*
var pakistani = prompt("are u from pakistan", "yes or no");
if (pakistani === "no"){
    alert("PLEASE CONTACT SOMEONE IN YOUR COUNTRY . THIS IS RESERVED FOR PAKISTANIS");
}
var signs = prompt("coughhing , iching , short of breath , fever: DO u feel any of these symtoms","yes or no");
var timePeriod =+prompt("How long u have been experiences these", "enter days");
 

 if (pakistani === "yes" && signs === "yes" && timePeriod <= 6){
    alert("YOU SHOULD SEEK MEDICAL ATTENTION INSTANTY");
    alert ("Your chances of having virus is 60%");
}
else if (pakistani === "yes" && signs === "yes" && timePeriod >= 7){
    alert("YOU SHOULD SEEK MEDICAL ATTENTION INSTANTY");
    alert ("Your chances of having virus is more than 60%");
}

else{
    alert("you dont have virus . BUT STAY HOME IF LIKE TO KEEP IT THAT WAY");
}
    */
///
//  ?                         13 chapter finishes ///////////
// 

///
///
///
////////////////////// ? 14 chapter starts /////////
//////////////////////!  if statements nested //////////////// 

// * var city = prompt("where do you live ?", "karachi and hyderabad applicants are allowed !")
// *var age =+prompt("what is your age?");
// *var fscResult =+prompt("write your percentage in fsc")
// *         if ((city === "karachi" || city === "hyderabad") && age < 30 && fscResult > 65 ){
 // *                alert("thanks we recieved your application");
// *        }
// *  else{
// *        alert("Sorry u didn't match the criteria!")
// * }
 
//////      ? lets solve this with nesting ///////////////
/*
var age =+prompt("what is your age?");
var fscResult = +prompt("what was your percentage in fsc");
var city = prompt("which city do u live in", "karachi or hyederabad" );

if (age < 30){
    if (fscResult > 65){
        
        if (city === "karachi"){

            alert("thank u for smbitting the application u are eligible");
                   }
                   else if (city === "hyderabad"){
                    alert("thank u for smbitting the application u are eligible");

                   }
        }
}
else {
    alert("Sorry u didn't match the criteria!");
    
}
*/
// * ============================solved the aassignment====================== 
//var ask = +prompt("what was your pecentage ?");
//if (ask > 89){
  
  //      if (ask < 94){
    //        alert("YOU GOT A+");
      //  }
    //    else if (ask > 94 ) {
      //      alert("u have won 5000 cash price and your result is A+")

        //}
    //}
    //else {
      //  alert("Fail");
    // }
    /*
   ! var age = +prompt("what is your age", "15");
   ! if( age < 18 )
    {
      document.write("<b> You are Minor. </b>"); 
      document.write("<br\> Not Eligible to Work " ); 
    }
   !  else {
   !     if (age >= 18 && age < 60){
            document.write("<b> You are Eligible to Work. </b>");
            document.write("<br\> <b> Please fill in your details and apply </b>" ); 
        }
        
      !  else {
            document.write("<b> You are too old to work as per the Government rules </b>");
            document.write("<br\> Please Collect your pension!" );  
        }
    
    }
    */
// ? ======================= solved with nesting =====================================
 /*   var age = +prompt("please enter your age to work and get a the job", "15");
    if (age >= 18){
        if (age > 60 ){
            document.write("<b> You are too old to work as per the Government rules </b>");
            document.write("<br\> Please Collect your pension!" );
        }
        else if (age >= 18 && age < 60){
            document.write("<b> You are Eligible to Work. </b>");
            document.write("<br\> <b> Please fill in your details and apply </b>") ; 
        }
    }
    else {
        document.write("<b> You are Minor. </b>"); 
      document.write("<br\> Not Eligible to Work ");

    }
    */

    

//// ! chapter 14 completed//////////////============




