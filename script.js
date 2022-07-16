'use strict';
let ws1 = new WebSocket("wss://api.tinkoffgame.ml/ws?chat_id=-1001729919564&game_id=1");

ws1.onmessage = function(event) {
  let s = "";
  JSON.parse(event.data).forEach(i => {
    s += `<li>${i.name} – ${i.score}</li>`;
  });
  document.querySelector('#game1').innerHTML = s;
};