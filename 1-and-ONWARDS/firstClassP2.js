////////////////// start of chapter 5 🙌  ///////////////////////////////////////////////////////////
/*var add = 2 + 2;
add = add + 2;
alert(add);
var subtract = 3 - 2;
subtract = subtract + 3;
alert(subtract);
alert(add - subtract);
/////////////// we  can use variables instead of their values 😉 ///////
var sum = add - subtract + 10;
alert(sum);
alert(sum / 4);
alert("Do you want to know what 12 into 10 is..? don't worry i'll tell you 😌");
alert(sum * 10);
/////// The arithmetic operators I've been using, +, -, *, and /, are undoubtedly familiar to you. This one may not be 🤨:////
var whatsleft = sum % 10;
alert(whatsleft);
alert(sum / 10);
alert(whatsleft * 10);

//// it same as the devision it just brings the remainder instead of the answer 😉 ////////// 
//
//
////////////////////////////////// chapter 5 ends 🙌 ////////////////////////////////// */

//
//
var whatsleft = sum % 10;
alert(whatsleft);
alert(sum / 10);
alert(whatsleft * 10);
//////////////////////////// chapter 6 begins 👻 ////////////////////////////////////////////////////
//alert(20 % 16);
/*var num = 1 + 2;
var newnum = ++num; /// it is not incrementing the valaue one by adding [++] after the value but it is doing it when we put it
//before the value 😪 🙁///
alert(newnum);
var newNumber = ++num; //// the [++] sign is not working with number but they are working with variables that have
//numbers assigned to them 🙄 🤨///////////
alert(newNumber);
alert(num); //// the numeric value of num [variable]  keeps get added on when we use it with [++] sign even when with other
////  variables values. It automatically increments to the actual value of num [variable]  🤭 🤣 /////////
alert(--num);
var no3 = num--;
alert(no3);
alert(num);
///// experiment 🤯 ////
var subhanWeight = 80;
var haseebWeight = subhanWeight++; /// addding plus after variable subhanWeight will only add to the actual value of subhanWeight
//// and haseebWeight will get the non-incremented value of subhanWeight which is just 80  🤯
// !🧠 alert subhanWeight now and you will get 81 and haseebWeight will that of subhanWeight without the incremented value 🤯////
alert(haseebWeight); //will be 80 😛//
alert(subhanWeight); /// will be 81 ///
*/
/*alert(
  "Do u know how many demonters can ron, harry and hermoine can deal with at once ? 😛"
);
var harry = 40;
var ron = harry - 20;
var hermoine = harry + 20;
harry = ++harry; // i hope it get 41 // when we put after it isn't incrementing but before it is doing //
alert("harry can deal with: " + harry);
ron = --harry - 20;
//alert(harry);  {
//alert(ron);         just a little experiment  😛   }
alert("Ron can deal with: " + ron);
alert("hermoine can deal with: " + hermoine);
alert("wait ! do you want to know about dumbledore 😛 ?");
harry = ++harry;
// adding into harry value beacuse i decremented it when i used it with ron abilities ///
var dumbledore = harry + ron + ++hermoine;
alert("dumbledore can deal with: " + dumbledore);
alert(hermoine);     === */

//
/////////////////////////////////////////////////////// end of chapter 6 🤩 ////////////////////////////

//
//
//////////////////////////////////////      chapter 7 started 🤩     /////////////////////////////////////////////
//
/// 📝 Note: In JavaScript as in algebra, the ambiguity is cleared up by precedence rules...  /////
//  📝 Note: parenthesis override the js precedence rules /////
var ironMan = (2 * 4) * 2 + 4;
//alert(ironMan); // getting 20
var captainAmerica = (ironMan * 4) + (++ironMan * 2);
//alert(captainAmerica); /// getting 122 ... 😛 /

ironMan = --ironMan; // giving ironMan variable its actual value 😛 /// 
//alert(ironMan); /// getting 20 😛

var thor = (ironMan / 4) * (--captainAmerica + 1 );
// alert(thor);/// getting 610 😛 ... //
captainAmerica = ++captainAmerica;
//alert(captainAmerica);/// getting captainAmerica variable it's actual value 😛//
alert("Do you want to know the strength 💪 of the three main avengers 😉? (aka tony,steve rogers and thor)" );

alert("the strengh of Tony Stark is: " + (ironMan * 5 ) + ("HP") );
alert("the strengh of Steve Rogers is: " + (captainAmerica) + ("HP"));
alert("the strengh of Thor is: " + (thor) + ("HP"));
 
var allEnergy = thor + captainAmerica + (ironMan * 5);
alert("energy in total: " + (allEnergy) + ("HP"));
alert("we will be back with more comparisions  😉!");
alert("2 plus 2 equals " + (2 + 2)); // try without (parenthesis) and u will get 22/// 
/// as we said earlier parenthesis over ride the js rules for precedence  😛///
alert("Ready for more comparisions 😋 ..?");
alert("Now we will compare the strength 💪 of three female avenger 😉!")
var blackWidow = (2 * 4) + (6 * 10);
var captainMarvel = thor * 2;
var scarletWitch = (61 * 10) - (3 * 2 * 2);
alert("the strengh of Black Widow is: " + (blackWidow) + ("HP"));
alert("the strengh Captain Marvel is: " + (captainMarvel) + ("HP"));
alert("the strengh of Scarlett Witch is: " + (scarletWitch) + ("HP"));
alert("the total strength of female avengers is " + (scarletWitch + captainMarvel + blackWidow))
var thanks = "thanks for visiting us please come back again  😋";
var still = "you still here go don't waste your time 😛"
alert(thanks);
alert(still);
var iab = "i am back with more comparision. Because i love u " + (1500 + 1500);
alert(iab); 




