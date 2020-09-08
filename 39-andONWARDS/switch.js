console.log("switch started");
//// * syntax
var ask = prompt("what is your car name ?");
switch (ask) {
  case "mehran":
    console.log("you probaly need to upgrade !");
    break;
  case "ferrari":
    console.log("you dont need a upgrade");
    break;

  default:
    console.log("we don't know that car !");
}
var car = ["Mehran", "Cultus", "Alto", "Corolla", "City", "Civic", "Vitz"];
ask = prompt("which car u want");
var first = ask.slice(0, 1);
first = first.toUpperCase();
console.log(first);

var remainnig = ask.slice(1);
remainnig = remainnig.toLowerCase();
console.log(remainnig);

var all = first + remainnig;
console.log(all);
var check = false;

for (var i = 0; i < car.length; i++) {
  if (all === car[i]) {
    console.log("we here");
    check = true;
    console.log(check);
    break;
  }
}
if (check === false) {
  console.log("sorry we dont have");
}

////* switch completed for now (come back to it )
