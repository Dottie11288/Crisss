// =========================
// PROJECT AURORA
// Parte 1
// =========================

// =========================
// NIVEL 1 - CUADRÍCULA 4x4
// =========================

const grid = document.getElementById("grid");

const numbers = [
    1, 12, 5, 9,
    15, 3, 14, 7,
    10, 16, 2, 13,
    6, 8, 11, 4
];

let nextNumber = 1;

numbers.forEach(num => {

    const box = document.createElement("div");

    box.classList.add("box");

    box.textContent = num;

    box.addEventListener("pointerdown", () => {

        if(num === nextNumber){

            box.classList.add("correct");
            nextNumber++;

            if(nextNumber === 17){

                setTimeout(()=>{

                    openPage("level2");

                },700);

            }

        }else{

            nextNumber = 1;

            document.querySelectorAll(".box")
            .forEach(b => b.classList.remove("correct"));

        }

    });

    grid.appendChild(box);

});
// =========================
// NIVEL 2
// =========================

const checkButton = document.getElementById("check");
const answerInput = document.getElementById("answer");

checkButton.addEventListener("click", () => {

    const answer = answerInput.value.trim().toUpperCase();

    if(answer === "PUTASO"){

        checkButton.textContent = "✓ CORRECTO";
        checkButton.style.background = "#00c853";

        if(navigator.vibrate){
            navigator.vibrate(120);
        }

        setTimeout(() => {

            openPage("level3");

        },1000);

    }else{

        answerInput.value = "";

        answerInput.placeholder = "Respuesta incorrecta";

        answerInput.style.border = "2px solid #ff3b3b";

        if(navigator.vibrate){
            navigator.vibrate([80,60,80]);
        }

        setTimeout(()=>{

            answerInput.style.border = "";

            answerInput.placeholder = "Escribe la respuesta...";

        },1000);

    }

});
// =========================
// NIVEL 3
// =========================

const heartsContainer = document.getElementById("hearts");

// Limpiamos por si acaso
heartsContainer.innerHTML = "";

// Elegimos un corazón ganador
const winningHeart = Math.floor(Math.random() * 25);

for (let i = 0; i < 25; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "❤";

    // El corazón correcto late ligeramente
    if (i === winningHeart) {

        heart.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.12)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 1200,
                iterations: Infinity
            }
        );

    }

    heart.addEventListener("click", () => {

        if (i === winningHeart) {

            heart.style.color = "#ff4da6";
            heart.style.transform = "scale(1.8)";

            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 200]);
            }

            setTimeout(() => {
                openPage("final");
            }, 1200);

        } else {

            heart.textContent = "💔";
            heart.style.opacity = "0.35";
            heart.style.pointerEvents = "none";

        }

    });

    heartsContainer.appendChild(heart);

}
