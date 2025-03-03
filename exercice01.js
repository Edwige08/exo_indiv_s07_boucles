// Nous souhaitons créer des compteur.
// Écris une boucle FOR qui affiche dans la console tous les nombres de 0 à 99.
// Écris le même compteur avec une boucle WHILE.
// Réflexion : Quel type de boucle te semble le plus approprié pour cette application ?
// Ecris un compteur qui affiche tous les nombres de 50 à 99 (avec la boucle de ton choix).
// Ecris un compteur qui affiche tous les nombre de 49 à 1 (avec la boucle de ton choix).

// PREMIERE PARTIE : ------------------------
for (let i = 0; i < 100; i++) {
    console.log(i)
}

// DEUXIEME PARTIE : ------------------------
let i = 0;
while (i < 100) {
    console.log(i);
    i++
}

// TROISIEME PARTIE : -----------------------
// La boucle for est plus intéressante car elle ne nécessite pas de créer une variable en dehors 
// de la boucle et elle prend moins de lignes à écrire.

// QUATRIEME PARTIE  : ----------------------
for (let i = 50; i < 100; i++) {
    console.log(i);
}

// CINQUIEME PARTIE : -----------------------
let j = 49;
while (j > 0) {
    console.log(j);
    j--;
}