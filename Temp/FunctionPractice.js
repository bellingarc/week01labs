
// function tellFortune(numKids, partnerName, geoLoc, career){
//  let fortune = `You will be a ${career} in ${geoLoc}, married to ${partnerName} with ${numKids} children`
//  console.log(fortune)
// }

// tellFortune(2, 'breanna', 'sanfran', 'exotic dancer')

// tellFortune(3, 'joe bob', 'gitmo', 'political prisoner')

// tellFortune(0, 'no one', 'a troll cave', 'waste of space')
 


function calculateDogAge(dogAge, conversionRate = 7){
    dogAge = dogAge * conversionRate
    console.log(`Your dog is ${dogAge} years old, assuming that a dog ages ${conversionRate} years in one year`)
    return `Your dog is ${dogAge} years old, assuming that a dog ages ${conversionRate} years in one year`
}
let converted_age = calculateDogAge(14, 3)
console.log(converted_age)

calculateDogAge(2, 3)

calculateDogAge(7)

calculateDogAge(true, 5)

calculateDogAge() // Later: change function def to check input is given.