// Nous souhaitons créer un décompte.
// Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
// Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.

let myNumber = prompt("Donne-moi un chiffre entre 0 et 10.");

const myFunction = () => {
    if (myNumber >= 0 && myNumber <= 11) {
        for (let i = myNumber; i > 0; i--) {
            console.log(i);
        }
    } else {
        alert("Ce n'était pas un chiffre entre 0 et 10 !");
    }
}

myFunction()