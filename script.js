// =====================================
// PARA CRISTINA ❤️
// SCRIPT - PARTE 1
// =====================================

// ---------- Pantallas ----------

const pages = document.querySelectorAll(".page");

function showPage(id){
    pages.forEach(page=>page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ---------- Botón comenzar ----------

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    showPage("level1");

});

// ---------- Fondo ----------

const canvas=document.getElementById("background");
const ctx=canvas.getContext("2d");

function resize(){

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

let stars=[];

for(let i=0;i<140;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        s:0.2+Math.random()*0.8

    });

}

function animateBackground(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fillStyle="rgba(255,255,255,.85)";

        ctx.fill();

        star.y+=star.s;

        if(star.y>canvas.height){

            star.y=0;
            star.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(animateBackground);

}

animateBackground();


// =====================================
// NIVEL 1
// =====================================

const grid=document.getElementById("grid");

// Orden secreto:
//
//  9   2  14   7
// 12  16   5  10
//  1   8  15   3
// 11   4  13   6

const sequence=[
8,
1,
11,
13,
6,
15,
3,
9,
0,
7,
12,
4,
14,
2,
10,
5
];

let progress=0;

for(let i=0;i<16;i++){

    const square=document.createElement("div");

    square.className="square";

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
// =====================================
// NIVEL 2
// =====================================

const answer = document.getElementById("answer");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click",()=>{

    const text = answer.value.trim().toUpperCase();

    if(text==="PUTASO"){

        checkBtn.textContent="✓ Correcto";

        if(navigator.vibrate){
            navigator.vibrate(120);
        }

        setTimeout(()=>{

            showPage("level3");

        },900);

    }else{

        answer.value="";

        answer.placeholder="No es esa...";

        if(navigator.vibrate){
            navigator.vibrate([80,60,80]);
        }

    }

});

// =====================================
// NIVEL 3
// =====================================

const hearts=document.getElementById("hearts");

const winner=Math.floor(Math.random()*25);

for(let i=0;i<25;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.textContent="❤
        // =====================================
// FINAL
// =====================================

const videoBtn = document.getElementById("videoBtn");

videoBtn.addEventListener("click",()=>{

    alert("Aquí añadiremos el vídeo ❤️");

});

// =====================================
// EFECTO DE ENTRADA
// =====================================

document.body.animate(

[
    {
        opacity:0
    },
    {
        opacity:1
    }
],

{
    duration:800,
    fill:"forwards"
}

);

// =====================================
// GUARDAR PROGRESO
// =====================================

function saveProgress(page){

    localStorage.setItem("cristina_progress",page);

}

const originalShowPage = showPage;

showPage = function(id){

    originalShowPage(id);
