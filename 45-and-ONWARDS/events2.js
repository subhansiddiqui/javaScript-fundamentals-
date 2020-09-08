console.log("hello we are starting from 52");
function makeDisappear() {
  document.getElementById("ugly").className += " hideImage";

  ////*      It's += instead of just = .
  ////*      A space before the class name is required.
}

function changeONHover() {
  document.getElementById("changer").className = "resize";
  document.getElementById("changer").src = "beauty.jpg";
}
function original() {
  document.getElementById("changer").src =
    "brian-yurasits-Nb92G8NEnOg-unsplash.jpg";
  document.getElementById("changer").className = "uglySize";
}

function argumented(elementID, changeTO) {
  document.getElementById(elementID).src = changeTO;
}

function preChange(elementID, before) {
  document.getElementById(elementID).src = before;
}

function verbose() {
  var idof = document.getElementById("verbose");

  idof.src = "mercury.jpg";
}

function verbose2() {
  var idof = document.getElementById("verbose");
  idof.src = "brian-yurasits-Nb92G8NEnOg-unsplash.jpg";
}
//////!
function makeAllBig() {
  var inside = document.getElementById("safe");
  console.log(inside);

  var allText = inside.getElementsByTagName("p");
  console.log(allText);

  var inner = allText[0].innerHTML;
  console.log(inner);

  var allHead = inside.getElementsByTagName("h1");
  console.log(allHead);

  for (var i = 0; i < allText.length; i++) {
    allHead[i].style.textAlign = "center";

    allText[i].style.fontSize = "2em";
    allText[i].style.textAlign = "center";
  }
}

////!
function makeAllPink() {
  var allCells = document.getElementsByTagName("td");
  console.log(allCells);
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = "pink";
  }
  var lastRow = document.getElementById("hello");
  var lastChange = lastRow.getElementsByTagName("td");
  for (var i = 0; i < lastChange.length; i++) {
    lastChange[i].style.backgroundColor = "grey";
    lastChange[i].style.color = "white";
    lastChange[i].style.borderColor = "black";
  }
}

function makePageBlack() {
  var body = document.getElementsByTagName("body");
  console.log(body);
  body[0].style.backgroundColor = "rgb(255, 185, 234)";
  body[0].style.margin = "10px";
}
function makePageNormal() {
  var body = document.getElementsByTagName("body");
  body[0].style.backgroundColor = "white";
  body[0].style.margin = "initial";
}
