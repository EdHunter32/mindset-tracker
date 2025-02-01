// Selezioniamo tutti i pulsanti "Completa"
const buttons = document.querySelectorAll(".complete-btn");

// Recuperiamo il contatore di progresso
const progressCounter = document.getElementById("progress-counter");
const totalChallenges = document.getElementById("total-challenges");

// Impostiamo il numero totale di sfide
totalChallenges.textContent = document.querySelectorAll(".complete-btn").length;


let completedChallenges = JSON.parse(localStorage.getItem("completedChallenges")) || [];

// Funzione per aggiornare il contatore delle sfide completate
function updateProgressCounter() {
    progressCounter.textContent = completedChallenges.length;
}


// Funzione per aggiornare LocalStorage
function updateLocalStorage() {
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
}

// Funzione per aggiornare la UI in base a LocalStorage
function loadChallengesState() {
    buttons.forEach((button, index) => {
        let challengeItem = button.parentElement;
        if (completedChallenges.includes(index)) {
            challengeItem.classList.add("completed");
            button.textContent = "✔ Completato";
            button.style.backgroundColor = "#6c757d"; // Grigio
        }
    });

    updateProgressCounter(); // aggiorniamo il contatore quando carichiamo i dati
}

// Aggiungiamo un evento click a ogni pulsante
buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        let challengeItem = this.parentElement;

        // Aggiungiamo/rimuoviamo la classe "completed"
        challengeItem.classList.toggle("completed");

        // Aggiorniamo LocalStorage
        if (challengeItem.classList.contains("completed")) {
            completedChallenges.push(index); // Salviamo l'indice della sfida completata
            this.textContent = "✔ Completato";
            this.style.backgroundColor = "#6c757d";
        } else {
            completedChallenges = completedChallenges.filter(i => i !== index); // Rimuoviamo dal salvataggio
            this.textContent = "✅ Completa";
            this.style.backgroundColor = "#ff00ff";
        }

        updateLocalStorage();
        updateProgressCounter(); // aggiorniamo il contatore dopo ogni azione
    });
});

// Carichiamo lo stato delle sfide salvate
loadChallengesState();