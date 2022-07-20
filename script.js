"use strict";
const urlParams = new URLSearchParams(window.location.search);
let chat_id = urlParams.get("chat_id");
if (chat_id === null) {
	chat_id = "-1001729919564";
}

function show(element, data) {
	let s = "";
	data.forEach((i) => {
		s += `<li>${decodeURI(i.name)} – ${i.score}</li>`;
	});
	document.querySelector(element).innerHTML = s;
}

for (let i = 1; i <= 3; i++) {
	fetch(
		`https://api.tinkoffgame.ml/api/v1/table?chat_id=${chat_id}&game_id=${i.toString()}`
	)
		.then((response) => response.text())
		.then((result) => {
			show(`#game${i.toString()}`, JSON.parse(result).table);
		});
}

let ws1 = new WebSocket(
	`wss://api.tinkoffgame.ml/ws?chat_id=${chat_id}&game_id=1`
);

ws1.onmessage = function (event) {
	show("#game1", JSON.parse(event.data));
};

let ws2 = new WebSocket(
	`wss://api.tinkoffgame.ml/ws?chat_id=${chat_id}&game_id=2`
);

ws2.onmessage = function (event) {
	show("#game2", JSON.parse(event.data));
};

let ws3 = new WebSocket(
	`wss://api.tinkoffgame.ml/ws?chat_id=${chat_id}&game_id=3`
);

ws3.onmessage = function (event) {
	show("#game3", JSON.parse(event.data));
};
