function onWindowLoad() {  
    var message = document.querySelector('#message');
  chrome.tabs.executeScript(null, {
    file: "domToString.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  }); 
}
window.onload = onWindowLoad;


var myAudio = new Audio();        // create the audio object
myAudio.src = chrome.extension.getURL('notSoFast.m4a'); // assign the audio file to it

if (document.location.href.includes("google")){
  myAudio.play();
  for (var i=0; i < document.getElementsByTagName('img').length; i++) {
      document.getElementsByTagName('img')[i].src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12924590_10209152047342870_7327219359152797257_n.jpg?oh=a31742d00731a5e7edbd3dd89ccb01de&oe=58A06EF6";
      document.getElementsByTagName('img')[i].srcset="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12924590_10209152047342870_7327219359152797257_n.jpg?oh=a31742d00731a5e7edbd3dd89ccb01de&oe=58A06EF6";
  }
}
var switched= false;
if (switched == false && document.location.href.includes("google")){
  document.body.innerHTML = document.body.innerHTML.replace('google', 'Ben Zhang');
  document.body.innerHTML = document.body.innerHTML.replace('Google', 'Ben Zhang');
  document.body.innerHTML = document.body.innerHTML.replace(/google/g, 'Ben Zhang');
  document.body.innerHTML = document.body.innerHTML.replace(/Google/g, 'Ben Zhang');
  switched = true;
}
if (switched == false ){
  setInterval(function(){ document.body.innerHTML = document.body.innerHTML.replace('Ben Zhang', 'Google');
  document.body.innerHTML = document.body.innerHTML.replace('ben zhang', 'Google');
  document.body.innerHTML = document.body.innerHTML.replace(/Ben Zhang/g, 'Google');
  document.body.innerHTML = document.body.innerHTML.replace(/ben zhang/g, 'Google');
  switched = true; }, 2000);
  
}



                  // play the music
// document.body.style.backgroundColor="#88b719";


document.getElementById("save").onclick= function(){
    // var value =taskText.value;
    var value =document.getElementById("taskText").value;
    // alert(value);
    // chrome.storage.sync.set({ARGUMENT_1}, {ARGUMENT_2})
    chrome.storage.sync.set({'myTask': value},function(){
        alert("wow!");
    });
    
}

document.body.onload = function() {
  chrome.storage.sync.get("myTasks", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("myTasks").innerText = items.myTasks;
    }
  });
}
