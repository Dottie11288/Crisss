// =========================
// PARA CRISTINA ❤️
// Parte 1
// =========================

// ---------- Pantallas ----------

const pages = document.querySelectorAll(".page");

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

// ---------- Botón comenzar ----------

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    showPage("level1");

});

// ---------- Fondo animado ----------

const canvas =
document.getElementById("background");

const ctx =
canvas.getContext("2d");

function resize(){

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

let stars=[];

for(let i=0;i<120;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        s:.2+Math.random()

    });

}

function drawBackground(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.r,
            0,
            Math.PI*2
        );

        ctx.fillStyle="rgba(255,255,255,.8)";

        ctx.fill();

        star.y+=star.s;

        if(star.y>canvas.height){

            star.y=0;
            star.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(drawBackground);

}

drawBackground();
// =========================
// NIVEL 1 - MATRIZ 4x4
// =========================

// Orden de las casillas (0-15)
// Tarjeta:
//
//  9   2  14   7
// 12  16   5  10
//  1   8  15   3
// 11   4  13   6
//
// Hay que pulsar 1→16.

const grid = document.getElementById("grid");

const sequence = [
    8,  //1
    1,  //2
    11, //3
    13, //4
    6,  //5
    15, //6
    3,  //7
    9,  //8
    0,  //9
    7,  //10
    12, //11
    4,  //12
    14, //13
    2,  //14
    10, //15
    5   //16
];

let progress = 0;

for(let i=0;i<16;i++){

    const square=document.createElement("div");

    square.className="square";

    square.dataset.id=i;

    square.addEventListener("click",()=>{

        if(i===sequence[progress]){

            square.classList.add("correct");

            if(navigator.vibrate){
                navigator.vibrate(35);
            }

            progress++;

            if(progress===16){

                setTimeout(()=>{

                    showPage("level2");

                },700);

            }

        }else{

            progress=0;

            document
            .querySelectorAll(".square")
            .forEach(s=>{

                s.classList.remove("correct");

                s.classList.add("wrong");

            });

            if(navigator.vibrate){

                navigator.vibrate([120,80,120]);

            }

            setTimeout(()=>{

                document
                .querySelectorAll(".square")
                .forEach(s=>{

                    s.classList.remove("wrong");

                });

            },350);

        }

    });

    grid.appendChild(square);
}
// =========================
// NIVEL 2
// =========================

const answer = document.getElementById("answer");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {

    const text = answer.value.trim().toUpperCase();

    if (text === "PUTASO") {

        checkBtn.textContent = "✓ Correcto";

        checkBtn.style.background =
        "linear-gradient(135deg,#72ffb8,#4cd6ff)";

        if (navigator.vibrate) {
            navigator.vibrate(120);
        }

        setTimeout(() => {

            showPage("level3");

        }, 900);

    } else {

        answer.value = "";

        answer.placeholder = "No es esa...";

        answer.style.borderColor = "#ff5b8f";

        if (navigator.vibrate) {
            navigator.vibrate([80,60,80]);
        }

        setTimeout(() => {

            answer.placeholder = "Escribe la respuesta";
            answer.style.borderColor =
            "rgba(255,255,255,.2)";

        },1000);

    }

});
// =========================
// NIVEL 3
// =========================

const hearts = document.getElementById("hearts");

// Elegimos un corazón ganador
const winner = Math.floor(Math.random() * 25);

for(let i=0;i<25;i++){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "❤";

    // El correcto late ligeramente
    if(i===winner){

        heart.animate(

            [
                {transform:"scale(1)"},
                {transform:"scale(1.15)"},
                {transform:"scale(1)"}
            ],

            {
                duration:1000,
                iterations:Infinity
            }

        );

    }

    heart.addEventListener("click",()=>{

        if(i===winner){

            heart.style.color="#ff5f9f";
            heart.style.transform="scale(1.8)";

            if(navigator.vibrate){
                navigator.vibrate([100,50,200]);
            }

            setTimeout(()=>{

                showPage("final");

            },1200);

        }else{

            heart.textContent="💔";

            heart.style.opacity=".35";

            heart.style.pointerEvents="none";

            if(navigator.vibrate){
                navigator.vibrate(40);
            }

        }

    });

    hearts.appendChild(heart);

}

// =========================
// BOTÓN FINAL
// =========================

document
.getElementById("videoBtn")
.addEventListener("click",()=>{

    alert("Aquí añadiremos tu vídeo ❤️");

});
