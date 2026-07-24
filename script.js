// =========================
// PROJECT AURORA
// Parte 1
// =========================

const pages = document.querySelectorAll(".page");

function openPage(id){

    pages.forEach(page=>page.classList.remove("active"));

    document.getElementById(id).classList.add("active");

}

// ---------- Inicio ----------

document
.getElementById("start")
.onclick=()=>{

    openPage("level1");

};

// ---------- Fondo ----------

const bg=document.getElementById("bg");

const ctx=bg.getContext("2d");

function resize(){

    bg.width=window.innerWidth;

    bg.height=window.innerHeight;

}

resize();

window.onresize=resize;

let stars=[];

for(let i=0;i<120;i++){

    stars.push({

        x:Math.random()*bg.width,

        y:Math.random()*bg.height,

        r:Math.random()*2,

        s:0.2+Math.random()

    });

}

function animate(){

    ctx.clearRect(0,0,bg.width,bg.height);

    ctx.fillStyle="#66d9ff";

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fill();

        star.y+=star.s;

        if(star.y>bg.height){

            star.y=0;

            star.x=Math.random()*bg.width;

        }

    });

    requestAnimationFrame(animate);

}

animate();
// =========================
// CONSTELACIÓN
// =========================

const canvas = document.getElementById("constellation");
const c = canvas.getContext("2d");

const points = [
    {x:40,y:60},
    {x:90,y:120},
    {x:170,y:80},
    {x:260,y:150},
    {x:300,y:240},
    {x:230,y:330},
    {x:140,y:360},
    {x:70,y:290},
    {x:110,y:210},
    {x:200,y:220}
];

let currentPoint = 0;

function drawConstellation(){

    c.clearRect(0,0,canvas.width,canvas.height);

    // Líneas ya completadas
    c.strokeStyle="#4fdcff";
    c.lineWidth=3;

    c.beginPath();

    for(let i=0;i<currentPoint;i++){

        if(i===0){

            c.moveTo(points[i].x,points[i].y);

        }else{

            c.lineTo(points[i].x,points[i].y);

        }

    }

    c.stroke();

    // Puntos
    points.forEach((p,index)=>{

        c.beginPath();

        c.arc(p.x,p.y,8,0,Math.PI*2);

        c.fillStyle=index<currentPoint ? "#ff4da6" : "#66d9ff";

        c.fill();

    });

}

drawConstellation();

canvas.addEventListener("pointerdown",(e)=>{

    const rect=canvas.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    const p=points[currentPoint];

    const d=Math.hypot(x-p.x,y-p.y);

    if(d<18){

        currentPoint++;

        drawConstellation();

        if(currentPoint===points.length){

            setTimeout(()=>{

                openPage("level2");

            },700);

        }

    }else{

        currentPoint=0;

        drawConstellation();

    }

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
