// Déclarer une variable
let firstName = 'Glodie'
let lastName = 'Tshimini'
let age = 31

age = 32
age = 30

// Déclarer une constante

const pi = 3.14

/*
* Opérateur d'affection ou d'assignation
* En js c'est = 
*/

/**
 * Maths 
 * */
const nb1 = 10
const nb2 = 3

console.log(nb1 + nb2) // 13
console.log(nb1 - nb2) // 7
console.log(nb1 / nb2) // 3.33


/**
 * Opérateurs de comparaison
 */
console.log(nb1 == nb2) // false
console.log(nb1 != nb2) // true

/**
 * Opérateurs logiques
 */

console.log(nb1 == nb2 & nb1 != 5) // & <=> AND
console.log(nb1 == nb2 || nb1 != 5) // ||(ALTGR + 6) <=> OR
console.log(!true) // ! <=> NOT (n'est pas)
/**
 * Concaténation
 */
console.log('Je m\'appel ' + firstName + ' ' + lastName) // Je m'appel Glodie Tshimini
console.log("Je m'appel " + firstName + ' ' + lastName) // Je m'appel Glodie Tshimini
console.log(`Je m'appel ${firstName} ${lastName}`) //  `(ALTGR + 7) propre à JS Je m'appel Glodie Tshimini

/**
 * Afficher les informations dans la console
 */
console.log('visible depuis F12 et dans l\'onglet console')

/**
 * Afficher une boite de dialogue
 */
const msg = prompt('mon message ici, la valeur peut être stocké dans une variable ou constante')

/**
 * Conditions
 */

/*
 if( condition à vérifier <=> condition doit être vraie pour que le bloc du code ici s'exécute) {
    // opération 1
} else { // condition entre () dans le if est faux
    // opération 2
}
*/
if(age <= 18) { // faux
    console.log('mineur')
} else if(age == 30) {
    console.log('la personne a exactement 30 ans')
} else { // ce bloc de code sera exécuté
    console.log('majeur')
}

/*
* Transtypage
* Avec un prompt tout ce qui est récupéré est une chaine de caractère (string)
* Pour transformer la chaine caractère en nombre il faut utiliser la fonction parseInt(variable ici)
*/

let myAge = prompt("votre age")
myAge = parseInt(myAge)