"use strict";

function show(element, data) {
  let s = "";
	data.forEach((i) => {
		s += `<li>${i.name} – ${i.score}</li>`;
	});
  document.querySelector(element).innerHTML = s;
}

fetch("https://api.tinkoffgame.ml/api/v1/table?chat_id=-1001729919564&game_id=1")
  .then(response => response.text())
  .then(result => {
    show("#game1", JSON.parse(result).table);
  })

let ws1 = new WebSocket(
	"wss://api.tinkoffgame.ml/ws?chat_id=-1001729919564&game_id=1"
);

ws1.onmessage = function (event) {
	show("#game1", JSON.parse(event.data));
};
