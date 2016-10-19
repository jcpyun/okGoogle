

var bsong = new Audio();        // create the audio object
bsong.src = chrome.extension.getURL('song2.m4a'); // assign the audio file to it


var myAudio = new Audio();        // create the audio object
myAudio.src = chrome.extension.getURL('notSoFast.m4a'); // assign the audio file to it

if (document.location.href.includes("google")){
  myAudio.play();
  for (var i=0; i < document.getElementsByTagName('img').length; i++) {
      document.getElementsByTagName('img')[i].src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12924590_10209152047342870_7327219359152797257_n.jpg?oh=a31742d00731a5e7edbd3dd89ccb01de&oe=58A06EF6";
      document.getElementsByTagName('img')[i].srcset="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12924590_10209152047342870_7327219359152797257_n.jpg?oh=a31742d00731a5e7edbd3dd89ccb01de&oe=58A06EF6";
  }
}


  var isFacebook = false;
  if (document.location.href.includes("ben.zhang.75?fref=ts") || document.location.href.includes("ben.zhang.75") ){
      bsong.play();
    isFacebook = true;
  }
  if ((document.location.href.includes("ben.zhang.75?fref=ts")== false) && (document.location.href.includes("ben.zhang.75")==false) ){
    bsong.pause();
  }

    document.body.innerHTML = document.body.innerHTML.replace('Ben Zhang', 'Google');
    document.body.innerHTML = document.body.innerHTML.replace('ben zhang', 'Google');
    document.body.innerHTML = document.body.innerHTML.replace(/Ben Zhang/g, 'Google');
    document.body.innerHTML = document.body.innerHTML.replace(/ben zhang/g, 'Google');



if (document.location.href.includes("google")){
  document.body.innerHTML = document.body.innerHTML.replace('google', 'Ben Zhang');
  document.body.innerHTML = document.body.innerHTML.replace('Google', 'Ben Zhang');
  document.body.innerHTML = document.body.innerHTML.replace(/google/g, 'Ben Zhang');
  document.body.innerHTML = document.body.innerHTML.replace(/Google/g, 'Ben Zhang');
  switched = true;
}


