console.warn("hey from app.js");

const s = document.querySelector('nav ul .drop-down');
const drop = document.getElementById("drop-down-icon");

drop.onclick = function() {
    s.style.display = "block";
}