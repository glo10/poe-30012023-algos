/**
 * 1. demander saisir un 1 er nombre
 * 2. demander saisir 2eme nombre
 * 3. Faire l'opération de la division lorsque le 2eme nombre est différent de 0
 * 4. Dans le cas contraire on affiche division par 0 impossible
 */

let nb1 = prompt('nombre 1')
let nb2 = prompt('nombre 2')
nb1 = parseInt(nb1)
nb2 = parseInt(nb2)
if(nb2 === 0) {
    console.log('division par 0 impossible')
} else {
    console.log(nb1 / nb2)
}