/**
 * 1. demander saisir un 1 er nombre
 * 2. demander saisir 2eme nombre
 * 3. Faire l'opération de la division lorsque le 2eme nombre est différent de 0
 * 4. Dans le cas contraire on affiche division par 0 impossible
 */

/**
 * Une fonction qui prend en params un string
 * Me retourne un nombre
 */


/***DECLARATION*****/
/**
 * Prend en X paramètre
 * Retourne un résultat soit addition, soustraction, multiplication ou division
 * en fonction d'un des params qu'on lui donne
 */
function computed(nb1, nb2, operator) {
    nb1 = transformStringToInt(nb1)
    nb2 = transformStringToInt(nb2)
    if(operator === '+') {
        return add(nb1, nb2)
    } else if(operator === '-'){
        return minus(nb1, nb2)
    } else if(operator === '*'){
        return multiply(nb1, nb2)
    } else if(operator === '/'){
        return divide(nb1, nb2)
    } else {
        return 'votre operation est invalide'
    }
}

function transformStringToInt(str){
    str = parseInt(str)
    return str
}

function add (nb1, nb2) {
    return nb1 + nb2
}

function minus(nb1, nb2) {
    return nb1 - nb2
}

function divide(nb1, nb2) {
    if(nb2 === 0) {
        return 'division par 0 impossible'
    } else {
        return nb1 / nb2
    }
}

function multiply(nb1, nb2) {
    return nb1 * nb2
}

//******EXECUTION */
let nb1 = prompt('nombre 1')
let nb2 = prompt('nombre 2')
nb1 = transformStringToInt(nb1)
nb2 = transformStringToInt(nb2)

console.log('avec computed', computed(10,14,'+'))

console.log(`addition ${nb1} + ${nb2} = ${add(nb1, nb2)}`)
console.log(`soustraction ${nb2} - ${nb1} = ${minus(nb1, nb2)}`)
console.log(`multiplication ${nb1} * ${nb2} = ${multiply(nb1, nb2)}`)
