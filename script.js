const screens = document.querySelectorAll(".screen");

function showScreen(id){
    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    showScreen("level1");
});
