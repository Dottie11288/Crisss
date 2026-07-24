// ===============================
// CAMBIO DE PANTALLAS
// ===============================

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

document.getElementById("startBtn").addEventListener("click", () => {
    showScreen("level1");
});

// ===============================
// NIVEL 1
// ===============================

const grid = document.getElementById("grid");

// Orden correcto de pulsación
const sequence = [
    8, 1, 11, 13,
    6, 15, 3, 9,
    0, 7, 12, 4,
    14, 2, 10, 5
];

let current = 0;

for (let i = 0; i < 16; i++) {

    const square = document.createElement("div");

    square.className = "square";

    square.addEventListener("click", () => {

        if (i === sequence[current]) {

            square.classList.add("correct");

            if (navigator.vibrate) {
                navigator.vibrate(30);
            }

            current++;

            if (current === sequence.length) {

                setTimeout(() => {

                    showScreen("level2");

                }, 800);

            }

        } else {

            current = 0;

            document.querySelectorAll(".square").forEach(s => {

                s.classList.remove("correct");

                s.classList.add("wrong");

            });

            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
            }

            setTimeout(() => {

                document.querySelectorAll(".square").forEach(s => {

                    s.classList.remove("wrong");

                });

            }, 400);

        }

    });

    grid.appendChild(square);

}
// ===============================
// NIVEL 2
// ===============================

const answer = document.getElementById("answer");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {

    const text = answer.value.trim().toUpperCase();

    if (text === "PUTASO") {

        showScreen("level3");

    } else {

        alert("No es esa...");

        answer.value = "";

    }

});
// ===============================
// NIVEL 3
// ===============================

const hearts = document.getElementById("hearts");

const correctHeart = 12;

for(let i=0;i<25;i++){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "❤️";

    heart.addEventListener("click",()=>{

        if(i===correctHeart){

            heart.style.transform="scale(1.5)";
            heart.style.filter="drop-shadow(0 0 12px #ff4d8d)";

            if(navigator.vibrate){
                navigator.vibrate([100,60,200]);
            }

            setTimeout(()=>{

                showScreen("final");

            },800);

        }else{

            heart.textContent="💔";

            heart.style.opacity=".45";

            heart.style.pointerEvents="none";

            if(navigator.vibrate){
                navigator.vibrate(40);
            }

        }

    });

    hearts.appendChild(heart);

}
document.getElementById("videoBtn").addEventListener("click", () => {
    window.location.href = "https://photos.app.goo.gl/QjBsuxXiLF4yVdps7";
});
