// Nous souhaitons recréer un mot à partir de lettres dans un tableau.

// let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h']
 
// Créer une variable appelé “message” de type string.
// Créer une boucle qui va parcourir le tableau letters (choisis la boucle de ton choix)
// Dans le code de la boucle, ajouter chaque élément du tableau letters à message.
// Une fois la boucle terminée, afficher “message” dans la console.
// Le tableau letters a maintenant changé.
// let letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
 
// Fais en sorte que ta boucle soit adaptée à tous les contenus de letters (toute taille)

let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h']
let letters2 = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
let message = "";
let message2 = ""

for (let i of letters) {
    message += i;
}

for (let i = 0; i < letters2.length; i++) {
    message2 += letters2[i];
}

console.log(message);
console.log(message2);


