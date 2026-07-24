/* =========================
   RESET
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,body{
    width:100%;
    height:100%;
    overflow:hidden;
    font-family:'Poppins',sans-serif;
}

/* =========================
   FONDO
========================= */

body{

    background:
    radial-gradient(circle at top,#1b1f3a 0%,#0b1020 45%,#05070d 100%);

    color:white;

}

#background{

    position:fixed;

    inset:0;

    z-index:-2;

}

/* =========================
   TARJETA CENTRAL
========================= */

.glass{

    width:92%;
    max-width:430px;

    margin:auto;

    min-height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;

}

.page{

    display:none;

    width:100%;

    padding:35px 25px;

    text-align:center;

    background:rgba(255,255,255,.08);

    backdrop-filter:blur(18px);

    border:1px solid rgba(255,255,255,.15);

    border-radius:28px;

    box-shadow:

    0 0 35px rgba(255,105,180,.12),
    0 0 25px rgba(0,200,255,.15);

}

.page.active{

    display:block;

    animation:fade .6s;

}

@keyframes fade{

from{

opacity:0;
transform:translateY(20px);

}

to{

opacity:1;
transform:none;

}

}

/* =========================
   TEXTOS
========================= */

h1{

    font-family:'Orbitron',sans-serif;

    color:#ffffff;

    font-size:2.2rem;

    margin-bottom:15px;

}

h2{

    color:#ffd4ea;

    margin-bottom:20px;

}

.subtitle{

    color:#8ed8ff;

    margin-bottom:20px;

}

p{

    color:#dddddd;

    line-height:1.7;

    margin:12px 0;

}

/* =========================
   BOTONES
========================= */

button{

    width:100%;

    padding:16px;

    margin-top:28px;

    border:none;

    border-radius:16px;

   
