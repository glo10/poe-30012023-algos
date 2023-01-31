/**
 * Solution en français sans passer par le code
 * 1. Demander le nom => prompt("message à afficher à l'utilisateur")
 * 2. Demander le prénom
 * 3. Demander l'âge
 * 4. Afficher une phrase avec nom, prénom et age => concatenation des mots et des variables
 */

// Demander en js , on utilise la fonction prompt()
// prompt() affiche une boite de dialogue avec un message qu'on lui donne
let lastName = prompt('nom ?')
let firstName = prompt('prénom ?')
let age = prompt('age ?')
prompt('adresse ?') // pas exploitable dans le programme
console.log('je m\'appelle ' + lastName + ' ' + firstName + ', j\'ai ' + age) // concatenation
// let, un mot clé en JS pour déclarer une variable
// const, un mot clé en Js pour déclarer une constante
// variable (la valeur peut varier au cours de l'exécution de votre programme)
// constante, la valeur ne doit pas varier au cours du temps
lastName = 'toto' // ici on redefinie la valeur stocké par la variable lastName autrement on écrase la valeur saisi par l'utilisateur par toto
console.log('je m\'appelle ' + lastName + ' ' + firstName + ', j\'ai ' + age) // concatenation

/**
 * Si l'utilisateur a moins de 18 ans => mineur
 * Si 18 => Exactement 18 ans et majeur
 * Si > 18 : majeur
 */
// début de la structure if
// Opérateurs de comparaison en JS
// == une comparaison uniquement sur la valeur
// === une comparaison sur la valeur et le type
// '18' == 18 => true
// '18' === 18 => false
// Pas confondre = qui est un opérateur d'affectation avec == ou === opérateurs de comparaison
if(age > 18) {
  console.log('majeur')
} else if (age == 18) {
  console.log('majeur et exactement 18 ans')
} else {
  console.log('mineur')
}
// fin de la structure if