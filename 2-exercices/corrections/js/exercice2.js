const lName = prompt('Nom ?')
const fName = prompt('Prénom ?')
let age = prompt('Age')
age = parseInt(age)

console.log(`Nom : ${lName}, Prénom : ${fName} et age ${age}`)
if(age > 18) {
  console.log('Majeur !')
} else if( age === 18) {
  console.log('Exactement 18 !')
} else {
  console.log('Mineur !')
}