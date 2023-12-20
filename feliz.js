var soundfile = document.createElement("audio");
soundfile.preload = "auto";
var scr = document.createElement("source");
scr.src = "musica.mp3";
soundfile.appendChild(scr);
soundfile.load();
soundfile.volume = 1;
soundfile.loop = true;
var start = true;
document.querySelectorAll('*')
  .forEach(element => element.addEventListener('click', e => {
    if (start) {soundfile.play(); }
    else {soundfile.pause();}
    start = !start
  }))