// ===============================
// CAMBIO DE PANTALLAS
// ===============================

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

document.getElementById("startBtn").addEventListener("click", () => {
    showScreen("level1");
});
// ===============================
// CUADRÍCULA 4x4
// ===============================

const grid = document.getElementById("grid");

for (let i = 0; i < 16; i++) {

    const square = document.createElement("div");

    square.className = "square";

    square.dataset.id = i;

    grid.appendChild(square);

}
