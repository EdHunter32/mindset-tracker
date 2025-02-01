// Selezioniamo tutti i pulsanti "Completa"
const buttons = document.querySelectorAll(".complete-btn");

// Aggiungiamo un evento click a ogni pulsante
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        // Troviamo l'elemento padre <li> per cambiare il suo stile
        let challengeItem = this.parentElement;

        // Aggiungiamo/rimuoviamo la classe "completed"
        challengeItem.classList.toggle("completed");

        // Cambiamo il testo del pulsante
        if (challengeItem.classList.contains("completed")) {
            this.textContent = "✔ Completato";
            this.style.backgroundColor = "#6c757d"; // Grigio per indicare il completamento
        } else {
            this.textContent = "✅ Completa";
            this.style.backgroundColor = "#ff00ff"; // Ripristiniamo il colore neon
        }
    });
});
