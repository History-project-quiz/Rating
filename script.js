"use strict";

function show(element, data) {
    let s = "";
    data.forEach((i) => {
        s += `<li>${decodeURI(i.name)} – ${i.score}</li>`;
    });
    document.querySelector(element).innerHTML = s;
}

let ws1 = new WebSocket(`ws://127.0.0.1:8000/ws`);

ws1.onmessage = function (event) {
    show("#game1", JSON.parse(event.data));
};
