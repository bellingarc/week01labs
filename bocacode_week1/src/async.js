// WILL NOT UN UNLESS RAN IN BROWSER
// PROMPT WORKS ONLY IN BROWSER
// CODE KEPT HERE FOR RECORD OF FUNCTIONS USED
function getName(){
    let name = prompt("Enter your name: ")
    return name 
}
console.log('Hello, ' , getName())


function getName2(callbackFunction){ // getName2 expects one argument named locally callbackFunction
    let name =prompt('Enter your name: ')
    callbackFunction(name)          // getName2 is told that it's argument will be called on 'name'
}
getName2(usersName => console.log('Welcome', usersName)) // passing the function to be called as argument