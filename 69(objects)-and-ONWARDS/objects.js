console.log('we are learning objects');
var plan1 = {
    name      :  "basic"  ,
    price     :   3.99 ,
    space     :   100 ,
    transfer  :   1000 ,
    pages     :   10   ,
    discountMonths : [6,7,11],
    priceCalculator:  function(){
                           var priceOfPackage = this.price
                         var Currentdate = new Date();
                         var getmonth = Currentdate.getMonth();
                         for(var i = 0 ; i < this.discountMonths.length ; i++){
                             if (this.discountMonths[i] === getmonth){
                                  priceOfPackage *= .8
                                  break;
                             }
                             return priceOfPackage * 12;
                          }
    
                        }

};
// console.log(plan1.name + " plan is: $" + plan1.price );
// plan1.discountMonths = [6,7,11];
// console.log(plan1);
var plan2 = {
    name      :  "Professional"  ,
    price     :   5.99 ,
    space     :   500 ,
    transfer  :   5000 ,
    pages     :   50   ,
    discountMonths : [6,7,11],
    priceCalculator:  function(){
                           var priceOfPackage = this.price
                         var Currentdate = new Date();
                         var getmonth = Currentdate.getMonth();
                         for(var i = 0 ; i < this.discountMonths.length ; i++){
                             if (this.discountMonths[i] === getmonth){
                                  priceOfPackage *= .8
                                  break;
                             }
                             return priceOfPackage * 12;
                          }
    
                        }
};
var plan3 = {
    name      :  "Ultimate"  ,
    price     :   7.99 ,
    space     :   2000 ,
    transfer  :   20000 ,
    pages     :   500   ,
    discountMonths: [6,7,11],
    priceCalculator:  function(){
                           var priceOfPackage = this.price
                         var Currentdate = new Date();
                         var getmonth = Currentdate.getMonth();
                         for(var i = 0 ; i < this.discountMonths.length ; i++){
                             if (this.discountMonths[i] === getmonth){
                                  priceOfPackage *= .8
                                  break;
                             }
                             return priceOfPackage * 12;
                          }
    
                        }
};


var plan4 = {
    name      :  "Ultimate"  ,
    price     :   7.99 ,
    space     :   2000 ,
    transfer  :   20000 ,
    pages     :   500   ,
    discountMonths: [6,7,11],
    priceCalculator:  function(){
                           var priceOfPackage = this.price
                         var Currentdate = new Date();
                         var getmonth = Currentdate.getMonth();
                         for(var i = 0 ; i < this.discountMonths.length ; i++){
                             if (this.discountMonths[i] === getmonth){
                                  priceOfPackage *= .8
                                  break;
                             }
                             return priceOfPackage * 12;
                          }
    
                        }
};
console.log(plan1);
console.log(plan2)
console.log(plan3)
console.log(plan4)

plan4.name = "Not ultimate";
plan4.about = undefined;
plan4.price = 1.99;
delete plan4.discountMonths;
console.log("transfer" in plan4);

//* IMP
                    delete plan4.pages;
                    var checkPagesInPlan4 = "pages" in plan4;
                    if (checkPagesInPlan4 === true){
                        console.log("how is true ?");
                    }
                    console.log(checkPagesInPlan4); //* false
                    if("name" in plan4 === true){
                        console.log('name exists in plan4')
                        }
                        else{
                            console.log('name does not exist in plan4')
                        }

// //* lets apply discounts
//  function priceCalculator(){
//      var priceOfPackage = plan1.price
//      var Currentdate = new Date();
//      var getmonth = Currentdate.getMonth();
//      for(var i = 0 ; i < plan1.discountMonths.length ; i++){
//          if (plan1.discountMonths[i] === getmonth){
//               priceOfPackage *= .8
//               break;
//          }
//          return priceOfPackage * 12;
//      }
 //}
// var giveMePrice = priceCalculator();
// console.log('the price for first package is : ' + giveMePrice)
//*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*
////////////////////////////////                                                                 //////////////////////////////////////////////!
                                                      // * FACTORY  FUNCTIONS()


// function mobileDTeller(){
  // return {
    // model : "samsung",
    // price : 3000
  // }
// }
    // 
// var samsung = mobileDTeller();
// console.log(samsung);
// samsung.price = 40000;       // *  "An instance is also the physical manifestation of a class that occupies memory and has data members. 
                               //*   The difference between the two is that an object represents a set of instances while an 
                               //*   instance is a certain, specific representation."

//*parameters

function mobileDTeller(Model , Price , Ram , Rom , ScreenSize , NameOfCompany ){
  return {
    ModelOFPhone : Model,
    PriceOfPhone : Price,
    RamAvailable : Ram,
    RomAvailable : Rom,
    ScreenSizeINinches : ScreenSize,
    ComanyName : NameOfCompany
  }
}

var samsung = new mobileDTeller("A3" , "45,599" , "4 gb" , "100 gb" , "15 inches" , "Samsung");
console.log(samsung);
var lg = new mobileDTeller("A3" , "45,599" , "4 gb" , "100 gb" , "15 inches" , "LG")
console.log(lg)

//! CONSTRUCTORS
function Plans(name , price , space , transfer , pages , discountMonths){
  this.Name = name,
  this.PriceMonthly = price,
  this.Space = space, 
  this.Transfer = transfer,
  this.Pages  = pages,
  this.DiscountMonths = discountMonths
}
Plans.prototype.AnnualCalculator = function(){
  var bestPrice = this.PriceMonthly;
  var dateCheck = new Date();
  var gettingMonth = dateCheck.getMonth();
  for (var i = 0 ; i < this.DiscountMonths.length ; i++){
    if (this.DiscountMonths[i] === gettingMonth){
      bestPrice = this.PriceMonthly * 0.80;
      break;
    }
    
  }
  return bestPrice * 12;
      };
Plans.prototype.cancellability =  true;


      

var planBasic = new Plans("basic" , 3.99 , "100gb" , '50gb' , "10" , [6,7,8,11]);
var planProfessional = new Plans("Professional" , 5.99 , "500gb" , '100gb' , "50" , [6,7,8,11]);
var planUltimate = new Plans("Ultimate" , 7.99 , "20000gb" , '1000gb' , "500" , [6,7,8,11]);
console.log(planBasic);
console.log(planProfessional);
console.log(planUltimate);
console.log(planBasic.PriceMonthly * 12)
console.log(planProfessional.PriceMonthly * 12)
console.log(planBasic.AnnualCalculator());

//* property getting
var plansProperties = [];
for(var propOfPlans in planBasic){
  plansProperties.push(propOfPlans);
}
console.log(plansProperties);
var omitDefaultP = [];
var counter1 = 0
var counter0 = 0
for(var prop in planBasic){
  if (planBasic.hasOwnProperty(prop)){
    omitDefaultP.push(prop);
    counter1++
  }
  counter0++;
}
console.log(omitDefaultP);
console.log(planBasic.hasOwnProperty("cancellabilty")) //* specific
console.log("cancellability" in planBasic)     //* general
console.log(counter0);
console.log(counter1)

// function calculate(){
//   var monthPrice = 3.99
//   var dateCheck = new Date();
//   var gettingMonth = dateCheck.getMonth();
//   for (var i = 0 ; i < planBasic.DiscountMonths.length ; i++){
//     if (planBasic.DiscountMonths[i] === gettingMonth){
//      console.log(monthPrice);
//       monthPrice *= 0.80;
//       break;
//     }
//     return monthPrice * 12;
//   }
// }
// console.log(calculate());

//console.log(planBasic.PriceMonthly * 0.80 * 12);
//  function Plan(name, price, space, transfer, pages, discountMonths) {
//  this.name = name;
//  this.price = price;
//  this.space = space;
//  this.transfer = transfer;
//  this.pages = pages;
//  this.discountMonths = discountMonths;
//  this.calcAnnual = function(percentIfDisc) {
//  var bestPrice = this.price;
 
// var currDate = new Date();
// var thisMo = currDate.getMonth();
// for (var i = 0; i < this.discountMonths.length; i++) {
// if (this.discountMonths[i] === thisMo) {
// bestPrice = this.price * percentIfDisc;
// break;
// }
// }
// return bestPrice * 12;
// };  

// }
// var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6,8 ,7, 11]);
// console.log(p2.calcAnnual(0.80));
// console.log(5.99 * 12);