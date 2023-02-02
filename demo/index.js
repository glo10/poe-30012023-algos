// Commentaire sur une ligne cad ligne non interprété par JS
/**
 * Commentaire
 * sur
 * plusieurs
 * lignes
 */

// // Déclarer une variable
let firstName = 'Glodie'
let lastName = 'Tshimini'
let age = 31

age = 32 // change la valeur de la variable age de 31 à 30 (pas besoin du let avant, ici on réaffecte la valeur, let sert à déclarer la variable)
age = 30

// Déclarer une constante, la valeur ne doit pas changer au cours du temps

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
console.log(nb1 / nb2) // 3.333333
console.log(nb1 % nb2) // 1


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
 * Opérateur de concaténation + ou `${variable}`
 * Attention + avec des strings effectue une concaténation, + avec des nombres => addition
 */
console.log('Je m\'appelle ' + firstName + ' ' + lastName) // Je m'appel Glodie Tshimini
console.log("Je m'appelle " + firstName + ' ' + lastName) // Je m'appel Glodie Tshimini
console.log(`Je m'appelle ${firstName} ${lastName}`) //  `(ALTGR + 7) propre à JS Je m'appel Glodie Tshimini

/**
 * Afficher les informations dans la console
 * console est un objet natif de JS que vous verrez plus tard
 * log est une fonction de l'objet console, que vous verrez plus tard
 */
console.log('visible depuis F12 et dans l\'onglet console')

/**
 * Afficher une boite de dialogue
 * Attention tout ce qui récupéré par un prompt est de type string
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
if(age < 18) { // faux
    console.log('mineur')
} else if(age == 30) {
    console.log('la personne a exactement 30 ans')
} else { // ce bloc de code sera exécuté
    console.log('majeur')
}

/*
* Transtypage (passer d'un type à un autre type de données)
* Avec un prompt tout ce qui est récupéré est une chaine de caractère 
* Pour transformer la chaine caractère en nombre il faut utiliser la fonction parseInt(variable ici), il en existe d'autres...
*/

let myAge = prompt("votre age")
myAge = parseInt(myAge)

/**
 * Boucle tant que (while)
 * Evalue la condition dès le départ
 * Si dès le début c'est faux, le bloc d'instruction dans la boucle ne sera jamais exécuté
 * Si c'est vrai, ça sera exécuté puis à la fin il évalue à nouveau la condition (si c'est vrai, il exécute encore les instructions)
 * Tant que c'est vrai, je boucle
 * 
*/
let nb3 = 15
while(nb3 <= 10) { // condition dès le début est fausse donc rien sera exécuté
    // 15 n'est pas inférieur ou égale à 10 donc évaluation à faux de la condition
    console.log('Ne sera jamais exécuté')
    console.log('Ni celle-ci')
    console.log('Tout ce qui est à l\'intérieur de mon bloc while entre les accolades ne sera jamais exécuté tant que nb3 sera supérieur à 10')
}

// while avec une décrémentation
while(nb3 >= 10) {
    console.log('je suis exécuté 6 fois')
    nb3-- // nb3 <=> nb3 = nb3 - 1 à nb3 j'enlève 1 à chaque tour, lorsque nb3 sera égale à 9, le programme sortira de la boucle
    /**
     * 15 >= 10 est vrai 1 tour
     * 14 >= 10 est vrai 2 tour
     * 13 >= 10 est vrai 3 tour
     * 12 >= 10 est vrai 4 tour
     * 11 >= 10 est vrai 5 tour
     * 10 >= 10 est vrai 6 tour
     * 9 >= 10 est faux, c'est fini le programme va quiiter la boucle
     */
}

// La condition est évaluée à la fin de la boucle donc dès le départ si c'est faux ça sera quand même exécuté au moins une fois
do {
    console.log('quoi qu\'il arrive je suis exécuté au moins 1 fois')
} while(!true)

// While avec une incrémentation
let nb4 = 10
while(nb4 < 15) {
    console.log(nb4)
    nb4++
}

// do while
let nb5 = 15
do {// fait et ensuite vérifie la condition
    console.log(nb5)
} while(nb5 < 15)

/**
 * Boucle for
 * 1. un compteur (initialisation)
 * 2. Une condition (condition)
 * 3. Incrémentation ou décrémentation (variation du compteur)
 */
for(let i = 0; i < 10;i++) {// exactement pareil que let i = 10; i > 0; i--
    console.log('i ', i)
}

/**
 * Fonction
 * 2 phases
 *  1. Déclaration de la fonction (nom, [paramètres]) [] : optionnel
 *  2. L'exécution (appel de la fonction), l'appeler avec son nom([params])
 */
function hello() {// fonction sans params
    console.log('hello world')
}

hello() // hello world


function helloYou(firstName) {// fonction avec un paramètre (jargon technique on dit params)
    console.log('hello ' + firstName)
}

helloYou('Glodie') // hello Glodie

function helloUs(firstName1, firstName2) {// fonction avec 2 params
    return 'hello ' + firstName1 + ' ' + firstName2 
}
let glodie = prompt('prenom')

let us = helloUs('Bob', glodie)
let us2 = helloUs('Toto', 'Momo')
console.log(us) // hello Bob Glodie
console.log(helloUs('charles', 'marc')) // hello charles marc

/**
 * Tableau en JS
 */

let tab = [] // tableau vide
// remplissage du tableau de manière statique (manuel)
tab[0] = 1 
tab[1] = 2
tab[2] = 3

// remplissage du tableau au sein d'une boucle de manière dynamique
for(let i = 0; i <= 100; i++) {
    tab[i] = i+1
}

let sentence = "hello dhdhdjdj" // chaine de caractère = tableau 
// qui stocke aux rangs 0 = h, 1 = e, 2= l etc

for(let i = 0; i < sentence.length; i++) {
    console.log(sentence[i])
}