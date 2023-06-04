function changeText() {
  document.getElementById("changeThis").innerHTML = "Hello Jasper!";
}

function turnOnLightBulb() {
  document.getElementById("bulb").src = "../images/pic_bulbon.gif";
}

function turnOffLightBulb() {
  document.getElementById("bulb").src = "../images/pic_bulboff.gif";
}

function makeFontBigger() {
  document.getElementById("text").style.fontSize = "25px";
}

function makeFontSmaller() {
  document.getElementById("text").style.fontSize = "10px";
}

function makeTextDisappear() {
  document.getElementById("displayText").style.display = "none";
}

function makeTextAppear() {
  document.getElementById("displayText").style.display = "block";
}
