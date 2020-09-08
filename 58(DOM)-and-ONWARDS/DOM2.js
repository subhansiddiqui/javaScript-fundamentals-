var get = document.getElementById("hello");
console.log(get);
var get2 = document.getElementById("button");
console.log(get2);
get2.setAttribute("onClick", "changeStyle()");
console.log(get2);

console.log(get);
function changeStyle() {
  document.getElementById("hello").setAttribute("class", "styling");
}

// var creation = document.createElement("p");
// console.log(creation);
// creation.setAttribute("class", "styling");
// var content = document.createTextNode(
//   "hello this is in paragraph lorevgnhth  thbtthbht"
// ); //////  ! it will have a node type issue if we put text this way
// creation.appendChild(content);

// //*function writeDefault() {
// //* var allLI = document.getElementsByTagName("li");
// //* console.log(allLI);
// //* for (var i = 0; i < allLI.length; i++) {
//*  //  if (allLI[i].innerHTML === "") {
//*    //  allLI[i].innerHTML = "this is a default text";
// //*
//*    //  allLI[i].style.color = "black";
//*    //  allLI[i].style.textDecoration = "underline";
//*  //  }
// //* }
// //*
// //*
//! another
var get = document.getElementsByTagName("ol");
console.log(get);
get[0].setAttribute("id", "onlyOL");
console.log(get[0]);

function writeDefault() {
  var counter = 0;
  var get = document.getElementById("onlyOL");
  console.log(get);
  var getChilds = get.childNodes;
  console.log(getChilds);
  for (var i = 0; i < getChilds.length; i++) {
    if (getChilds[i].nodeName === "LI") {
      counter++;
    }
  }
  for (var i = 0; i < getChilds.length; i++) {
    if (getChilds[i].innerHTML === "") {
      getChilds[i].innerHTML = "this is updated <strong>hurray</strong>";
    }
  }

  console.log(counter);
}

function imageChange() {
  document
    .getElementById("image")
    .setAttribute(
      "src",
      "https://images.unsplash.com/photo-1595877704059-7ac51a2b41bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    );
}

console.log(document.getElementById("image").hasAttribute("alt"));
var getSrc = document.getElementById("image").getAttribute("src");
console.log(getSrc);
document.write("<p>src is" + "<strong>" + getSrc + "</strong>" + "</p>");
if (document.getElementById("image").getAttribute("src") !== getSrc) {
  getSrc = document.getElementById("image").getAttribute("src");
  console.log(getSrc);
}
// !                  setAttribute("what to add" "it value")
// !                  getAttribute("class")
// !                  hasAttribute("class")

var imageAtr = document.getElementById("weHere").attributes;
console.log(imageAtr);
var missingCounter = 0;
for (var i = 0; i < imageAtr.length; i++) {
  if (imageAtr[i].nodeValue === "") {
    missingCounter++;
  }
}
console.log("there are " + missingCounter + "  missing");
imageAtr[0].nodeValue =
  "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

//! WE CAN GET ALL ATTRIBUTES OF A ELEMENT FROM ======>  .ATTRIBUTES
console.log(imageAtr[1].nodeName);
imageAtr[1].nodeValue = "an productive imaage";
console.log(imageAtr); ////// ! it won't work because .set and .has needs an element to check

var button1 = document.getElementById("productive");
console.log(button1);
//// !  ================== ........>>>  BREATH  <<<<<<...........
function productive() {
  imageAtr[0].nodeValue =
    "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80";
  button1.setAttribute("onClick", "original()");
  button1.setAttribute("value", "back to normal");
  console.log(button1);
}

function original() {
  imageAtr[0].nodeValue =
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
  button1.setAttribute("onClick", "productive()");
  button1.setAttribute("value", "change image");
  console.log(button1);
}

