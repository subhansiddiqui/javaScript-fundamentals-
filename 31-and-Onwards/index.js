console.log("here starts the  33 and 34 chapter");
//
//
////////// ! chapter 33 starts=====> "Specifying a date and time" /////////////////////
var currentDate = new Date();
     console.log(currentDate);                        
var myDeadline = new Date("August 14 , 2020 ");            
     console.log(myDeadline);                                   //////// ! THIS IS HOW YOU CREATE A DEADLINE
                                                                                        //////////////!
var msOfCurrent = currentDate.getTime();
     console.log(msOfCurrent);
var msOfDeadline = myDeadline.getTime();
     console.log(msOfDeadline);

var subtracting = msOfDeadline - msOfCurrent    //// * knowing the difference
      console.log(subtracting);

var daysRemain = subtracting / (1000 * 60 * 60 * 24);   ////// * finding out days in giving miliseconds
     console.log("the days remaining are: " + Math.floor(daysRemain));               

var hourRemain = subtracting / 3600000;             ////// * finding out hours in giving mili seconds
    console.log("the hour remaining are: " + Math.floor(hourRemain));
    console.log("the seconds in hours :" + Math.floor(hourRemain) * 3600);
    console.log("the minute in hours " + Math.floor(hourRemain) * 60);

var secondsRemain = subtracting / 1000;      //////// * finding out seconds in giving miliseconds 
   console.log(secondsRemain)
    console.log("the seconds remaining are: " + Math.floor(secondsRemain));

var minutesRemaining = subtracting / 60000;            ////////////* FINDING OUT MINUTES IN GIVING MILISECONDS.
     console.log("the minutes remaining are: " + Math.floor(minutesRemaining)); 
//
//
//
//////////////////////////// !  chapter 33 ends 

//////// ? more pratices should be done below /////////
//////// * FORMAT OF SPECIFYING  =====>  | var d = new Date("July 21, 1983 13:25:00") |
//
//
//////////! chapter 34 begins ========>   "Changing elements of a date and time"
var dateModification  = new Date();
     console.log(dateModification);

// var yearChange = new Date("2021");
//        console.log(yearChange);
dateModification.setHours(16);   //// ! it works just like slice and splice meaning we can save it without putting "="
      console.log(dateModification);
    // dateModification =  dateModification.getTime();
    // console.log(dateModification);
 dateModification.setMilliseconds(400);
     console.log(dateModification);
     console.log(dateModification.getMilliseconds()); //// * miliseconds didn't appear
 dateModification.setMonth(10);
     console.log(dateModification);
 dateModification.setSeconds(30);
     console.log(dateModification);
 dateModification.setMinutes(39);
     console.log(dateModification);

    ////// *  .set(which thing u ant to change) (to what u want to change);

    //
    //
    ////////////! chapter 34 finishes ///////////