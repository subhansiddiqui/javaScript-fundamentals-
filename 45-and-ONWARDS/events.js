console.log("events chapters started");
function pakistan() {
  var num = 2;
  console.log(Math.ceil(1 * 4 + 45 * num + 94 / 66));
}
pakistan();

function userGreet(message) {
  alert(message);
}

function emailChecker(email) {
  // var val = document.getElementById(email).value;
  alert(email);
  val = email;

  if (val === "") {
    console.log("please enter a valid adress");
    document.getElementById(email).value = "something@gmail.com";
    alert("look at console");
  } else {
    alert("response submitted");
  }
}

//////! chapter 50

function fillCity(zipEntered) {
  zipEntered = document.getElementById("zipCode").value;
  var city;
  console.log(zipEntered);
  switch (zipEntered) {
    case "000":
      city = "karachi";
      break;

    case "111":
      city = "lahore";
      break;

    case "222":
      city = "pindi";
      break;

    case "333":
      city = "islamabad";
      break;

    default:
      city = "city not found";
  }
  document.getElementById("cityFounded").value = city;
}

// function checkAddress(fieldId) {
//   alert(fieldId);

//   if (document.getElementById("emaill").value === "") {
//     alert(fieldId);
//     alert("Email address required.");
//   }
// }

////! chapter 51
function showFullPara() {
  var full =
    "Karachi (Urdu: کراچی‎; Sindhi: ڪراچي; ALA-LC: Karācī, IPA: [kəˈraːtʃi] (About this soundlisten)) is the capital of the Pakistani province of Sindh. It is the largest city in Pakistan[15][16] and seventh largest city proper in the world.[17] Ranked as a beta-global city,[18][19] the city is Pakistan's premier industrial and financial centre,[20] with an estimated GDP of $114 billion (PPP) as of 2014.[13][14] Karachi is Pakistan's most cosmopolitan city, its most linguistically, ethnically, and religiously diverse city,[21] as well as one of Pakistan's most secular and socially liberal cities.[22][23][24] With its location on the Arabian Sea, Karachi serves as a transport hub, and is home to Pakistan's two largest seaports, the Port of Karachi and Port Bin Qasim, as well as Pakistan's busiest airport, Jinnah International Airport. <a href='javascript:void(0)' onClick='showLess()'>see less</a>";
  document.getElementById("paraAboutKarachi").innerHTML = full;
}
function showLess() {
  var less =
    "Karachi (Urdu: کراچی‎; Sindhi: ڪراچي; ALA-LC: Karācī, IPA: [kəˈraːtʃi] (About this soundlisten)) is the capital of the Pakistani province of Sindh.<a href='javacript:void(0)' onclick='showFullPara()'>see more </a>";
  document.getElementById("paraAboutKarachi").innerHTML = less;
}

//// ! more practices
var content;
function showINList() {
  document.getElementById("showing").innerHTML = document.getElementById("enterd-content").value;
}
// var valueOfInput
// function takingContent(){
//  valueOfInput = document.getElementById("entered-content")
// }
