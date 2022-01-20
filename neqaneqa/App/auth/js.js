//to check password length and confirmation checker on register page
function verifyPassword() {
  let pw = document.getElementById("password").value;

  //check empty password field
  if (pw == "") {
    document.getElementById("message").innerHTML = "Fill the password please!";
  }

  //minimum password length validation
  else if (pw.length < 8 && pw.length > 0) {
    document.getElementById("message").innerHTML =
      "Password length must be atleast 8 characters";
  }

  //maximum length of password validation
  else if (pw.length > 15) {
    document.getElementById("message").innerHTML =
      "Password length must not exceed 15 characters";
  } else {
    document.getElementById("message").innerHTML = "";
  }
}
function che() {
  let pw = document.getElementById("pswd").value;
  var confirem = document.querySelector("#confirem").value;

  if (pw === confirem) {
    document.getElementById("messages").innerHTML = "confrimed";
  } else {
    document.getElementById("messages").innerHTML = "Password not match";
  }
}

//To check Email format on signin page
function checkEmail() {
  let pw = document.getElementById("Username").value;
  var at = pw.split("");
console.log(pw);
  var count = 0;

  for (var i = 0; i < at.length; i++) {
    if (at[i] === "@") {
      count++;
    }
  }
  if (count == 0) {
    document.getElementById("emessage").innerHTML = "Not on Email format";
  } else {
    document.getElementById("emessage").innerHTML = "";
  }
}

//To change image display on   home page
var count = 0;
function changeImage() {
  let src = document.getElementById("hike").src;
console.log("tet");
  var rand = Math.floor(Math.random() * 4);
  var string = [
    
    "../../resources/images/hike1 1.jpg",
    "../../resources/images/hike1 2.jpg",
    "../../resources/images/hike1 3.jpg",
    "../../resources/images/hike1 4.jpg",
  ];

  document.getElementById("hike").src = string[count];
  count++;
  if (count == 3) count = 0;
}

function smm() {
  const input = document.querySelector("input");
  const log = document.getElementById("values");

  input.addEventListener("input", updateValue);

  function updateValue(e) {
    log.textContent = e.target.value;
  }
}

console.log("tet")


var btn = document.getElementById("btn");
btn.addEventListener("mouseover",fun);
btn.addEventListener("mouseout", fun2);
function fun() {
  btn.style.width = "50px";
  btn.style.height = "50px";
  btn.style.background = "yellow";
  btn.style.color = "blue";
}

function fun2() {
  btn.style.width = "";
  btn.style.height = "";
  btn.style.background = "";
  btn.style.color = "";
}
var mybtn = document.getElementById("btn");
mybtn.addEventListener("mouseover", fun);
mybtn.addEventListener("click", fun1);


 function sayHello() {
   alert("form reseted successfuly");
 }


  function mouseoverevent() {
    alert("this shows articles");
  }

  function mouseoutevent() {
    document.write("please hover your mouse over");
  }

  function keydownevent() {
    document.getElementById("phone");
    alert("Pressed a key");
  }

  function focusevent() {
    document.getElementById("fullname").style.background = " aqua";
  }  


function mouseDown() {
  document.getElementById("myP").style.color = "red";
}

function mouseUp() {
  document.getElementById("myP").style.color = "green";
}

function myFunction() {
  var x = document.getElementById("fullname");
  x.value = x.value.toUpperCase();
}