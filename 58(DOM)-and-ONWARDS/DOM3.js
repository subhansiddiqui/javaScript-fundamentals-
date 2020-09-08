console.log("last two chapter for DOM ");
var getPara = document.getElementById("firstPara");
var firstNode = document.createTextNode("hello this is the");
var secondNode = document.createElement("strong");
var textInStrong = document.createTextNode(" first NODE");
secondNode.appendChild(textInStrong);
getPara.appendChild(firstNode);
getPara.appendChild(secondNode);

console.log(getPara);

var head = document.createElement("h1");
var headText = document.createTextNode("below is the text generated from JS");
head.appendChild(headText);

var body = document.getElementsByTagName("body");
body[0].insertBefore(head, getPara);
console.log(body);
console.log(head);
// * console.log(body[0].childNodes[4]);  /////! it gives the script tag but script is not part of a body

var anotherPara = document.createElement("p");

//  anotherPara.appendChild(secondNode);
//  console.log(anotherPara);

var text1 = document.createTextNode("hello this is the");
var child2 = document.createElement("strong");
var text2 = document.createTextNode(" second NODE");

child2.appendChild(text2);
anotherPara.appendChild(text1);
anotherPara.appendChild(child2);
console.log(anotherPara);
body[0].insertBefore(anotherPara, document.getElementById("remover"));

function remover() {
  body[0].removeChild(anotherPara);
}
