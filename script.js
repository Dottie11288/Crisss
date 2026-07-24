// =========================
// PARA CRISTINA ❤️
// PARTE 1
// =========================

// ---------- Pantallas ----------

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ---------- Botón Comenzar ----------

document.getElementById("startBtn").addEventListener("click", () => {
    showScreen("level1");
});

// ---------- Fondo animado ----------

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 120; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1
    });
}

function animateBackground() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "white";

    stars.forEach(star => {

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

    });

    requestAnimationFrame(animateBackground);

}

animateBackground();
