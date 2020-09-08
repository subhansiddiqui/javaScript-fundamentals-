console.log("hello we are starting to learn DOM 🧠");

// var id = document.getElementById("humpty");

// var element = document.getElementById("first");
// console.log(element);
// var value = element.firstChild;
// console.log(value.innerHTML);

function changeFont() {
  var parentH = document.getElementById("first");
  console.log(parentH);
  var allP = parentH.getElementsByTagName("p");
  console.log(allP);
  var inner1 = allP[0].innerHTML;
  console.log(inner1);
  for (var i = 0; i < allP.length; i++) {
    allP[i].style.fontFamily = "Effra Light";
    allP[i].style.fontSize = "22px";
  }
  var button = document.getElementById("clickable");
  button.value = "click to make normal";
  button.onmouseover = "Normal()";
}
// function makeNormal() {
//   var element = document.getElementById("first");
//   console.log(element);
//   var allPara = element.getElementsByTagName("p");
//   for (var i = 0; i < allPara.length; i++) {
//     allPara[i].style.fontFamily = "Arial, Helvetica, sans-serif";
//     allPara[i].style.fontSize = "20px";
//   }
// }

var para = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]; // ! this is how i got second para inside main element
console.log(para);
para = para.childNodes[1]; //// * this is em in <p>
console.log(para);

var div = document.getElementById("humpty");
console.log(div);
var counter = 0;
for (var i = 0; i < div.childNodes.length; i++) {
  if (div.childNodes[i].nodeType === 1) {
    counter++;
  }
  if (counter === 2) {
    div.childNodes[i].innerHTML += "This just got changed";
    break;
  }
}
console.log("thats all junk");

var withPara = document.getElementById("withPara");
console.log(withPara);
console.log(withPara.firstChild.childNodes[1].firstChild);
console.log(withPara.lastChild.lastChild);
console.log(withPara.parentNode.parentNode.parentNode); //! the parent of div is body . the parent of body is html and parent of html id #document
console.log(withPara.parentNode.previousSibling); //! whitespace
console.log(withPara.firstChild.nextSibling.lastChild);
console.log(withPara.lastChild.previousSibling);
console.log(withPara.firstChild.nextSibling.firstChild.nextSibling); /// ! second
console.log(
  withPara.lastChild.previousSibling.previousSibling.firstChild.nextSibling /// ! third
);
console.log(
  withPara.firstChild.nextSibling.nextSibling.nextSibling.lastChild
    .previousSibling
); //! same
console.log(
  withPara.lastChild.previousSibling.lastChild.previousSibling.firstChild
    .nodeType //! 3
);

var withPara1 = document.getElementById("withPara1");
console.log(withPara1);
console.log(
  withPara1.childNodes[2].firstChild.nodeValue +
    " : " +
    withPara1.childNodes[2].firstChild.nodeName
);

console.log(
  withPara.firstChild.nextSibling.lastChild.previousSibling.nodeName +
    " : " +
    withPara1.firstChild.nextSibling.lastChild.previousSibling.nodeValue
); /// ! null because element don't have a value

console.log(
  withPara1.childNodes[1].nextSibling.nextSibling.firstChild.nodeName +
    " : " +
    withPara1.childNodes[1].nextSibling.nextSibling.firstChild.nodeValue
);
console.log(
  withPara1.childNodes[3].nextSibling.lastChild.previousSibling.firstChild
    .nodeName +
    " ; " + withPara1.childNodes[3].nextSibling.lastChild.previousSibling.firstChild.nodeValue
);

// *      nodeValue = brings the value of Text
// *      nodeName = brings the name of elements in uppercase and  bring brings #text if its a Text
// *      nodeType = 1 ===> element  ;;;; 3  ====> text
