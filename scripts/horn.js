// selects an img from the page, changes it to gif for set ammount of time (i just did this one because i ran out of things to do ahahahah)
function hornGif(){
  document.getElementById("horn").src="/horn/assets/horn.gif";
  document.getElementById("hornsound").play()
  setTimeout(function(){ document.getElementById("horn").src="/horn/assets/skeleton.jpeg"; }, 2300);
}