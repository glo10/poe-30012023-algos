// // Déclarer une variable
// let firstName = 'Glodie'
// let lastName = 'Tshimini'
// let age = 31

// age = 32
// age = 30

// // Déclarer une constante

// const pi = 3.14

// /*
// * Opérateur d'affection ou d'assignation
// * En js c'est = 
// */

// /**
//  * Maths 
//  * */
// const nb1 = 10
// const nb2 = 3

// console.log(nb1 + nb2) // 13
// console.log(nb1 - nb2) // 7
// console.log(nb1 / nb2) // 3.33


// /**
//  * Opérateurs de comparaison
//  */
// console.log(nb1 == nb2) // false
// console.log(nb1 != nb2) // true

// /**
//  * Opérateurs logiques
//  */

// console.log(nb1 == nb2 & nb1 != 5) // & <=> AND
// console.log(nb1 == nb2 || nb1 != 5) // ||(ALTGR + 6) <=> OR
// console.log(!true) // ! <=> NOT (n'est pas)
// /**
//  * Concaténation
//  */
// console.log('Je m\'appel ' + firstName + ' ' + lastName) // Je m'appel Glodie Tshimini
// console.log("Je m'appel " + firstName + ' ' + lastName) // Je m'appel Glodie Tshimini
// console.log(`Je m'appel ${firstName} ${lastName}`) //  `(ALTGR + 7) propre à JS Je m'appel Glodie Tshimini

// /**
//  * Afficher les informations dans la console
//  */
// console.log('visible depuis F12 et dans l\'onglet console')

// /**
//  * Afficher une boite de dialogue
//  */
// const msg = prompt('mon message ici, la valeur peut être stocké dans une variable ou constante')

// /**
//  * Conditions
//  */

// /*
//  if( condition à vérifier <=> condition doit être vraie pour que le bloc du code ici s'exécute) {
//     // opération 1
// } else { // condition entre () dans le if est faux
//     // opération 2
// }
// */
// if(age <= 18) { // faux
//     console.log('mineur')
// } else if(age == 30) {
//     console.log('la personne a exactement 30 ans')
// } else { // ce bloc de code sera exécuté
//     console.log('majeur')
// }

// /*
// * Transtypage
// * Avec un prompt tout ce qui est récupéré est une chaine de caractère (string)
// * Pour transformer la chaine caractère en nombre il faut utiliser la fonction parseInt(variable ici)
// */

// let myAge = prompt("votre age")
// myAge = parseInt(myAge)

/**
 * Boucle tant que (while)
 * Evalue la condition dès le départ
 * Si dès le début c'est faux, le bloc d'instruction
 * dans la boucle ne sera jamais exécuté
 * Si c'est vrai, ça sera exécuté puis à la fin il évalue à nouveau la condition
 * 
*/
let nb3 = 15
while(nb3 <= 10) { 
// 15 n'est pas inférieur ou égale à 10 donc évaluation à faux de la condition
    console.log('Ne sera jamais exécuté')
    console.log('Ni celle-ci')
}

while(nb3 >= 9) {
    console.log('je suis exécuté 6 fois')
    nb3-- // nb3 <=> nb3 = nb3 - 1 à nb3 j'enlève 1 à chaque tour, lorsque nb3 sera égale à 9, le programme sortira de la boucle
}

// La condition est évaluée à la fin donc dès le départ si c'est faux ça sera quand même exécuté au moins une fois
do {
    console.log('quoi qu\'il arrive je suis exécuté au moins 1 fois')
} while(!true)
