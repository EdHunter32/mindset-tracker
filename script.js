// 🎯 Selezioniamo gli elementi chiave
const buttons = document.querySelectorAll(".complete-btn");
const progressCounter = document.getElementById("progress-counter");
const totalChallenges = document.getElementById("total-challenges");
const scoreCounter = document.getElementById("score"); // Selezioniamo il contatore extra

// 🗂 Memorizziamo lo stato delle sfide completate
let completedChallenges = JSON.parse(localStorage.getItem("completedChallenges")) || [];

// 🏆 Impostiamo il numero totale di sfide
totalChallenges.textContent = buttons.length;

// 📌 Funzione per aggiornare il LocalStorage
function updateLocalStorage() {
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
}

// 🔄 Funzione per aggiornare il contatore di progressi

function updateProgressCounter() {
    progressCounter.textContent = completedChallenges.length;
    scoreCounter.textContent = completedChallenges.length; // ✨ AGGIUNTO: aggiorna il secondo contatore
}


// 🎯 Funzione per caricare lo stato delle sfide salvate
function loadChallengesState() {
    buttons.forEach((button, index) => {
        let challengeItem = button.parentElement;
        if (completedChallenges.includes(index)) {
            challengeItem.classList.add("completed");
            button.textContent = "✔ Completato";
            button.style.backgroundColor = "#6c757d";
        }
    });
    updateProgressCounter();
}

// Aggiungiamo eventi di click ai pulsanti
buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        let challengeItem = this.parentElement;
        challengeItem.classList.toggle("completed");

        if (challengeItem.classList.contains("completed")) {
            completedChallenges.push(index);
            this.textContent = "✔ Completato";
            this.style.backgroundColor = "#6c757d";
        } else {
            completedChallenges = completedChallenges.filter(i => i !== index);
            this.textContent = "✅ Completa";
            this.style.backgroundColor = "#ff00ff";
        }

        updateLocalStorage();
        updateProgressCounter();
    });
});

// Carichiamo lo stato iniziale al caricamento della pagina
loadChallengesState();
