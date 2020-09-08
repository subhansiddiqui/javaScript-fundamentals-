var i = 0;
while (i <= 5) {
  console.log("this is updating" + " : " + i);
  i++;
}
alert(i);
// for (var r = 0 ; r <= 7 ; r++){
//     console.log("this is updating" + " : " + r);

// }
// alert(r);
var t = 0;
do {
  t++;

  console.log("this is dynamic" + " : " + t);
} while (t < 0);
alert(t);

var numberAdder = 0;
var number = +prompt("write a number");

for (var a = 0; a <= number; a++) {
  numberAdder = numberAdder + a;
  console.log(a.toString());
}
console.log(a); ////////// ! DONE
console.log(numberAdder); //////!  jab upper jaega tabhi tu condition true hugi
