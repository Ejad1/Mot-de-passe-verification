document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("mdp");
    const conditions = {
        majuscule: document.querySelector(".majuscule span"),
        minuscule: document.querySelector(".minuscule span"),
        chiffre: document.querySelector(".chiffre span"),
        special: document.querySelector(".special span"),
        longueur: document.querySelector(".longueur span")
    };

    function updateCondition(conditionElement, isValid) {
        conditionElement.classList.toggle("valide", isValid);
        conditionElement.classList.toggle("invalide", !isValid);
        const icon = conditionElement.querySelector("img");
        icon.src = isValid ? "check2.svg" : "x-lg.svg";
    }

    function validerConditions(mdp) {
        updateCondition(conditions.majuscule, /[A-Z]/.test(mdp));
        updateCondition(conditions.minuscule, /[a-z]/.test(mdp));
        updateCondition(conditions.chiffre, /\d/.test(mdp));
        updateCondition(conditions.special, /[^A-Za-z0-9]/.test(mdp));
        updateCondition(conditions.longueur, mdp.length >= 8);
    }

    passwordInput.addEventListener("input", function() {
        const motDePasse = this.value;
        validerConditions(motDePasse);
    });
});
