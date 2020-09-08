// alert("hello world ; the functions start");
//
///
//////////// ! DOCUMENTATION;
                                                      ////// ! the main purposes of functions: to avoid code duplication.   
//////* Function Declaration

function greet(){
    console.log("hello we are learning functions");
}
////? we have declared it and now we will call it 
greet();
greet();    ////// * this calls the code inside the function.
                                                                                                   // var rounding = Math.round(1.55);
                                                                                                   //     console.log(rounding);
function telling(){
    var hello = "hello " + prompt("what is your name");
    console.log(hello);
}                                                   
telling(); ////  ! we can call by function name because it global 

//console.log(hello); ////// * it will not return anything .
// !REASON: Because hello variable is local to function telling and can't be called out ....//

var user = "subhan";
var confirming = false
function initialize(){
    var asking = prompt("is your name subhan" , true);
    if (asking === "true"){
        console.log("hello " +  user);    ////// ! we were able to call a variable in our funtion ...
         confirming = true;
         console.log(confirming)
    }                                   //// *The function has full access to the outer variable. It can modify it as well.

    else{                                     
        console.log("sorry u didn't match the criteria");
        console.log(confirming); 
    }
}
initialize();
// console.log(confirming);
// * lets' modify the outer variable in our function.
function modify(){
    var asking = prompt("what is your name");
    user = asking;
    console.log("hello " + user);
}

console.log(user);  ////// * if we don't call the function the variable will not be modified 
                                        ////// * sequence matter  
modify();
console.log(user);      ////// * now it will be modified



////// ! mosh video pratices
console.log('mosh started');
function hello(name , lastname){  ////// * these are parameters
    console.log("hello " +"this is first : " + name +". " + "This is last : "+ lastname + ".")
}
// hello("subhan" , "rehman"); //////// * these are value for the parameters
// 
console.log("mosh ended");
//
//
//////// ! PARAMETERS
var recive = "Sara";
var reciveWhat = "are u free ?";
function message(from , text){
    from = '"' + from + '"';   //*  from = '*' + from + '*'; // make "from" look nicer
    console.log(from + ":" + text); 


}
message(recive , reciveWhat);
    //// ! manipulation...
message("subhan" , "sorry");
message("muneeb"); //// * it will be undefined because the value is not specified.

// * If we want to use a “default” text in this case,
//*  then we can specify it after =:
//// ! lets' create a function with a default value
function defaulted(defaultText){
       console.log(defaultText);
}
///
function chat(from , text = "no message wrote"){
    from = '"' + from + '"';
    text = "| " + text + ". |";         ////* come back to this
    console.log(from + " is saying : " + text);

}
chat("subhan"); //// ! it will show default value
chat("subhan" , "i am busy");
chat("sarah" , "i am going abroad");
// chat( defaulted("unknown") , "i am going");

//* Alternative default parameters

function FromAndText(from , text){
    if (text === undefined || text === ""){
        text = "wrote nothing";
    }
    if (from === undefined || from === ""){
        from = "unknown";
    }                          ////// ! FIRST METHOD

    ////// ! OR


    // text = text || "empty";
    // from = from || "unknown" ////// ! SECOND METHOD




    console.log('"' + from + '"' + " says : " + '| ' + text + ' .|');
}
FromAndText(); //output //* "unknown" says : | wrote nothing .|
FromAndText( "" ,"you are dead");
FromAndText("subhan" , "are u okay?");
//
//!   Modern JavaScript engines support the nullish coalescing 
//!   operator ??, it’s better when falsy values, such as 0, 
//!   are considered regular:

//
////////// ! Returning a value
function simple(a,b){
    return + a + b;
}
var sum = simple(1,2); //3
console.log(sum)
// var summ = 1 + 2;      //* .toString does not work on above sum
// console.log(summ.toString());
//// * age checking function.
function ageChecking(age){
    if (age >= 18 ){
        console.log("access granted");
        return true;
        
    }
    else {
        console.log("acces denied!") //// * return should be end
        // confirm('do u have permission from parents?');
        return false;


    }
}
var ask = +prompt("what is your age ?");
var confirm = ageChecking(ask);
//
//////////////!  If we want the returned expression to 
//////////////!  wrap across multiple lines, we should 
//////////////!  start it at the same line as return. 
//////////////!  Or at least put the opening parentheses() 


////* One function – one action --------------------

//  for (var i = 1 ; i <= 10 ; i++){
    //  console.log(5 + " x "  + i + "  " + (5 * i))
//  }
var allNUM = [10 , 4 , 9 , 30 , 50 , 67 , 45 , 87 , 43,  93 , 1];
console.log(allNUM);

var ln = allNUM.length;
console.log(ln);
 
var first = allNUM[0]; 
console.log(first);
 
for (var i = 0 ; i < ln ; i++){
    if (first >= allNUM[i]){
        first = allNUM[i];
        
         console.log(first);
         console.log(i);
    }
}
console.log("the smallest number is :" + first)




