// Strings 101

// double quotes " "
// single quotes ' '
// ` `

// Challenge: It's your dog's birthday!

/* Create 2 variables related to your dog. Make one of them its age and update it by one. Log out all the values in a friendly way of your choosing
*/

let myDog = "Helya"
let age = 2
const dogSentence = 'my dog\'s name is ' + myDog + ' and her age is ' + age 
/******************************************************************************************/
/******************************************************************************************/
const dogLiteral = `My dog's name is ${myDog} and her age is ${age}` // more efficient, not calling concat method multiple times. 
/******************************************************************************************/
/******************************************************************************************/
console.log(dogSentence)
console.log(dogLiteral)
age++
console.log("Today is her birthday, and now she is ", age)

